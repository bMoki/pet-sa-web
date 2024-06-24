import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "@remix-run/react"
import { useForm } from "react-hook-form"
import { Search } from "react-iconly"
import { z } from "zod"
import { Button } from "~/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/components/ui/select"


const FormSchema = z.object({
  state: z
    .string({
      required_error: "Selecione um estado.",
    }),
  city: z.string({
    required_error: "Selecione uma cidade."
  })
})

export function SearchFriendForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      state: "RS",
      city: "Erechim"
    },
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3">
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="max-w-max">
              <div className="flex items-center gap-3">
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="h-18 w-18 rounded-3xl bg-tertiary text-white font-sans text-xl font-bold ring-offset-white border-white ring-white"
                    >
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    className="bg-tertiary text-white font-sans text-xl font-bold"
                  >
                    <SelectItem className="focus:bg-tertiary-accent focus:text-white" value="RS">RS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="max-w-max">
              <div className="flex items-center gap-3">
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="h-18 w-72 justify-center rounded-3xl bg-tertiary-accent text-white font-sans text-xl font-bold ring-offset-tertiary border-tertiary ring-tertiary"
                    >
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    className="bg-tertiary text-white font-sans text-xl font-bold"
                  >
                    <SelectItem className="focus:bg-tertiary-accent focus:text-white" value="Erechim">Erechim</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link className="bg-yellow-500 w-18 h-18 rounded-3xl hover:bg-yellow-600 flex items-center justify-center" to={'/search'}>
          <Search set="broken" stroke="bold" primaryColor="#0D3B66" secondaryColor="#0D3B66" />
        </Link>

      </form>
    </Form>
  )
}