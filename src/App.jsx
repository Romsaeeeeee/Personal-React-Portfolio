import BodyTesting from "./assets/pages/MainPages/BodyTesting"
import SidePanel from "./assets/pages/SidePanel"


function App() {


  return (
    <div className="h-screen w-screen flex justify-center items-center gap-10 bg-[#101110] p-10">
      <div className="w-[15%] h-full bg-[#1F1E1F] rounded-xl">
        <SidePanel />
      </div>
      <div className="w-[70%] h-full bg-[#1F1E1F] rounded-xl">
        <BodyTesting />
      </div>
    </div>
  )
}

export default App
