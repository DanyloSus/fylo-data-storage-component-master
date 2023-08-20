import { useEffect, useState } from "react";

const Message = () => {
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
      className="flex gap-[10px] items-center px-5 bg-white justify-between rounded-lg w-[180px] h-[72px] absolute right-10 -top-[47px] rounded-br-none lg:hidden"
      id="message"
    >
      <h1 className=" text-very-dark-blue font-bold text-5xl">185</h1>
      <p className=" text-grayish-blue">GB left</p>
    </div>
  );
};

export default Message;
