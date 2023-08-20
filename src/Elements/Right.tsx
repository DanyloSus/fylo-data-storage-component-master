import Message from "./Message";

const Right = () => {
  return (
    <div className="bg-dark-blue rounded-lg px-10 py-[42px] w-[540px] flex flex-col relative">
      <Message />
      <p className="font-light text-pale-blue">
        You've used <span className="text-white">815 GB</span> of your storage
      </p>
      <div className="h-5 w-full bg-very-dark-blue rounded-full border-[4px] border-very-dark-blue flex items-center overflow-hidden mt-4 mb-[10px]">
        <div className="h-[20px] bg-gradient-to-r from-gradient-from to-gradient-to w-[81.5%] rounded-full"></div>
        <div className="bg-white w-[10px] h-[10px] rounded-full relative -left-[12px]"></div>
      </div>
      <div className="flex justify-between">
        <p>0 GB</p>
        <p>1000 GB</p>
      </div>
    </div>
  );
};

export default Right;
