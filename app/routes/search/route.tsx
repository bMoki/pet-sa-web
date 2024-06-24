import { Logo } from "~/components/Logo";
import { Card } from "~/components/ui/card";
import { SearchFriendForm } from "./SearchFriendForm";
import { FilterForm } from "./FilterForm";
import { LoaderFunction, json } from "@remix-run/node";
import { fetchPets } from "~/mockServer/mockApi";
import { Pet } from "~/entities/pet";
import { Link, useLoaderData } from "@remix-run/react";


export let loader: LoaderFunction = async () => {
  let pets: Pet[] = await fetchPets();
  return json(pets);
};

export default function Search() {

  let pets = useLoaderData<Pet[]>();

  return (
    <div className="flex">
      <aside className="w-96 bg-tertiary  min-h-screen max-h-screen">
        <div className="flex gap-6 mb-6 bg-tertiary-accent pt-16 ps-14 pb-6 pe-9 flex-col">
          <Logo />
          <SearchFriendForm />
        </div>
        <div className="ps-14 pe-10 p-9">
          <h2 className="text-white text-xl font-sans font-extrabold mb-7">Filtros</h2>
          <FilterForm />
        </div>
      </aside>
      <main className="w-full  bg-red-50 p-6 pe-28 max-h-screen overflow-y-scroll">
        <div className="flex justify-between items-center mb-6 mt-40">
          <h1 className="text-xl font-sans">
            Encontre <span className="font-bold font-sans">{pets.length} amigos</span> na sua cidade
          </h1>

        </div>
        <div className="flex gap-4 flex-wrap">
          {pets.map((pet) => (
            <Link key={pet.id} to={`/pet/${pet.id}`}>
              <Card className="rounded-3xl w-72 flex flex-col group hover:cursor-pointer" >
                <div className="w-full max-h-48  rounded-3xl overflow-hidden">
                  <img
                    src={pet.photos.at(0)?.url}
                    alt={pet.name}
                    className="object-cover max-h-48 w-full rounded-2xl group-hover:scale-110 ease-in duration-300"
                  />
                </div>
                <div className="p-4 text-center flex items-center flex-col">
                  <h2 className="font-bold">{pet.name}</h2>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}