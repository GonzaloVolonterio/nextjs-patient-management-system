'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import clsx from 'clsx'
import { Appointment } from '@/types/appwrite.types'
import AppointmentForms from './forms/AppointmentForms'

interface AppointmentModalProps {
  type: 'schedule' | 'cancel'
  patientId: string
  userId: string
  appointment?: Appointment
  title: string
  description: string
}


const AppointmentModal = ({type, patientId, userId, appointment, title, description}: AppointmentModalProps) => {
  const [open, setOpen] = useState(false)
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='ghost' className={clsx(`capitalize ${type === 'schedule' &&  'text-green-500'}`)}>
          {type}
        </Button>
      </DialogTrigger>

      <DialogContent className='shad-dialog sm:mx-w-md'>
        <DialogHeader className='mb-4 space-y-3'>
          <DialogTitle className='capitalize'>
            {type} Appointment
          </DialogTitle>
          <DialogDescription>
            Please fill in the following details to {type} as appointment
          </DialogDescription>
        </DialogHeader>

        <AppointmentForms 
          userId={userId} type={type} patientId={patientId}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>

  )
}

export default AppointmentModal