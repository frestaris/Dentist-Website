const BottomPicture = () => {
  return (
    <div className="overflow-hidden px-4 ">
      <div className="h-screen relative mb-20">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/9f/f7/d1/9ff7d1a690e7bf508eda106f9bc13dab.jpg')",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-0 relative z-10 mt-10">
          <h1 className="text-6xl md:text-8xl font-bold drop-shadow-lg mb-5">
            Let's get started.
          </h1>
          <button className="bg-transparent font-bold border-2 my-10 py-5 px-10 rounded-full text-white text-sm hover:bg-white hover:text-black transition-colors">
            REQUEST AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomPicture;
