import { useEffect, useState } from "react";

const MessageMobile = () => {
  const [displayH1, setDisplayH1] = useState(0);

  useEffect(() => {
    // Define a function to increment the counter by 1
    const incrementCounter = () => {
      if (displayH1 < 185) {
        setDisplayH1((prevCount) => prevCount + 1);
      }
    };

    // Set an interval to call the incrementCounter function every second (1000 milliseconds)

    const intervalId = setInterval(incrementCounter, 16.2162);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [displayH1]);

  return (
    <div
      className="gap-[10px] items-center px-5 bg-white justify-between rounded-lg w-[180px] h-[72px] absolute lg:flex hidden bottom-[-36px]"
      id="messageMobile"
    >
      <h1 className=" text-very-dark-blue font-bold text-5xl">{displayH1}</h1>
      <p className=" text-grayish-blue">GB left</p>
    </div>
  );
};

export default MessageMobile;
