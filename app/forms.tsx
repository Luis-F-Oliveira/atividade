'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import validator from "validator"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { toast } from "@/components/ui/use-toast"

const schema = z.object({
  name: z.string().min(2).max(255),
  phone: z.string().refine(validator.isMobilePhone),
  email: z.string().max(255).email()
})

type IForm = z.infer<typeof schema>

export const Forms = () => {
  const form = useForm<IForm>({
    resolver: zodResolver(schema)
  })

  const { isSubmitting } = form.formState

  const onSubmit = (values: IForm) => {
    toast({
      title: "Dados coletados",
      description: ''+JSON.stringify(values)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField 
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isSubmitting={isSubmitting}>
          Enviar
        </Button>
      </form>
    </Form>
  )
}
