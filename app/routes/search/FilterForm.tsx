import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form, FormControl,
  FormField, FormItem, FormLabel, FormMessage
} from "~/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { energy, independenceLevel, sizes, stages } from "~/entities/enums"

const FormSchema = z.object({
  stage: z.enum(stages),
  energy: z.enum(energy),
  sizes: z.enum(sizes),
  independenceLevel: z.enum(independenceLevel)
})

export function FilterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      energy: "MEDIUM",
      independenceLevel: "AVERAGE",
      sizes: "AVERAGE",
      stage: "YOUTH"
    },
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-7 w-full">
        <FormField
          control={form.control}
          name="stage"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-sans text-sm text-white">Idade</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className="h-16 w-full rounded-3xl bg-tertiary-light text-white font-sans text-lg font-bold ring-offset-tertiary border-tertiary ring-tertiary"
                  >
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent
                  className="bg-tertiary text-white font-sans text-xl font-bold"
                >
                  {stages.map(stage => (
                    <SelectItem key={stage} className="focus:bg-tertiary-accent focus:text-white" value={stage}>{stage}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="energy"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-sans text-sm text-white">Nível de Energia</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className="h-16 w-full rounded-3xl bg-tertiary-light text-white font-sans text-lg font-bold ring-offset-tertiary border-tertiary ring-tertiary"
                  >
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent
                  className="bg-tertiary text-white font-sans text-xl font-bold"
                >
                  {energy.map(energy => (
                    <SelectItem key={energy} className="focus:bg-tertiary-accent focus:text-white" value={energy}>{energy}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sizes"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-sans text-sm text-white">Porte do animal</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className="h-16 w-full rounded-3xl bg-tertiary-light text-white font-sans text-lg font-bold ring-offset-tertiary border-tertiary ring-tertiary"
                  >
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent
                  className="bg-tertiary text-white font-sans text-xl font-bold"
                >
                  {sizes.map(size => (
                    <SelectItem key={size} className="focus:bg-tertiary-accent focus:text-white" value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="independenceLevel"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-sans text-sm text-white">Nível de independência</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className="h-16 w-full rounded-3xl bg-tertiary-light text-white font-sans text-lg font-bold ring-offset-tertiary border-tertiary ring-tertiary"
                  >
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent
                  className="bg-tertiary text-white font-sans text-xl font-bold"
                >
                  {independenceLevel.map(level => (
                    <SelectItem key={level} className="focus:bg-tertiary-accent focus:text-white" value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}