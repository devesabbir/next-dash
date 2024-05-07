import DashboardNavbar from "@/app/components/dashboard/Navbar";
import SidebarMenus from "@/app/components/dashboard/sidebar/SidebarMenus";

function DashboardLayout({ children }) {
  return (
    <div>
      <DashboardNavbar />
      <div className="flex gap-1">
        <div className="sticky left-0 bottom-0 bg-dash_blue_dark flex-none w-60 min-h-screen ">
          <SidebarMenus />
        </div>
        <div className="grow h-screen bg-dash_blue_dark">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
