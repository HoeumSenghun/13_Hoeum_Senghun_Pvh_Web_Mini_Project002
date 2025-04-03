import NavBarComponent from "./_components/Navbar";
import SidebarComponent from "./_components/Sidebar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <div className="container mx-auto my-12">
         <SidebarComponent/> 
        </div>
        <div>
          <NavBarComponent/>
          {children}
        </div>
      </body>
    </html>
  );
}
