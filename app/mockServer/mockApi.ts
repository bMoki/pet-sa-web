import { pets } from "~/data/pets";
import { Pet } from "~/entities/pet";


export const fetchPets = () => {
  return new Promise<Pet[]>((resolve) => {
    setTimeout(() => {
      resolve(pets);
    }, 1000);
  });
};
