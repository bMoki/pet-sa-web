import { Pet } from "~/entities/pet"
import { faker, fakerPT_BR } from '@faker-js/faker'
import { energy, environment, independenceLevel, sizes, stages } from "~/entities/enums"

export const pets = Array.from({ length: 10 }).map(() => {
  return {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    about: faker.lorem.paragraph(4),
    energy_level: faker.helpers.arrayElement(energy),
    environment: faker.helpers.arrayElement(environment),
    independence_level: faker.helpers.arrayElement(independenceLevel),
    size: faker.helpers.arrayElement(sizes),
    stage: faker.helpers.arrayElement(stages),
    org: {
      id: faker.string.uuid(),
      name: faker.company.name(),
      address: {
        id: faker.string.uuid(),
        numero: faker.number.int({ max: 2000, min: 200 }),
        location: {
          id: faker.string.uuid(),
          bairro: fakerPT_BR.location.street(),
          logradouro: fakerPT_BR.location.street(),
          cep: fakerPT_BR.location.zipCode(),
          localidade: fakerPT_BR.location.street(),
          uf: fakerPT_BR.location.state({ abbreviated: true })
        }
      },
    },
    photos: [
      {
        url: faker.image.urlLoremFlickr({ category: 'pet' })
      }
    ]
  } as Pet
})