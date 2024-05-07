"use client";

import { menuItems } from "@/data/menuData";
import SidebarItem from "./SidebarItem";

function SidebarMenus() {
  return (
    <div>
      {menuItems?.map((item) => (
        <SidebarItem key={item.path} item={item} />
      ))}
    </div>
  );
}

export default SidebarMenus;
