'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { verifyOldPassword, updatePassword } from '@/lib/actions/user.actions'
import { updatePasswordSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { hash } from 'bcrypt-ts-edge'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const PasswordForm = () => {
  const { data: session, update } = useSession()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof updatePasswordSchema>>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      email: session?.user.email || '', // Ensure email is a string
    },
  })

  const onSubmit = async (values: z.infer<typeof updatePasswordSchema>) => {
    try {
      // Step 1: Verify old password
      const oldPasswordValid = await verifyOldPassword({
        email: values.email,
        oldPassword: values.oldPassword,
      })

      if (!oldPasswordValid) {
        form.setError('oldPassword', {
          type: 'manual',
          message: 'Old password is incorrect.',
        })
        return
      }

      // Step 2: Hash the new password
      const hashedPassword = await hash(values.newPassword, 10)

      // Step 3: Update the password
      const res = await updatePassword({
        ...values,
        password: hashedPassword,
      })

      if (!res.success) {
        toast({
          variant: 'destructive',
          description: res.message || 'Failed to update password.',
        })
        return
      }

      // Step 4: Update session
      await update({
        ...session,
        user: {
          ...session?.user,
          password: hashedPassword,
        },
      })

      toast({ description: 'Password updated successfully.' })
    } catch (error) {
      toast({
        variant: 'destructive',
        description:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred.',
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    id="email"
                    disabled
                    placeholder="Email"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Old Password Field */}
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <Label htmlFor="oldPassword">Old Password</Label>
                <FormControl>
                  <Input
                    id="oldPassword"
                    placeholder="Old Password"
                    {...field}
                    className="input-field"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* New Password Field */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <Label htmlFor="newPassword">New Password</Label>
                <FormControl>
                  <Input
                    id="newPassword"
                    placeholder="New Password"
                    {...field}
                    className="input-field"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? 'Submitting...' : 'Change Password'}
        </Button>
      </form>
    </Form>
  )
}

export default PasswordForm
