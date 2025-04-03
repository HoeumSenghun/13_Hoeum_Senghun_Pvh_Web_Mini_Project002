import { workspaceService } from "@/service/workspace-service";
import "../globals.css";
import NavBarComponent from "./_components/Navbar";
import SidebarComponent from "./_components/Sidebar";



export default async function RootLayout({ children }) {

 
  const workspace = await workspaceService()
  console.log(workspace)

  return (
    <html lang="en">
      <body className="text-charcoal">
        <div className="grid grid-cols-12">
          <div className="container col-span-2 mx-auto">
            <SidebarComponent  workspace={workspace}  /> 
          </div>
          <div className="container col-span-10 mx-auto">
            <NavBarComponent workspace={workspace} />
            <div className="px-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
