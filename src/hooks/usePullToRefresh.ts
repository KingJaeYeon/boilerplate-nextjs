import { useState, useEffect, useRef } from "react";

const usePullToRefresh = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const listRef = useRef<any>(null);
  const topRef = useRef<any>(null); // 상단 감시용 div
  const isTopVisible = useRef<boolean>(false);
  const startY = useRef<number>(0);
  const isPulling = useRef<boolean>(false);
  const threshold = 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isTopVisible.current = entry.isIntersecting;
        });
      },
      { threshold: 1 },
    );

    if (topRef.current) {
      observer.observe(topRef.current);
    }

    return () => {
      if (topRef.current) {
        observer.unobserve(topRef.current);
      }
    };
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    if (isTopVisible.current && !isRefreshing) {
      startY.current = e.touches[0].clientY;
      isPulling.current = true;
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isPulling.current) {
      const distancePulled = e.touches[0].clientY - startY.current;
      if (distancePulled > threshold) {
        e.preventDefault(); // 기본 스크롤 방지
      }
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (isPulling.current) {
      const endY = e.changedTouches[0].clientY;
      const distancePulled = endY - startY.current;
      if (distancePulled > threshold && isTopVisible.current) {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 1000); // 예제에서는 1초 후 새로고침 해제
      }
    }
    isPulling.current = false;
  };

  useEffect(() => {
    const refCurrent = listRef?.current;
    refCurrent?.addEventListener("touchstart", handleTouchStart);
    refCurrent?.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    refCurrent?.addEventListener("touchend", handleTouchEnd);

    return () => {
      refCurrent?.removeEventListener("touchstart", handleTouchStart);
      refCurrent?.removeEventListener("touchmove", handleTouchMove);
      refCurrent?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isRefreshing]);

  return { listRef, isRefreshing, topRef };
};

export default usePullToRefresh;
