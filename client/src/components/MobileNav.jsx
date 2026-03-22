import { BsPersonPlusFill } from "react-icons/bs";

function MobileNav() {
  return (
    <div className="w-full bg-white fixed bottom-0 border-t border-zinc-200 z-10 p-2 md:hidden flex">
      <div className=""></div>
      <div className=""></div>
      <div className="grow flex flex-col justify-center gap-1 items-center">
        <BsPersonPlusFill />
        <span className="text-sm font-medium text-zinc-500">Enviar</span>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export default MobileNav;
