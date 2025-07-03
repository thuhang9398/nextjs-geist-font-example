"use client"

import React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useBooking } from "@/components/booking-form-provider"

export default function Header() {
  const { openBookingForm } = useBooking()

  const menuItems = [
    { label: "Trang Chủ", href: "/" },
    { label: "Giới Thiệu", href: "/gioi-thieu" },
    { label: "Dịch Vụ", href: "/#services" },
    { label: "Thư Viện", href: "/#gallery" },
    { label: "Liên Hệ", href: "/lien-he" },
    { label: "Terms", href: "/terms" }
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
          SEOUL CENTER
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-2 py-1 text-lg text-gray-700 hover:text-pink-600"
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  onClick={openBookingForm}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white mt-4"
                >
                  Đặt Lịch Ngay
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Book Now Button (Desktop) */}
        <Button 
          onClick={openBookingForm}
          className="hidden md:block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white"
        >
          Đặt Lịch Ngay
        </Button>
      </div>
    </nav>
  )
}
