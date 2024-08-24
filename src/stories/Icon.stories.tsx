"use client";
import React from "react";
import {
  CardLoading,
  IconArrowDown,
  IconArrowUp,
  IconCandleChart,
  IconCategory,
  IconChart,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconClose,
  IconConfirm,
  IconDelete,
  IconDown,
  IconDropDownDown,
  IconDropDownUp,
  IconEllipsis,
  IconError,
  IconExchange,
  IconEyeOff,
  IconEyeOn,
  IconHome,
  IconInfo,
  IconLeft,
  IconLinearChart,
  IconLinearCommunity,
  IconLinearCopy,
  IconLinearDashBoard,
  IconLinearGlobal,
  IconLinearHeart,
  IconLinearImage,
  IconLinearLogout,
  IconLinearMap,
  IconLinearNews,
  IconLinearNotice,
  IconLinearPieChart,
  IconLinearPlayer,
  IconLinearReply,
  IconLinearReport,
  IconLinearSettings,
  IconLinearStar,
  IconLinearUser,
  IconLinearUserUnFollow,
  IconLink,
  IconLoad,
  IconMaximize,
  IconMenu,
  IconMinus,
  IconMoon,
  IconMore,
  IconMoreInfo,
  IconMove,
  IconMoving,
  IconNew,
  IconNext,
  IconOutLink,
  IconPlayerExpand,
  IconPlayerForward,
  IconPlayerPause,
  IconPlayerRewind,
  IconPlus,
  IconPointer,
  IconPopular,
  IconPrev,
  IconReceipt,
  IconRefresh,
  IconReport,
  IconRight,
  IconSearch,
  IconShare,
  IconSlash,
  IconSolidCommunity,
  IconSolidCopy,
  IconSolidDashBoard,
  IconSolidGlobal,
  IconSolidHeart,
  IconSolidImage,
  IconSolidLogout,
  IconSolidMap,
  IconSolidNews,
  IconSolidNotice,
  IconSolidPieChart,
  IconSolidPlayer,
  IconSolidReply,
  IconSolidReport,
  IconSolidSettings,
  IconSolidStar,
  IconSolidUser,
  IconSolidUserUnFollow,
  IconSun,
  IconSwap,
  IconThumbDown,
  IconThumbUp,
  IconTrash,
  IconUp,
  IconWallet,
  Loading1,
  Loading2,
} from "@/assets/svg";
import {
  Naver,
  YoutubeEmpty,
  KaKao,
  Youtube,
  Twitter,
  FaceBook,
  Github,
  Google,
  Reddit,
  FaceBook2,
  Slack,
  LinkedIn,
  Telegram,
  Instagram,
  Apple,
} from "@/assets/svg/platform";
import {
  IconBlockQuote,
  IconOrderList,
  IconImage,
  IconUnderLine,
  IconStrike,
  IconBold,
  IconItalic,
  IconH1,
  IconUnOrderList,
  IconH2,
} from "@/assets/svg/editor";

import Row from "@/components/Layout/Row";
import Text from "@/components/Layout/Text";

const meta = {
  title: "COMPONENTS/Icon",
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <Row className={"flex-wrap gap-[30px] bg-background p-[48px]"}>
        <Story />
      </Row>
    ),
  ],
};
export default meta;

