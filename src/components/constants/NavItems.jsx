import { BookOpenCheck, LayoutDashboard } from "lucide-react";

export const NavItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    to: "/",
    color: "text-sky-500",
  },
  {
    title: "Example",
    icon: BookOpenCheck,
    to: "/example",
    color: "text-orange-500",
    isChidren: true,
    children: [
      {
        title: "Example-01",
        icon: BookOpenCheck,
        color: "text-red-500",
        to: "/example/employees",
      },
      {
        title: "Example-02",
        icon: BookOpenCheck,
        color: "text-red-500",
        to: "/example/example-02",
      },
      {
        title: "Example-03",
        icon: BookOpenCheck,
        color: "text-red-500",
        to: "/example/example-03",
      },
    ],
  },
];