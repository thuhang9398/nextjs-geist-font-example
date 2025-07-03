import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
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
              <li><Link href="/" className="text-gray-400 hover:text-pink-400">Trang Chủ</Link></li>
              <li><Link href="/gioi-thieu" className="text-gray-400 hover:text-pink-400">Giới Thiệu</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-pink-400">Dịch Vụ</Link></li>
              <li><Link href="/#gallery" className="text-gray-400 hover:text-pink-400">Thư Viện</Link></li>
              <li><Link href="/lien-he" className="text-gray-400 hover:text-pink-400">Liên Hệ</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-pink-400">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-gray-400 hover:text-pink-400">Trẻ Hóa Da</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-pink-400">Điều Trị Mụn</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-pink-400">Tẩy Tế Bào Chết</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-pink-400">Nâng Cơ RF</Link></li>
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
  )
}
