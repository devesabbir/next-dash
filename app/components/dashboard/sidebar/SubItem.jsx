"use client";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import SidebarItem from "./SidebarItem";
import { ChevronDown } from "lucide-react";

function SubItem({ item }) {
  const { path, name, items } = item;
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
  }, [items, path, pathname]);

  return (
    <>
      <div
        onClick={onClick}
        className={`p-2 my-1 text-slate-100 font-medium cursor-pointer hover:text-orange-700 flex justify-between items-center ${
          isActive && "active"
        }`}
      >
        {name}
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

export default SubItem;
