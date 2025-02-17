'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { updateUser } from '@/lib/actions/user.actions'
import { USER_ROLES } from '@/lib/constants'
import { updateUserSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type UpdateUserFormProps = {
  user: z.infer<typeof updateUserSchema>
}

export default function UpdateUserForm({ user }: UpdateUserFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: user,
  })

  const onSubmit = async (values: z.infer<typeof updateUserSchema>) => {
    try {
      const response = await updateUser({ ...values, id: user.id })

      if (!response.success) {
        toast({
          variant: 'destructive',
          description: response.message,
        })
        return
      }

      toast({ description: response.message })
      form.reset()
      router.push('/admin/users')
    } catch (error: any) {
      toast({
        variant: 'destructive',
        description:
          error.message || 'An error occurred while updating the user.',
      })
    }
  }

  return (
    <Form {...form}>
      <div className="p-4 bg-white shadow-sm rounded-lg border border-gray-400 hover:bg-gray-200">
        <div className="overflow-x-auto">
          <form
            method="post"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            aria-busy={form.formState.isSubmitting}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      placeholder="Enter user email"
                      {...field}
                      className="bg-gray-100 cursor-not-allowed"
                      aria-disabled="true"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter user name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value.toString()}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        {USER_ROLES.map((role) => (
                          <SelectItem
                            key={role}
                            value={role}
                            style={{ color: 'black' }}
                          >
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                className="w-full md:w-auto"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Submitting...' : 'Update User'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Form>
  )
}
