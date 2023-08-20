import BG from "./Elements/BG";
import Left from "./Elements/Left";
import Right from "./Elements/Right";

const App = () => {
  return (
    <main>
      <BG />
      <div className="w-screen h-screen flex justify-center items-center text-white">
        <div className="flex items-end gap-[30px] lg:flex-col lg:items-center lg:gap-4">
          <Left />
          <Right />
        </div>
      </div>
    </main>
  );
};

export default App;
