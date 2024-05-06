import { menus } from "@/data/menuData";
import Link from "next/link";
import MenuItem from "./MenuItem";

function Menus() {
  return (
    <div>
      <ul>
        {menus?.map((item, index) => (
          <li key={item + index.toString()}>
            {item.title}
            <div className="ps-3">
              {item?.children?.map((item, index) => (
                <span className="block w-full" key={item + index.toString()}>
                  <MenuItem path={item.path} title={item.title} />
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menus;
