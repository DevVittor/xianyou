import CardSupplier from "../components/CardSupplier";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { MdKeyboardArrowLeft } from "react-icons/md";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>GooFish</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="flex flex-col grow">
        <div className="h-auto w-full p-2 grid md:grid-cols-7 sm:grid-cols-2 grid-cols-1 md:gap-2 gap-1 relative">
          {Array.from({ length: 30 }).map((_, index) => (
            <CardSupplier key={index} />
          ))}
          <div
            className="fixed left-0 top-1/2 -translate-y-1/2 z-10 rounded-e-lg p-1 bg-zinc-100 hover:cursor-pointer border border-zinc-200"
            title="Filtro de Busca"
          >
            <MdKeyboardArrowLeft className="text-lg" />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;
