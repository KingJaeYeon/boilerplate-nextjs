import { create } from "zustand";

interface VideoStore {
  data: {
    localVideoData: {
      sec: number;
      videoId: string;
      channelId: string;
    };
    globalVideoData: {
      sec: number;
      videoId: string;
      channelId: string;
    };
  };
  update: (key: "localVideoData" | "globalVideoData", newData: any) => void;
}
const getInitialVideoData = () => {
  const video = window.localStorage.getItem("video") || "";
  if (video) {
    const parse = JSON.parse(video);
    return {
      localVideoData: {
        sec: (parse.localVideoData.sec as number) ?? 0,
        videoId: (parse?.localVideoData.videoId as string) ?? "",
        channelId: (parse?.localVideoData.channelId as string) ?? "",
      },
      globalVideoData: {
        sec: (parse?.globalVideoData.sec as number) ?? 0,
        videoId: (parse?.globalVideoData.videoId as string) ?? "",
        channelId: (parse?.globalVideoData.channelId as string) ?? "",
      },
    };
  }
  return {
    localVideoData: {
      sec: 0,
      videoId: "",
      channelId: "",
    },
    globalVideoData: {
      sec: 0,
      videoId: "",
      channelId: "",
    },
  };
};

export const useVideoStore = create<VideoStore>((set, get) => ({
  data: getInitialVideoData(),
  update: (key: "localVideoData" | "globalVideoData", newData) => {
    const data = get().data;
    const updatedData = { ...data, [key]: newData };
    set({ data: updatedData });
    window.localStorage.setItem("video", JSON.stringify(updatedData));
  },
}));
