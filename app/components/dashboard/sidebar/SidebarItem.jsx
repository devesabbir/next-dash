"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import SubItem from "./SubItem";

function SidebarItem({ item }) {
  const { name, path, icon: Icon, items } = item;
  const router = useRouter();
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }
    router.push(path);
  };

  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      const found = items.find((item) => item.path === pathname);
      if (found) {
        setExpanded(true);
        return true;
      }
    }
    return path === pathname;
  }, [path, pathname, items]);

  return (
    <>
      <div
        onClick={onClick}
        className={`p-2 my-1 font-medium text-slate-100 cursor-pointer hover:text-orange-700 flex justify-between items-center ${
          isActive && "active bg-slate-100"
        }`}
      >
        <span>{<Icon />}</span>
        <span className="flex-1 ms-2">{name}</span>
        {items && items.length > 0 && (
          <ChevronDown
            size={18}
            className={`${expanded && "rotate-180 duration-200"}`}
          />
        )}
      </div>
      {expanded && items && items.length > 0 && (
        <div className="ps-8">
          {items.map((item) => (
            <SubItem key={item.path} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default SidebarItem;
