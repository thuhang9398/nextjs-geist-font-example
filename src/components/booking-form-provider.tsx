"use client"

import { createContext, useContext, useState } from "react"
import { BookingForm } from "@/components/booking-form"

const BookingContext = createContext({
  openBookingForm: () => {},
})

export function useBooking() {
  return useContext(BookingContext)
}

export function BookingFormProvider({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const openBookingForm = () => setIsBookingOpen(true)

  return (
    <BookingContext.Provider value={{ openBookingForm }}>
      {children}
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </BookingContext.Provider>
  )
}
