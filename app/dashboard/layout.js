import DashboardNavbar from "@/app/components/dashboard/Navbar";
import Sidebar from "@/app/components/dashboard/sidebar/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div>
      <DashboardNavbar />
      <div class="flex gap-1">
        <div class="sticky left-0 bottom-0 bg-dash_blue_dark flex-none w-60 min-h-screen ">
          <Sidebar />
        </div>
        <div class="grow h-screen bg-dash_blue_dark">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