export const Default = () => {
  return (
    <>
      <Icon>
        <IconCategory />
      </Icon>
      <Icon>
        <IconChart />
      </Icon>
      <Icon>
        <IconLinearChart />
      </Icon>
      <Icon>
        <IconCandleChart />
      </Icon>
      <Icon>
        <IconLinearPieChart />
      </Icon>
      <Icon>
        <IconSolidPieChart />
      </Icon>
      <Icon>
        <IconCheck />
      </Icon>
      <Icon>
        <IconChevronLeft />
      </Icon>
      <Icon>
        <IconChevronRight />
      </Icon>
      <Icon>
        <IconClose />
      </Icon>
      <Icon>
        <IconConfirm />
      </Icon>
      <Icon>
        <IconDelete />
      </Icon>
      <Icon>
        <IconDropDownDown />
      </Icon>
      <Icon>
        <IconDropDownUp />
      </Icon>
      <Icon>
        <IconError />
      </Icon>
      <Icon>
        <IconSearch />
      </Icon>
      <Icon>
        <IconSun />
      </Icon>
      <Icon>
        <IconMoon />
      </Icon>
      <Icon>
        <IconDown />
      </Icon>
      <Icon>
        <IconUp />
      </Icon>
      <Icon>
        <IconLeft />
      </Icon>
      <Icon>
        <IconRight />
      </Icon>
      <Icon>
        <IconEllipsis />
      </Icon>
      <Icon>
        <IconExchange />
      </Icon>
      <Icon>
        <IconEyeOn />
      </Icon>
      <Icon>
        <IconEyeOff />
      </Icon>
      <Icon>
        <IconHome />
      </Icon>
      <Icon>
        <IconInfo />
      </Icon>
      <Icon>
        <IconMoreInfo />
      </Icon>
      <Icon>
        <IconLinearCommunity />
      </Icon>
      <Icon>
        <IconSolidCommunity />
      </Icon>
      <Icon>
        <IconLinearCopy />
      </Icon>
      <Icon>
        <IconSolidCopy />
      </Icon>
      <Icon>
        <IconLinearDashBoard />
      </Icon>
      <Icon>
        <IconSolidDashBoard />
      </Icon>
      <Icon>
        <IconLinearGlobal />
      </Icon>
      <Icon>
        <IconSolidGlobal />
      </Icon>
      <Icon>
        <IconLinearHeart />
      </Icon>
      <Icon>
        <IconSolidHeart />
      </Icon>
      <Icon>
        <IconLinearImage />
      </Icon>
      <Icon>
        <IconSolidImage />
      </Icon>
      <Icon>
        <IconLinearLogout />
      </Icon>
      <Icon>
        <IconSolidLogout />
      </Icon>
      <Icon>
        <IconLinearMap />
      </Icon>
      <Icon>
        <IconSolidMap />
      </Icon>
      <Icon>
        <IconLinearNews />
      </Icon>
      <Icon>
        <IconSolidNews />
      </Icon>
      <Icon>
        <IconLinearNotice />
      </Icon>
      <Icon>
        <IconSolidNotice />
      </Icon>
      <Icon>
        <IconLinearPlayer />
      </Icon>
      <Icon>
        <IconSolidPlayer />
      </Icon>
      <Icon>
        <IconPlayerExpand />
      </Icon>
      <Icon>
        <IconPlayerForward />
      </Icon>
      <Icon>
        <IconPlayerPause />
      </Icon>
      <Icon>
        <IconPlayerRewind />
      </Icon>
      <Icon>
        <IconLinearReply />
      </Icon>
      <Icon>
        <IconSolidReply />
      </Icon>
      <Icon>
        <IconLinearReport />
      </Icon>
      <Icon>
        <IconSolidReport />
      </Icon>
      <Icon>
        <IconReport />
      </Icon>
      <Icon>
        <IconLinearSettings />
      </Icon>
      <Icon>
        <IconSolidSettings />
      </Icon>
      <Icon>
        <IconLinearStar />
      </Icon>
      <Icon>
        <IconSolidStar />
      </Icon>
      <Icon>
        <IconLinearUser />
      </Icon>
      <Icon>
        <IconSolidUser />
      </Icon>
      <Icon>
        <IconLinearUserUnFollow />
      </Icon>
      <Icon>
        <IconSolidUserUnFollow />
      </Icon>
      <Icon>
        <IconLink />
      </Icon>
      <Icon>
        <IconLoad />
      </Icon>
      <Icon>
        <IconMaximize />
      </Icon>
      <Icon>
        <IconMenu />
      </Icon>
      <Icon>
        <IconPlus />
      </Icon>
      <Icon>
        <IconMinus />
      </Icon>
      <Icon>
        <IconMore />
      </Icon>
      <Icon>
        <IconMove />
      </Icon>
      <Icon>
        <IconMoving />
      </Icon>
      <Icon>
        <IconNew />
      </Icon>
      <Icon>
        <IconNext />
      </Icon>
      <Icon>
        <IconPrev />
      </Icon>
      <Icon>
        <IconOutLink />
      </Icon>
      <Icon>
        <IconPointer />
      </Icon>
      <Icon>
        <IconPopular />
      </Icon>
      <Icon>
        <IconReceipt />
      </Icon>
      <Icon>
        <IconRefresh />
      </Icon>
      <Icon>
        <IconShare />
      </Icon>
      <Icon>
        <IconSlash />
      </Icon>
      <Icon>
        <IconSwap />
      </Icon>
      <Icon>
        <IconThumbDown />
      </Icon>
      <Icon>
        <IconThumbUp />
      </Icon>
      <Icon>
        <IconTrash />
      </Icon>
      <Icon>
        <IconArrowUp />
      </Icon>
      <Icon>
        <IconArrowDown />
      </Icon>
      <Icon>
        <IconWallet />
      </Icon>
      <Icon>
        <Loading1 />
      </Icon>
      <Icon>
        <Loading2 />
      </Icon>
      <Icon>
        <CardLoading />
      </Icon>
    </>
  );
};

export const Platform = () => {
  return (
    <>
      <Icon>
        <Naver />
      </Icon>
      <Icon>
        <Apple />
      </Icon>
      <Icon>
        <YoutubeEmpty />
      </Icon>
      <Icon>
        <Youtube />
      </Icon>
      <Icon>
        <Google />
      </Icon>
      <Icon>
        <FaceBook2 />
      </Icon>
      <Icon>
        <FaceBook />
      </Icon>
      <Icon>
        <KaKao />
      </Icon>
      <Icon>
        <Twitter />
      </Icon>
      <Icon>
        <Github />
      </Icon>
      <Icon>
        <LinkedIn />
      </Icon>
      <Icon>
        <Slack />
      </Icon>
      <Icon>
        <Instagram />
      </Icon>
      <Icon>
        <Reddit />
      </Icon>
      <Icon>
        <Telegram />
      </Icon>
    </>
  );
};

export const Editor = () => {
  return (
    <>
      <Icon>
        <IconBlockQuote />
      </Icon>
      <Icon>
        <IconBold />
      </Icon>
      <Icon>
        <IconH1 />
      </Icon>
      <Icon>
        <IconH2 />
      </Icon>
      <Icon>
        <IconImage />
      </Icon>
      <Icon>
        <IconItalic />
      </Icon>
      <Icon>
        <IconOrderList />
      </Icon>
      <Icon>
        <IconUnOrderList />
      </Icon>
      <Icon>
        <IconStrike />
      </Icon>
      <Icon>
        <IconUnderLine />
      </Icon>
    </>
  );
};

function Icon({ children }: any) {
  console.log(children);
  return (
    <Row className={"w-full max-w-[200px] items-center gap-[10px]"}>
      {children}
      <Text className={"body6"}>{children.type.name}</Text>
    </Row>
  );
}
