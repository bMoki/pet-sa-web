import type { MetaFunction } from "@remix-run/node";
import { Logo } from "~/components/Logo";
import { PetsSvg } from "~/components/PetsSvg";
import { SearchFriendForm } from "./SearchFriendForm";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="bg-tertiary min-h-screen flex gap-32  justify-center items-center ">
      <section className="flex flex-col gap-32">
        <header className="w-full flex gap-2 items-center text-4xl font-bold text-gray-100">
          <Logo /> PET-SA
        </header>
        <h1 className="text-7xl font-extrabold text-white font-sans text-wrap max-w-lg">
          Leve a felicidade para o seu lar
        </h1>
        <p className="font-semibold text-white  font-sans text-2xl max-w-lg">
          Encontre o animal de estimação ideal para seu estilo de vida!
        </p>
        <p className="font-semibold text-tertiary  font-sans text-2xl max-w-lg">
          RU: 4337976
        </p>
      </section>
      <section className="flex flex-col gap-32">
        <div />
        <PetsSvg />
        <div className="flex items-center gap-3">
          <label className="text-white font-sans text-base text-nowrap">Busque um amigo: </label>
          <SearchFriendForm />
        </div>
      </section>

    </main>
  );
}
