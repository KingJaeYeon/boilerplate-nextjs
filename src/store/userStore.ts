import { create } from "zustand";

interface UserStoreType {
  isLogin: boolean;
  user: any;
  autoLogin: () => void;
  update: (user: any) => void;
  login: (type: string, redirect?: string) => void;
  logout: () => void;
  isAuthModal: string;
  setAuthModal: (value: boolean, type?: string) => void;
}

const useUserStore = create<UserStoreType>((set: any, get: any) => ({
  isLogin: false,
  user: {
    _id: null,
    nickName: "Guest",
    name: "Guest",
    avatar: "/images/default.png",
    email: null,
    createAt: null,
  },
  update: (user: any) => {
    set({ user: { ...get().user, ...user } });
  },
  autoLogin: async () => {
    const hashParams = window.location.href.includes("access_token");
    const accessJwt = window.localStorage.getItem("feathers-jwt");

    if (!hashParams && !accessJwt) {
      return;
    }

    if (!!accessJwt) {
      const nowDate = new Date().getTime();
      const parseJwt = JSON.parse(atob(accessJwt.split(".")[1]));
      const tokenDate = parseJwt.exp * 1000;
      if (nowDate > tokenDate) {
        return window.location.reload();
      }
    }

    const authenticate = "로그인정보";
    // await server?.authenticate();

    if (!authenticate) {
      return;
    }

    set({ isLogin: true, user: authenticate });
  },
  login: async (type: string, redirect?: string) => {
    if (!redirect) {
      window.localStorage.removeItem("feathers-jwt");
      window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth/${type}`;
    } else {
      window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth/${type}?redirect=${redirect}`;
    }
  },
  logout: async () => {
    window.localStorage.removeItem("feathers-jwt");
    set({
      isLogin: false,
      user: {
        _id: null,
        name: "Guest",
        avatar:
          "https://coin-pickle.s3.ap-northeast-2.amazonaws.com/upload/user/userDefaultImg.png",
        email: null,
        createAt: null,
      },
    });
    window.location.href = "/";
  },
  isAuthModal: "",
  setAuthModal: (value: boolean, type: string = "login") => {
    if (value) {
      set({ isAuthModal: type });
    } else {
      set({ isAuthModal: "" });
    }
  },
}));

export default useUserStore;
