const Left = () => {
  return (
    <div className="w-[350px] max-h-[200px]  bg-dark-blue rounded-tr-[100px] flex flex-col gap-8 items-start p-10">
      <img src="./logo.svg" alt="logo" />
      <div className="flex gap-4 items-center" id="left">
        <img src="./icon-document.svg" alt="icon document" />
        <img src="./icon-folder.svg" alt="icon folder" />
        <img src="./icon-upload.svg" alt="icon upload" />
      </div>
    </div>
  );
};

export default Left;
