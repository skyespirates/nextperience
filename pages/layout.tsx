import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <main
        className="absolute z-0 top-[57px] bg-gray-300 dark:bg-slate-800 dark:text-gray-300 w-full flex justify-center items-center text-7xl font-extrabold"
        style={{ minHeight: "calc(100vh - 57px)" }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
