import Topbar from "./components/Topbar";
import BodyTesting from "./pages/MainPages/BodyTesting";
import SidePanel from "./pages/SidePanel";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center gap-10 p-7 bg-[#101110] tablet:flex-col tablet:p-5 overflow-y-auto">
      <div className="w-[20%] h-full bg-[#232423] rounded-xl shadow-[#101110] shadow-2xl border-[#373837] border tablet:w-full tablet:h-fit">
        <SidePanel />
      </div>
      <div className="w-[75%] h-full bg-[#232423] rounded-xl shadow-[#101110] shadow-2xl border-[#373837] border tablet:w-full">
        <div className="w-full flex justify-end items-end">
          <Topbar />
        </div>
        <BodyTesting />
      </div>
    </div>
  );
}

export default App;
