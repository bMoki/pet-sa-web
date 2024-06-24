import { Circle, PawPrint, Zap, MapPin, AlertCircle } from 'lucide-react'
import { Card } from '~/components/ui/card'
import { Energy, EnergyType, energy } from '~/entities/energy'
import { Stage, StageType, stages } from '~/entities/stage'
import { Size, SizeType, sizes } from '~/entities/size'
import { Button } from '~/components/ui/button'
import { WhatsappLogo } from '~/components/WhatsappLogo'
import { Pet as PetEntity } from '~/entities/pet'
import { RiWhatsappFill, RiWhatsappLine } from 'react-icons/ri'
import { FaArrowLeft } from 'react-icons/fa'
import { LoaderFunctionArgs, json } from '@remix-run/node'
import { pets } from '~/data/pets'
import { useLoaderData, useNavigate, useNavigation } from '@remix-run/react'

export async function loader({
  params,
}: LoaderFunctionArgs) {
  return json(pets.find(pet => params.id === pet.id));
}


export default function Pet() {

  // const pet: PetEntity = {
  //   "id": "b342d66b-308f-408e-a121-1acdd845e37a",
  //   "name": "Lucky",
  //   "about": "Lucky é um cão de grande porte, cheio de energia e sempre em movimento. Ele adora correr em espaços abertos e brincar sem parar. Seus olhos brilhantes mostram sua curiosidade e entusiasmo. Lucky é amigável e leal, sempre trazendo alegria e vitalidade para todos ao seu redor.",
  //   "energy_level": "HIGH" as EnergyType,
  //   "environment": "HUGE",
  //   "independence_level": "AVERAGE",
  //   "size": "BIG" as SizeType,
  //   "stage": "MIDDLE_AGED" as StageType,
  //   "org": {
  //     "id": "80f56ea8-7f1f-495d-b53b-ca052e6f2f4b",
  //     "name": "Seu cãopanheiro",
  //     whatsapp: "54 1234 4567",
  //     "address": {
  //       "id": "43a7ea96-4cc8-47eb-8ee7-10f6f30b3a11",
  //       "numero": 1651,
  //       "location": {
  //         cidade: "Erechim",
  //         "id": "563228f1-7c8a-44b2-9a6e-9b3f855bce62",
  //         "bairro": "Centro",
  //         "cep": "21622-052",
  //         "localidade": "Rua Italia",
  //         "uf": "RS"
  //       }
  //     }
  //   },
  //   "photos": [
  //     {
  //       "url": "https://img.freepik.com/fotos-gratis/cao-de-raca-pura-sendo-adoravel-em-um-estudio_23-2149016886.jpg?w=740&t=st=1719182271~exp=1719182871~hmac=ad31f36d6648a44b4ca4605bd59fa5ad618f44ee3e605ae628c30942f867ceb9"
  //     }
  //   ],
  //   requirements: ["Local grande para o animal correr e brincar.",
  //     "Proibido apartamento",
  //     "Cão com intolerância a lactose."
  //   ]
  // }

  let pet = useLoaderData<PetEntity>();

  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <main className="flex justify-center min-h-screen pt-24">
      <aside>
        <Button className='bg-transparent text-blue-950 hover:bg-gray-100' onClick={goBack}>
          <FaArrowLeft size={32} />
        </Button>
      </aside>
      <section className="w-2/5">
        <Card className="rounded-2xl w-full flex flex-col group pb-20 mb-14">
          <div className="w-full max-h-96 rounded-2xl overflow-hidden">
            <img
              src={pet.photos.at(0)?.url}
              alt={pet.name}
              className="object-cover max-h-96 w-full hover:scale-110 ease-in duration-300"
            />
          </div>
          <div className="p-4 px-12 flex flex-col gap-4  mt-14">
            <h2 className="font-bold text-5xl text-blue-900">{pet.name}</h2>
            <p className='text-lg text-blue-900'>{pet.about}</p>

            <div className='flex gap-3'>

              <div className='flex flex-col gap-2 p-6 border-2 border-gray-200 rounded-3xl w-52'>
                <div className='flex gap-1.5'>
                  {Array.from({ length: energy.length }).map((_, i) => (
                    <Zap
                      key={i}
                      fill='#0D3B66'
                      strokeWidth={0}
                      className={Energy[pet.energy_level].value > i ? 'opacity-100' : 'opacity-20'} />
                  ))}
                </div>
                <span>Nível de energia</span>
              </div>
              <div className='flex flex-col gap-2 p-6 border-2 border-gray-200 rounded-3xl w-52'>
                <div className='flex gap-1.5'>
                  {Array.from({ length: stages.length }).map((_, i) => (
                    <PawPrint
                      key={i}
                      fill='#0D3B66'
                      strokeWidth={0}
                      className={Stage[pet.stage].value > i ? 'opacity-100' : 'opacity-20'} />
                  ))}
                </div>
                <span>{Stage[pet.stage].name}</span>
              </div>
              <div className='flex flex-col gap-2 p-6 border-2 border-gray-200 rounded-3xl w-52'>
                <div className='flex gap-1.5'>
                  {Array.from({ length: sizes.length }).map((_, i) => (
                    <Circle
                      key={i}
                      fill='#0D3B66'
                      strokeWidth={0}
                      className={Size[pet.size].value > i ? 'opacity-100' : 'opacity-20'} />
                  ))}
                </div>
                <span>{`Porte ${Size[pet.size].name}`}</span>
              </div>

            </div>
          </div>
          <Separator />

          <div className='px-12 flex gap-4 justify-start'>
            <div className='p-3 bg-orange-400 h-min rounded-xl'>
              <MapPin className='text-gray-100' />
            </div>
            <div className='flex flex-col'>
              <span className='text-blue-950 text-3xl font-bold leading-tight'>{pet.org.name}</span>
              <span className='text-blue-950'>{`${pet.org.address.location.localidade} ${pet.org.address.numero}, ${pet.org.address.location.bairro}, ${pet.org.address.location.cidade} - ${pet.org.address.location.uf}`}</span>
              <Button className='p-3 px-5 flex gap-3 text-blue-950 bg-gray-200 hover:bg-gray-100 mt-4 w-min'>
                <RiWhatsappFill size={20} /> {pet.org.whatsapp}
              </Button>
            </div>
          </div>

          <Separator />

          <div className='px-12'>
            <h3 className='mb-6 text-3xl text-blue-950 font-bold'>Requisitos para adoção</h3>
            <div className='flex flex-col gap-3'>
              {pet.requirements.map((requirement) => (
                <div className='bg-red-100 border-[1px] border-red-500 rounded-2xl px-10 py-3 text-red-500 font-bold flex gap-3'>
                  <AlertCircle /> {requirement}
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className='px-12 w-full'>

            <Button className='w-full rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-gray-100 text-lg font-bold h-16'>
              <RiWhatsappLine className='me-3' size={20} /> Entrar em contato
            </Button>
          </div>
        </Card>

      </section>

    </main>
  )
}

function Separator() {
  return (
    <div className='h-[1px] w-[86%] bg-gray-200 rounded-full self-center my-14' />
  )
}