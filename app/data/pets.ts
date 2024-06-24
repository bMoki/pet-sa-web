import { Pet } from "~/entities/pet"
import { faker, fakerPT_BR } from '@faker-js/faker'
import { environment } from "~/entities/enums"
import { StageType, stages } from "~/entities/stage"
import { SizeType, sizes } from "~/entities/size"
import { EnergyType, energy } from "~/entities/energy"
import { independenceLevel } from "~/entities/independenceLevel"



const constPets = [
  {
    "id": "4806d72d-3c21-48a5-a323-8613bafc97df",
    "name": "Jan",
    "about": "Aegrus terreo odit aegrus. Ventito aestas quod defungo cicuta. Cupressus demo clamo tego absconditus sodalitas. Claustrum creta comburo accusator.",
    "energy_level": "MEDIUM",
    "environment": "MEDIUM",
    "independence_level": "LOW",
    "size": "BIG",
    "stage": "MIDDLE_AGED",
    "org": {
      "id": "8769719c-c6ae-4721-8b96-025c8e2efa0f",
      "name": "Klein - Olson",
      "address": {
        "id": "d63ba6fd-5291-4e89-b1b9-588148803850",
        "numero": 620,
        "location": {
          "id": "80f2ea1c-19db-4452-b16b-49315dafac33",
          "bairro": "Moraes Rua",
          "logradouro": "Pedro Rua",
          "cep": "12897-436",
          "localidade": "Albuquerque Rua",
          "uf": "DF"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=3172377873612800"
      }
    ]
  },
  {
    "id": "95ff2f81-34ec-49f4-9210-fedd435b7bda",
    "name": "Danial",
    "about": "Unde inflammatio statim. Officiis compono vulgaris. Nemo angulus veritas cursim amaritudo. Blanditiis arbor aequus tunc facilis varietas cursim sublime depraedor.",
    "energy_level": "MEDIUM",
    "environment": "LARGE",
    "independence_level": "AVERAGE",
    "size": "AVERAGE",
    "stage": "SENIOR",
    "org": {
      "id": "5693ecf6-df55-4147-aa5b-76e3d1883f87",
      "name": "Gorczany Inc",
      "address": {
        "id": "a56fe5b9-dc3a-4908-be99-3a335167d1ae",
        "numero": 661,
        "location": {
          "id": "e5d00325-70ce-412a-969f-9a61fb883ed2",
          "bairro": "Deneval Alameda",
          "logradouro": "João Pedro Avenida",
          "cep": "19516-793",
          "localidade": "Felícia Alameda",
          "uf": "AM"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=8712031102304256"
      }
    ]
  },
  {
    "id": "c9914920-9788-4fa4-b8cd-3318dde70466",
    "name": "Hillard",
    "about": "Celer aggredior suscipit pecco utrimque crastinus. Enim alveus subiungo textilis demulceo ademptio cohibeo amet alioqui. Excepturi corona tam uterque adamo vinitor tendo explicabo decretum audacia. Itaque charisma conturbo conscendo curriculum vinco dolores.",
    "energy_level": "LOW",
    "environment": "LARGE",
    "independence_level": "LOW",
    "size": "BIG",
    "stage": "MIDDLE_AGED",
    "org": {
      "id": "0a3bd3c9-5c31-4b2c-81c0-f27a9d523eb0",
      "name": "Zulauf - Becker",
      "address": {
        "id": "5371b386-6339-4865-96b7-ed9e1696dd7a",
        "numero": 1615,
        "location": {
          "id": "8527d546-de7b-46df-8e13-c08517a42219",
          "bairro": "Franco Travessa",
          "logradouro": "Marli Travessa",
          "cep": "07536-826",
          "localidade": "Raul Avenida",
          "uf": "AC"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=1646478848163840"
      }
    ]
  },
  {
    "id": "6dc1a001-8920-41e6-8b13-2bb46a91a957",
    "name": "Melvina",
    "about": "Totus conicio auctor dedecor trado. Temeritas facere cimentarius aduro ulciscor. Blanditiis corrigo tripudio. Cetera suscipit corporis victoria tantillus conicio.",
    "energy_level": "VERY_LOW",
    "environment": "MEDIUM",
    "independence_level": "HIGH",
    "size": "BIG",
    "stage": "SENIOR",
    "org": {
      "id": "047d4b8a-fbe7-4d7d-bb03-345d85ef60b4",
      "name": "O'Kon - Boehm",
      "address": {
        "id": "105538f1-a131-4a12-9284-040fea0d3390",
        "numero": 1965,
        "location": {
          "id": "90d91a93-22b0-4425-bf58-cecc54ed09ed",
          "bairro": "Souza Rodovia",
          "logradouro": "Batista Rodovia",
          "cep": "05613-955",
          "localidade": "Moraes Alameda",
          "uf": "SP"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=2648770726592512"
      }
    ]
  },
  {
    "id": "ab78a3e7-0701-4160-b08d-522c386d85b3",
    "name": "Winfield",
    "about": "Confugo ciminatio pel carus tepidus benevolentia. Thorax animi teneo adimpleo tempus cras paulatim commodi. Corrumpo cursus eligendi. Bibo demo ullam denego quam sopor cicuta cicuta alo.",
    "energy_level": "VERY_LOW",
    "environment": "MEDIUM",
    "independence_level": "LOW",
    "size": "BIG",
    "stage": "YOUTH",
    "org": {
      "id": "aa5820f4-1ece-424b-9b23-3dd45764b480",
      "name": "Kub and Sons",
      "address": {
        "id": "22774ea3-96d6-4858-b3e2-2732579ff9c7",
        "numero": 1361,
        "location": {
          "id": "23e1e190-2b67-4199-9cc3-79afc82c73cf",
          "bairro": "Souza Rodovia",
          "logradouro": "Martins Rodovia",
          "cep": "50559-866",
          "localidade": "Souza Marginal",
          "uf": "PA"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=2370944324599808"
      }
    ]
  },
  {
    "id": "27f3dcdd-5403-4811-b3b2-9f9514ba9b4c",
    "name": "Adella",
    "about": "Magnam aperte abduco tremo volo praesentium terra. Curo accusamus tollo volutabrum attollo conitor. Armarium sopor atqui vulticulus. Convoco aliquid defaeco attonbitus deludo strues utor.",
    "energy_level": "VERY_LOW",
    "environment": "HUGE",
    "independence_level": "LOW",
    "size": "SMALL",
    "stage": "SENIOR",
    "org": {
      "id": "be010d03-a914-424e-b82a-420c4210bceb",
      "name": "King - Metz",
      "address": {
        "id": "3015263d-9c96-4d0d-b8ff-950c573a1d6f",
        "numero": 526,
        "location": {
          "id": "a1e0abf3-b862-4245-b10f-ad5b15f079f6",
          "bairro": "Braga Rodovia",
          "logradouro": "Silva Rodovia",
          "cep": "59236-979",
          "localidade": "Anthony Avenida",
          "uf": "MT"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=1072954213400576"
      }
    ]
  },
  {
    "id": "ff9a9a6c-e55c-4b01-9d9b-a7256f5ac49c",
    "name": "Ezequiel",
    "about": "Suspendo vociferor atqui perspiciatis decretum stipes cultura arbustum. Conicio creo denego aqua audeo aeternus ratione cum canto tabella. Suus casso theologus confido vulgaris voluptatibus cultellus vitium. Cribro quia despecto stips velut.",
    "energy_level": "LOW",
    "environment": "SMALL",
    "independence_level": "AVERAGE",
    "size": "AVERAGE",
    "stage": "PUPPY",
    "org": {
      "id": "b2ac2f21-dab5-40cf-9996-e4964c1aaaf6",
      "name": "Berge - Heathcote",
      "address": {
        "id": "99f9c423-d66f-480b-bfbd-5c6952675ed5",
        "numero": 1622,
        "location": {
          "id": "2aea38df-120c-4b06-9afc-24b5ede2bee7",
          "bairro": "Sara Rodovia",
          "logradouro": "Pereira Rua",
          "cep": "49614-443",
          "localidade": "Caio Avenida",
          "uf": "SE"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=8647385488031744"
      }
    ]
  },
  {
    "id": "667b59af-9e80-4701-b622-96338e87ebc2",
    "name": "Willard",
    "about": "Crinis arbitro cito ascit ipsam tendo vulgaris summopere balbus adhuc. Aliquid curis coniuratio audentia vilitas corrupti corrigo adversus vulticulus. Crinis adulatio abbas trado ab pax mollitia strenuus. Coruscus tenus substantia pauci aspicio defendo voluptatem demo acerbitas.",
    "energy_level": "LOW",
    "environment": "LARGE",
    "independence_level": "LOW",
    "size": "BIG",
    "stage": "MIDDLE_AGED",
    "org": {
      "id": "978d99f1-b925-46d4-b5b4-76a8262b79b3",
      "name": "Mertz, Huels and Buckridge",
      "address": {
        "id": "3c192d5f-df99-4edf-bfbf-6f0fd88fd7e6",
        "numero": 494,
        "location": {
          "id": "17905fdc-1229-469a-a743-b6d7fa5cb0d9",
          "bairro": "Melo Travessa",
          "logradouro": "Barros Alameda",
          "cep": "29079-127",
          "localidade": "Albuquerque Rodovia",
          "uf": "ES"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=948394566615040"
      }
    ]
  },
  {
    "id": "a467d912-ba2e-43bd-b4fe-550577851016",
    "name": "Marc",
    "about": "Terreo volaticus bellicus viriliter. Tenax certe labore spiritus adfero antea creator. Condico quae aut conculco optio stillicidium quae. Advenio defungo combibo.",
    "energy_level": "LOW",
    "environment": "HUGE",
    "independence_level": "AVERAGE",
    "size": "BIG",
    "stage": "SENIOR",
    "org": {
      "id": "048f409c-6497-4e02-bbfe-d5e7cf6d0c94",
      "name": "Conroy, Rodriguez and Daugherty",
      "address": {
        "id": "a1c41fc1-7452-4ac2-9e75-ce1514648f92",
        "numero": 1442,
        "location": {
          "id": "d3a522ef-9220-4ca9-8545-b0afe8f5e6b5",
          "bairro": "Costa Travessa",
          "logradouro": "Barros Travessa",
          "cep": "08953-024",
          "localidade": "Hélio Rodovia",
          "uf": "MG"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=4973846708879360"
      }
    ]
  },
  {
    "id": "504e33c0-ab2c-4119-8d28-515fbb31ba7f",
    "name": "Myriam",
    "about": "Carpo fugiat una volubilis sum valetudo. Vinco magnam adopto cubo arto. Defaeco tactus deprimo. Vivo administratio somniculosus conitor suscipio nesciunt commodo adiuvo adimpleo attollo.",
    "energy_level": "LOW",
    "environment": "SMALL",
    "independence_level": "HIGH",
    "size": "SMALL",
    "stage": "PUPPY",
    "org": {
      "id": "abf44eb5-0515-4569-ae25-91c0c27dc8d0",
      "name": "MacGyver Group",
      "address": {
        "id": "f2e58896-17cb-4ca3-af33-52c2034d9fb7",
        "numero": 1650,
        "location": {
          "id": "26f22178-8d79-4b5c-bfa6-4373a9a906d6",
          "bairro": "Sara Rodovia",
          "logradouro": "Braga Avenida",
          "cep": "08180-747",
          "localidade": "Eduardo Avenida",
          "uf": "MS"
        }
      }
    },
    "photos": [
      {
        "url": "https://loremflickr.com/640/480/pet?lock=5948585438871552"
      }
    ]
  }
]

export const pets: Pet[] = [
  {
    "id": "b342d66b-308f-408e-a121-1acdd845e37a",
    "name": "Lucky",
    "about": "Lucky é um cão de grande porte, cheio de energia e sempre em movimento. Ele adora correr em espaços abertos e brincar sem parar. Seus olhos brilhantes mostram sua curiosidade e entusiasmo. Lucky é amigável e leal, sempre trazendo alegria e vitalidade para todos ao seu redor.",
    "energy_level": "HIGH" as EnergyType,
    "environment": "HUGE",
    "independence_level": "AVERAGE",
    "size": "BIG" as SizeType,
    "stage": "MIDDLE_AGED" as StageType,
    "org": {
      "id": "80f56ea8-7f1f-495d-b53b-ca052e6f2f4b",
      "name": "Seu cãopanheiro",
      whatsapp: "54 1234 4567",
      "address": {
        "id": "43a7ea96-4cc8-47eb-8ee7-10f6f30b3a11",
        "numero": 1651,
        "location": {
          cidade: "Erechim",
          "id": "563228f1-7c8a-44b2-9a6e-9b3f855bce62",
          "bairro": "Centro",
          "cep": "21622-052",
          "localidade": "Rua Italia",
          "uf": "RS"
        }
      }
    },
    "photos": [
      {
        "url": "https://img.freepik.com/fotos-gratis/cao-de-raca-pura-sendo-adoravel-em-um-estudio_23-2149016886.jpg?w=740&t=st=1719182271~exp=1719182871~hmac=ad31f36d6648a44b4ca4605bd59fa5ad618f44ee3e605ae628c30942f867ceb9"
      }
    ],
    requirements: ["Local grande para o animal correr e brincar.",
      "Proibido apartamento",
      "Cão com intolerância a lactose."
    ]
  },
  {
    "id": "6abb55e1-3ec8-49f9-9ce6-73a523d8e6c1",
    "name": "Tess",
    "about": "Tess é uma gatinha filhote cheia de energia. Seus olhinhos curiosos brilham enquanto ela explora cada canto da casa com suas patinhas ágeis. Sempre brincalhona, Tess adora correr atrás de bolas de papel e fios soltos. Mesmo com tanta energia, ela também tem momentos de doçura, ronronando feliz quando acariciada.",
    "energy_level": "VERY_HIGH",
    "environment": "MEDIUM",
    "independence_level": "AVERAGE",
    "size": "SMALL",
    "stage": "PUPPY",
    "org": {
      "id": "2eddbdd4-4582-4129-b850-c9ce58ac7c69",
      "name": "Parisian - Runolfsdottir",
      whatsapp: "54 8232 1283",
      "address": {
        "id": "143b1e6a-0e89-45de-a597-65b4c151c84c",
        "numero": 337,
        "location": {
          "id": "751ccade-d463-40a1-8c03-6572b9d9acdd",
          "bairro": "Eduarda Marginal",
          cidade: "Erechim",
          "cep": "34355-905",
          "localidade": "Felipe Travessa",
          "uf": "DF"
        }
      }
    },
    "photos": [
      {
        "url": "https://img.freepik.com/fotos-premium/gatinho-cinzento-bonito-engracado-e-divertido-jogar-e-dancar-em-um-amarelo_89381-2344.jpg?w=740"
      }
    ],
    requirements: []
  },
  {
    "id": "b9c26f4b-b51d-4524-a2e9-a68bf7e66b11",
    "name": "Biscoito",
    "about": "Adicio suspendo quia allatus usus perspiciatis assentator. Cognatus voro damno utilis candidus admitto utilis traho ara. Cornu tempore vicissitudo pecco sollers facilis. Facere harum asper ascit tepesco natus vomica aestivus tui vestrum.",
    "energy_level": "VERY_LOW",
    "environment": "LARGE",
    "independence_level": "AVERAGE",
    "size": "AVERAGE",
    "stage": "PUPPY",
    "org": {
      "id": "2eddbdd4-4582-4129-b850-c9ce58ac7c69",
      "name": "Parisian - Runolfsdottir",
      whatsapp: "54 8232 1283",
      "address": {
        "id": "143b1e6a-0e89-45de-a597-65b4c151c84c",
        "numero": 337,
        "location": {
          "id": "751ccade-d463-40a1-8c03-6572b9d9acdd",
          "bairro": "Eduarda Marginal",
          cidade: "Erechim",
          "cep": "34355-905",
          "localidade": "Felipe Travessa",
          "uf": "DF"
        }
      }
    },
    "photos": [
      {
        "url": "https://img.freepik.com/fotos-gratis/retrato-de-cachorro-pequeno-em-estudio_23-2149016943.jpg?t=st=1719183174~exp=1719186774~hmac=7d1922fc991a16c3e677947789f09266dfb8b997b57ea3ee5e028e1a8816e8b4&w=740"
      }
    ],
    requirements: []
  },
]