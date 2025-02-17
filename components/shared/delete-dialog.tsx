// components/shared/delete-dialog.tsx
'use client'

import { useState, useTransition } from 'react'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { useToast } from '@/hooks/use-toast'

// // eslint-disable-next-line no-unused-vars
// type DeleteDialogProps = {
//   id: string
//   action: (id: string) => Promise<{ success: boolean; message: string }>
// }

// eslint-disable-next-line no-unused-vars
export default function DeleteDialog({
  id,
  action,
}: {
  id: string
  // eslint-disable-next-line no-unused-vars
  action: (id: string) => Promise<{ success: boolean; message: string }>
}) {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  // Explicitly using id in the function
  const handleDelete = async () => {
    if (!id) {
      toast({
        variant: 'destructive',
        description: 'Product ID is missing',
      })
      return
    }

    startTransition(async () => {
      const res = await action(id) // Using id here
      if (!res.success) {
        toast({
          variant: 'destructive',
          description: res.message,
        })
      } else {
        setOpen(false)
        toast({
          description: res.message,
        })
      }
    })
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="outline" className="hover:bg-gray-500">
          Delete (ID: {id})
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this product?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            size="sm"
            disabled={isPending}
            onClick={handleDelete} // id used here
          >
            {isPending ? 'Deleting...' : 'Delete'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
