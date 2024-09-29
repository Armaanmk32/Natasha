function Header(){
    return <div className="">
    <div className="flex bg-white mx-20 py-4  my-3 px-5 items-center fixed top-0 left-0 right-0 rounded-full shadow-black shadow-2xl justify-between z-50">
        <h1 className="text-3xl font-serif font-bold">N-Abdi</h1>
        <ul className="flex gap-10">
            <li className="text-xl">Home</li>
            <li className="text-xl">Kins</li>
            <li className="text-xl">contact Us</li>
        </ul>

        <div className="gap-5 flex">

        <i class="fa-solid text-xl fa-magnifying-glass"></i>
        <i class="fa-solid text-xl fa-bag-shopping"></i>
        </div>

    </div>
    
    </div>
}
export default Header