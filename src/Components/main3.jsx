import qumbe0 from "../Images/qumbe0.png"
function Main3() {
  return (
    <div className=" mt-3 bg-gradient-to-l to-white from-black text-white flex justify-between px-20 items-center">
      <div className="mt-12 w-[400px]">
        <h1 className="text-5xl font-serif font-bold pb-3 text-black">
          Discover Elegance & Modesty
        </h1>
        <p className="text-black">
          Explore our exclusive collection of fashionable and modest clothing
          tailored for women. Whether you’re looking for casual wear or
          something for a special occasion, our designs ensure elegance and
          comfort with every piece.
        </p>
        <button className="bg-black text-white border-2 border-white shadow-2xl rounded-md px-12 text-xl py-2 mt-4">
          See More
        </button>
      </div>
      <div className="mt-24">
        <img className="w-[550px] h-[400px]" src={qumbe0} alt="" />
      </div>
    </div>
  );
}
export default Main3;
