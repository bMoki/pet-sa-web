import type { MetaFunction } from "@remix-run/node";
import { Logo } from "~/components/Logo";
import { PetsSvg } from "~/components/PetsSvg";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="bg-background min-h-screen">
      <h1 className="text-7xl font-extrabold text-white font-nunito">
        Leve
        a felicidade
        para o seu lar
      </h1>
      <Logo />
      <PetsSvg />
    </main>
  );
}
