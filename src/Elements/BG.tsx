const BG = () => {
  return (
    <div>
      <img
        src="./bg-desktop.png"
        alt="bg desktop"
        className="w-screen object-cover h-[420px] absolute bottom-0 left-0 -z-10 lg:hidden"
      />
      <img
        src="./bg-mobile.png"
        alt="bg mobile"
        className="lg:block hidden w-screen object-cover h-screen absolute bottom-0 left-0 -z-10"
      />
    </div>
  );
};

export default BG;
