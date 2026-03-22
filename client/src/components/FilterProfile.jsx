import { MdCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function FilterProfile() {
  const categorys = [
    "Iphones",
    "Computadores",
    "Peças de Pc",
    "Acessórios de celular",
    "Mac Mini",
    "Macbook",
    "Placa de vídeo",
    "Computadores",
    "Tênis",
    "Camisas",
    "Bermudas",
    "Processadores",
    "Celulares",
    "Fones de ouvidos",
    "Headsets",
    "Ôculos",
  ];

  return (
    <div className="bg-[#0C0C0C] w-auto px-5 py-3 rounded-r-lg border border-zinc-900 shadow-sm flex justify-between items-start flex-col gap-3 z-10 fixed left-0 top-1/2 -translate-y-1/2">
      <div className="w-full flex">
        <input
          className="text-zinc-100 border border-zinc-800 px-3 py-1 outline-none rounded-sm"
          type="search"
          name=""
          id=""
          placeholder="Buscar por fornecedor"
        />
      </div>
      <div className="grow w-full flex justify-center items-center">
        <ol className="flex items-center gap-1.5 text-xs">
          <li>
            <span className="rounded-sm border border-zinc-200 bg-white font-medium flex items-center gap-1.5 px-3 py-0.5 hover:bg-zinc-200 delay-300 transition-colors ease-in-out">
              <MdCircle className="text-red-500" />
              L4
            </span>
          </li>
          <li>
            <span className="rounded-sm border border-zinc-200 bg-white font-medium flex items-center gap-1.5 px-3 py-0.5 hover:bg-zinc-200 delay-300 transition-colors ease-in-out">
              <MdCircle className="text-yellow-500" />
              L5
            </span>
          </li>
          <li>
            <span className="rounded-sm border border-zinc-200 bg-white font-medium flex items-center gap-1.5 px-3 py-0.5 hover:bg-zinc-200 delay-300 transition-colors ease-in-out">
              <MdCircle className="text-blue-500" />
              L6
            </span>
          </li>
          <li>
            <span className="rounded-sm border border-zinc-200 bg-white font-medium flex items-center gap-1.5 px-3 py-0.5 hover:bg-zinc-200 delay-300 transition-colors ease-in-out">
              <MdCircle className="text-green-500" />
              L7
            </span>
          </li>
        </ol>
      </div>
      <div className="">
        <ol>
          {categorys.map((item, index) => (
            <li className="text-zinc-100 font-light" key={index}>
              {item} (12)
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default FilterProfile;
