import HomeIcon from "@/components/Icons/Home";
import BookmarkIcon from "@/components/Icons/Bookmark";
import GraduationIcon from "@/components/Icons/Graduation";
import FileChartIcon from "@/components/Icons/FileChart";
import UsdSquareIcon from "@/components/Icons/SignOut";
import SlidersSquareIcon from "@/components/Icons/SlidersSquare";
import SignOutIcon from "@/components/Icons/SignOut";
import { constant } from "lodash";

export const navigation = [
  {
    id: "home",
    text: "Home",
    href: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    id: "course",
    text: "Course",
    href: "#",
    icon: <BookmarkIcon />,
  },
  {
    id: "students",
    text: "Students",
    href: "/dashboard/students",
    icon: <GraduationIcon />,
  },
  {
    id: "payment",
    text: "Payment",
    href: "#",
    icon: <UsdSquareIcon />,
  },
  {
    id: "report",
    text: "Report",
    href: "#",
    icon: <FileChartIcon />,
  },
  {
    id: "settings",
    text: "Settings",
    href: "#",
    icon: <SlidersSquareIcon />,
  },
  {
    id: "logout",
    href: "/",
    text: "Logout",
    icon: <SignOutIcon />,
  },
];

export const BASE_URL = "https://dummyjson.com/users";
