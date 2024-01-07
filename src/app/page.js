import CRM from "./components/CRM";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex ">
        <div className="w-1/5 shadow-xl hover:shadow-2xl bg-white p-4 transition-all duration-300">
          <Sidebar />
        </div>

        <div className="w-4/5 bg-gray-50">
          <Navbar />
          <CRM />
        </div>
      </div>
    </>
  );
}
