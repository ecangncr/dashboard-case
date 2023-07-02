import HomeIcon from "@/components/Icons/Home";
import BookmarkIcon from "@/components/Icons/Bookmark";
import GraduationIcon from "@/components/Icons/Graduation";
import FileChartIcon from "@/components/Icons/FileChart";
import UsdSquareIcon from "@/components/Icons/SignOut";
import SlidersSquareIcon from "@/components/Icons/SlidersSquare";
import SignOutIcon from "@/components/Icons/SignOut";

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
    href: "/dashboard/course",
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
    href: "/dashboard/payment",
    icon: <UsdSquareIcon />,
  },
  {
    id: "report",
    text: "Report",
    href: "/dashboard/report",
    icon: <FileChartIcon />,
  },
  {
    id: "settings",
    text: "Settings",
    href: "/dashboard/settings",
    icon: <SlidersSquareIcon />,
  },
  {
    id: "logout",
    href: "/",
    text: "Logout",
    icon: <SignOutIcon />,
  },
];
