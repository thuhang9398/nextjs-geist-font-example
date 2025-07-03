"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookingForm } from "@/components/booking-form"
import { Menu } from "lucide-react"

const treatments = [
  {
    title: "Trẻ Hóa Da",
    description: "Phục hồi làn da trẻ trung, săn chắc",
    price: "2,000,000đ",
    image: "https://images.pexels.com/photos/3985298/pexels-photo-3985298.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Điều Trị Mụn",
    description: "Giải pháp hiệu quả cho làn da mụn",
    price: "1,500,000đ",
    image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Tẩy Tế Bào Chết",
    description: "Làm sạch sâu, tái tạo da mới",
    price: "800,000đ",
    image: "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Nâng Cơ RF",
    description: "Công nghệ nâng cơ không phẫu thuật",
    price: "3,000,000đ",
    image: "https://images.pexels.com/photos/3985332/pexels-photo-3985332.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
]

const galleryImages = [
  "https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1600"
]

const menuItems = [
  { label: "Trang Chủ", href: "#home" },
  { label: "Dịch Vụ", href: "#services" },
  { label: "Thư Viện", href: "#gallery" },
  { label: "Liên Hệ", href: "#contact" }
]

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <main className="min-h-screen">
      {/* Booking Form Dialog */}
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Navigation */}
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
                <Button variant="ghost" size="icon" className="md:hidden">
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
                    onClick={() => setIsBookingOpen(true)}
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
            onClick={() => setIsBookingOpen(true)}
            className="hidden md:block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white"
          >
            Đặt Lịch Ngay
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-pink-50 via-white to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Chăm Sóc Sắc Đẹp<br />
                <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  Chuyên Nghiệp
                </span>
              </h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Trải nghiệm dịch vụ làm đẹp cao cấp với công nghệ hiện đại và đội ngũ chuyên gia hàng đầu
              </p>
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-8 py-6"
              >
                Tư Vấn Miễn Phí
              </Button>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Beauty Treatment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dịch Vụ Nổi Bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá các liệu trình chăm sóc da cao cấp được thiết kế riêng cho từng loại da
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-pink-100">
                <div className="h-48 relative">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{treatment.title}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-600 font-semibold">{treatment.price}</span>
                    <Button 
                      variant="outline" 
                      className="border-pink-200 text-pink-600 hover:bg-pink-50"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      Đặt Lịch →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section id="gallery" className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kết Quả Điều Trị</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hình ảnh khách hàng trước và sau khi điều trị
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] rounded-xl overflow-hidden relative group">
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold">Trẻ Hóa Da</h4>
                    <p className="text-sm opacity-90">Sau 4 tuần điều trị</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Liên Hệ</h2>
              <p className="text-gray-600">
                Đặt lịch tư vấn miễn phí cùng chuyên gia
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Địa Chỉ</h3>
                  <p className="text-gray-600">123 Đường Láng, Đống Đa, Hà Nội</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Liên Hệ</h3>
                  <p className="text-gray-600">Điện thoại: 0123 456 789</p>
                  <p className="text-gray-600">Email: info@seoulcenter.vn</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Giờ Mở Cửa</h3>
                  <p className="text-gray-600">Thứ 2 - Thứ 7: 9:00 - 20:00</p>
                  <p className="text-gray-600">Chủ Nhật: 9:00 - 17:00</p>
                </div>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
                  />
                  <textarea
                    placeholder="Nội dung"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
                  ></textarea>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                    Gửi Yêu Cầu
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                SEOUL CENTER
              </h3>
              <p className="text-gray-400">Chăm sóc sắc đẹp chuyên nghiệp</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên Kết</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-pink-400">Trang Chủ</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-pink-400">Dịch Vụ</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-pink-400">Thư Viện</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-pink-400">Liên Hệ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dịch Vụ</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-pink-400">Trẻ Hóa Da</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400">Điều Trị Mụn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400">Tẩy Tế Bào Chết</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400">Nâng Cơ RF</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kết Nối</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-pink-400">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-pink-400">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Seoul Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
