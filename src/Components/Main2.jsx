import natash6 from"../Images/natasha6.jpg"
import natash7 from"../Images/natasha7.jpg"
import natasha8 from"../videos/natasha8.mp4"
import natash9 from"../Images/natash9.jpg"
function Main2() {
    return (
        <div className="px-20 mt-3">
            <div className="flex items-center gap-5">
                <div>
                    <video
                        className="h-[500px] w-[500px] shadow-md mb-6"
                        src={natasha8}
                        controls
                        muted
                        autoPlay
                        loop
                        alt=""
                    />
                </div>
                <div>
                    <div className="mb-20 text-center">
                        <h1 className="text-xl font-bold">Exclusive Women's Fashion</h1>
                        <p>Discover the latest trends in women's Islamic clothing and accessories, combining style and modesty.</p>
                    </div>
                    <div className="flex gap-3">
                        <div>
                            <img
                                className="h-[180px] w-[160px] shadow-md"
                                src={natash6}
                                alt=""
                            />
                            <p className="text-xl font-serif">Elegant Abaya</p>
                            <div className="flex gap-2">
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                            </div>
                            <div className="flex gap-28 mt-3 items-center">
                                <i className="fa-solid text-xl fa-bag-shopping"></i>
                                <i className="fa-solid text-xl fa-heart"></i>
                            </div>
                        </div>
                        <div>
                            <img
                                className="h-[180px] w-[160px] shadow-md"
                                src={natash7}
                                alt=""
                            />
                            <p className="text-xl font-serif">Chic Hijab</p>
                            <div className="flex gap-2">
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                            </div>
                            <div className="flex gap-28 mt-3 items-center">
                                <i className="fa-solid text-xl fa-bag-shopping"></i>
                                <i className="fa-solid text-xl fa-heart"></i>
                            </div>
                        </div>
                        <div>
                            <img
                                className="h-[180px] w-[160px] shadow-md"
                                src="https://img.freepik.com/free-photo/model-shows-earrings-ring-with-beautiful-blue-precious-stones_8353-5043.jpg?t=st=1726992176~exp=1726995776~hmac=232330cdd9b7da3af5b65f6e08e9b6905b4d5162ade37ef6c0bdf5b62fe0b930&w=360"
                                alt=""
                            />
                            <p className="text-xl font-serif">Gold Earrings</p>
                            <div className="flex gap-2">
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                            </div>
                            <div className="flex gap-28 mt-3 items-center">
                                <i className="fa-solid text-xl fa-bag-shopping"></i>
                                <i className="fa-solid text-xl fa-heart"></i>
                            </div>
                        </div>
                        <div>
                            <img
                                className="h-[180px] w-[160px] shadow-md"
                                src="https://img.freepik.com/free-photo/still-life-aesthetic-earrings_23-2149649128.jpg?t=st=1726992073~exp=1726995673~hmac=fad0f5bbf3267abedc3e983b6ac24e90fb92bc70a2ff4d2c2448069630baf626&w=900"
                                alt=""
                            />
                            <p className="text-xl font-serif">Stylish Accessories</p>
                            <div className="flex gap-2">
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                                <i className="fa-solid text-yellow-500 fa-star"></i>
                            </div>
                            <div className="flex gap-28 mt-3 items-center">
                                <i className="fa-solid text-xl fa-bag-shopping"></i>
                                <i className="fa-solid text-xl fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main2;
