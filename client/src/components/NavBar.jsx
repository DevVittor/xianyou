import { IoIosArrowDown, IoMdExit } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { BsBoxSeamFill } from "react-icons/bs";

function NavBar() {
  return (
    <div className="bg-[#0C0C0C] border-b border-zinc-900 w-full px-5 py-2 md:flex hidden justify-between items-center gap-3 sticky top-0 z-10">
      <div className="flex items-center gap-1.5">
        <img
          className="h-8 w-8 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/330px-Flag_of_the_People%27s_Republic_of_China.svg.png"
          alt=""
        />
        <h1 className="text-zinc-100 font-bold text-3xl">GooFish</h1>
      </div>
      <div className="relative">
        <div className="flex items-center gap-1.5 border border-red-800 hover:border-zinc-300 rounded-md px-3 py-1 bg-red-700 hover:bg-zinc-200 transition-colors delay-100 ease-in-out hover:cursor-pointer text-zinc-100">
          <img
            className="h-7 w-7 rounded-full border-2 border-green-500 object-cover aspect-square"
            src="http://img.alicdn.com/bao/uploaded/i3/O1CN015g2DJe2HdkNZ0pJki_!!0-mtopupload.jpg"
            alt=""
          />
          <span className="font-medium text-sm">Vittor F. Serra</span>
          <IoIosArrowDown />
        </div>
        <div className="h-auto w-full mt-1 rounded-md bg-white z-10 absolute p-2">
          <ol className="flex flex-col gap-1 text-sm">
            <li className="flex items-center gap-1 border border-zinc-200 rounded-sm px-3 py-1">
              <FaUser />
              <span className="font-medium">Perfil</span>
            </li>
            <li className="flex items-center gap-1 border border-zinc-200 rounded-sm px-3 py-1">
              <FaPeopleCarryBox />
              <span className="font-medium">Fornecedores</span>
            </li>
            <li className="flex items-center gap-1 border border-zinc-200 rounded-sm px-3 py-1">
              <BsBoxSeamFill />
              <span className="font-medium">Produtos</span>
            </li>
            <li className="flex items-center gap-1 border border-zinc-200 rounded-sm px-3 py-1">
              <MdAlternateEmail />
              <span className="font-medium">Contato</span>
            </li>
            <li className="flex items-center gap-1 border border-zinc-200 rounded-sm px-3 py-1">
              <IoMdExit />
              <span className="font-medium">Sair</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
