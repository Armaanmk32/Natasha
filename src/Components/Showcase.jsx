import woman from "../Images/woman.png"
import video from"../videos/video.mp4"

function Showcase() {
    return (

        <div className=" h-screen w-full mt-24 shadow-2xl z-10">
        <video
            className="absolute  left-0 w-full h-full object-cover"
            src={video} // beddelka 'your-video.mp4' magaca fiidiyowgaaga
            autoPlay
            loop
            muted
        />
            <div className=" absolute pt-20 text-white items-center px-20 justify-between flex">
                <div className="w-[500px]">
                    <h1 className="text-5xl mb-3  font-serif font-bold">Welcome to <span className="text-black"> NATASHA ABDI</span>  <span className=" text-white">Collection</span></h1>
                    <p>
                        We offer a beautiful collection of Islamic clothing designed for women. Explore our wide range of modern styles to find the perfect look for any occasion. This is your go-to destination for modest fashion.
                    </p>
                    <button className="bg-black text-white border-2  shadow-md rounded-md px-12 text-2xl py-2 mt-4">Shop Now</button>
                    <br />
                    <div className=" text-black  flex gap-2">
                        <i className="fa-brands text-4xl mt-4 fa-square-instagram"></i>
                        <i className="fa-brands text-4xl mt-4 fa-square-facebook"></i>
                        <i className="fa-brands text-4xl mt-4 fa-square-snapchat"></i>
                        <i className="fa-brands text-4xl mt-4 fa-square-x-twitter"></i>
                    </div>
                </div>
                
            </div>
    </div>


     
    );
}

export default Showcase;
