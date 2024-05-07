import {
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
} from "lucide-react";

export const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: BadgeDollarSign,
  },
  {
    name: "Users",
    path: "/dashboard/users",
    icon: WalletCards,
  },
  {
    name: "Accounts",
    path: "/dashboard/accounts",
    icon: CircleUserRound,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
    items: [
      {
        name: "General",
        path: "/dashboard/settings",
      },
      {
        name: "Security",
        path: "/dashboard/settings/security",
      },
      {
        name: "Notifications",
        path: "/dashboard/settings/notifications",
      },
    ],
  },
];
