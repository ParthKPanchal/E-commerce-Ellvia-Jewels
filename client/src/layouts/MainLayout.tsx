import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-[#FFF6E8] min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;