import { FiExternalLink } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
function CardSupplier() {
  return (
    <div className="bg-[#131314] flex flex-col md:gap-2 gap-2 p-2 rounded-md h-auto w-auto relative border-2 border-zinc-900 hover:border-zinc-700 transition-colors duration-300 ease-in-out hover:cursor-pointer">
      <span className="px-3 py-1 bg-red-500 rounded-sm border border-red-800 text-zinc-100 font-medium text-xs absolute m-2 right-0 top-0">
        L4
      </span>
      <div className="flex justify-center items-center flex-col gap-1">
        <img
          className="rounded-full object-cover h-37.5 w-37.5 aspect-square border-2 border-zinc-200 relative"
          src="http://img.alicdn.com/bao/uploaded/i1/O1CN018ZYg041IapC0lRA2k_!!0-mtopupload.jpg"
          alt="foto"
        />
        <h3 className="text-xl font-bold text-zinc-100 truncate">
          新橙严选赣州市仓
        </h3>
      </div>
      <hr className="text-zinc-100" />
      <div className="w-full">
        <ol className="flex flex-col text-sm text-zinc-100">
          <li>
            <span>Produtos: 21</span>
          </li>
          <li>
            <span>Vendidos: 21</span>
          </li>
          <li>
            <span>Avaliações: 99% positivas</span>
          </li>
          <li>
            <span>Nicho: Iphones</span>
          </li>
          <li>
            <span>Autor: Vittor Serra</span>
          </li>
          <li>
            <span>Na GooFish a 2 meses</span>
          </li>
        </ol>
      </div>
      <div className="flex justify-between items-center w-full gap-1.5">
        <button className="px-3 py-1 rounded-md flex items-center gap-1.5 bg-white hover:bg-zinc-100 transition-colors delay-300 ease-in-out hover:cursor-copy text-sm font-medium">
          <IoCopyOutline />
          Copiar
        </button>
        <button className="px-3 py-1 rounded-md flex justify-center items-center gap-1.5 bg-white hover:bg-zinc-100 transition-colors delay-300 ease-in-out hover:cursor-pointer grow text-sm font-medium">
          <FiExternalLink />
          Abrir
        </button>
      </div>
    </div>
  );
}

export default CardSupplier;
