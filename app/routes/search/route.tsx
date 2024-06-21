import { HeartIcon } from "lucide-react";
import { Logo } from "~/components/Logo";
import { Card } from "~/components/ui/card";
import { SearchFriendForm } from "./SearchFriendForm";
import { FilterForm } from "./FilterForm";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { pets } from "~/data/pets";
import { LoaderFunction, json } from "@remix-run/node";
import { fetchPets } from "~/mockServer/mockApi";
import { Pet } from "~/entities/pet";
import { useLoaderData } from "@remix-run/react";

const options = ["ALL", "DOG", "CAT"] as const

const FormSchema = z.object({
  option: z.enum(options)
})

export let loader: LoaderFunction = async () => {
  let pets: Pet[] = await fetchPets();
  return json(pets);
};

export default function Search() {

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      option: "ALL"
    },
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

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
            Encontre <span className="font-bold font-sans">324 amigos</span> na sua cidade
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} >
              <FormField
                control={form.control}
                name="option"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className="h-12 w-24 rounded-2xl bg-red-100 text-zinc-900 font-sans text-lg font-bold ring-offset-red-100 border-red-100 ring-red-100"
                        >
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent
                        className="bg-red-100 text-zinc-900 font-sans text-xl font-bold"
                      >
                        {options.map(option => (
                          <SelectItem key={option} className="focus:bg-red-100-accent focus:text-zinc-900" value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <div className="flex gap-4 flex-wrap">
          {pets.map((pet) => (
            <Card key={pet.id} className="rounded-3xl w-72 flex flex-col group hover:cursor-pointer ">
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
          ))}
        </div>
      </main>
    </div>
  )
}