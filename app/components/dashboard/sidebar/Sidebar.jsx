"use client";

import { useRouter } from "next/navigation";
import Menus from "../menu/Menus";

function Sidebar() {
  const router = useRouter();
  const logout = () => {
    document.cookie = `login = 'false'`;
    router.push("/login");
  };
  return (
    <aside className=" text-dash_white_light border border-t-0 h-full p-2">
      <Menus />
      <button onClick={logout}>LogOut</button>
    </aside>
  );
}

export default Sidebar;
