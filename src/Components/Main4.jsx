function Main4() {
  return (
    <div
      className="bg-cover mt-3 bg-center h-[300px] "
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/5720632/pexels-photo-5720632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <div className="flex justify-between ">
        <div className="mx-20 w-full h-[210px] my-12 text-center border-2 border-white ">
          {/* Qoraalka ku habboon iibka dharka dumarka */}
          <p className="font-bold mt-5 text-4xl text-white  ">
            Discover Elegance and Modesty
          </p>
          <h1 className="font-serif pt-2 text-white">
            Explore the Latest in Women's Islamic Fashion
          </h1>

          <button className="bg-black  px-10 border-2 border-white mt-6 py-1 rounded-md  text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main4;
