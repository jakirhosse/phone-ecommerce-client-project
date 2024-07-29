import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Navbar";

const DashboardLayout = ({ children }: any) => {
  return (
    <main>
      <Header/>
      {children}
      <Footer/>
    </main>
  );
};

export default DashboardLayout;
