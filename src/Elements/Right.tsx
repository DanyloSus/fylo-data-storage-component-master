import Message from "./Message";
import MessageMobile from "./MessageMobile";

const Right = () => {
  return (
    <div className="bg-dark-blue rounded-lg px-10 py-[42px] w-[540px] flex flex-col relative lg:w-[324px] lg:text-center lg:items-center lg:h-[160px] lg:pb-12 lg:px-8 lg:pt-8 lg:justify-between">
      <Message />
      <p className="font-light text-pale-blue lg:text-sm">
        You've used <span className="text-white">815 GB</span> of your storage
      </p>
      <div className="h-5 w-full bg-very-dark-blue rounded-full border-[4px] border-very-dark-blue flex items-center overflow-hidden mt-4 mb-[10px] lg:m-0">
        <div className="h-[20px] bg-gradient-to-r from-gradient-from to-gradient-to w-[81.5%] rounded-full"></div>
        <div className="bg-white w-[10px] h-[10px] rounded-full relative -left-[12px]"></div>
      </div>
      <div className="flex justify-between lg:w-full lg:text-sm">
        <p>0 GB</p>
        <p>1000 GB</p>
      </div>
      <MessageMobile />
    </div>
  );
};

export default Right;
