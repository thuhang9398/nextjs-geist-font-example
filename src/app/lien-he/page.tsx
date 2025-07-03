"use client"

import { Button } from "@/components/ui/button"

export default function LienHePage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ</h1>
            <p className="text-gray-600 text-lg">
              Chúng tôi rất vui được lắng nghe góp ý và hỗ trợ bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="font-semibold text-xl mb-4">Địa Chỉ</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <span className="w-5 h-5 mr-2">📍</span>
                    123 Đường Láng, Đống Đa, Hà Nội
                  </p>
                  <p className="flex items-center">
                    <span className="w-5 h-5 mr-2">🚇</span>
                    Gần ga tàu điện Láng
                  </p>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="font-semibold text-xl mb-4">Thông Tin Liên Hệ</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <span className="w-5 h-5 mr-2">📞</span>
                    Điện thoại: 0123 456 789
                  </p>
                  <p className="flex items-center">
                    <span className="w-5 h-5 mr-2">📧</span>
                    Email: info@seoulcenter.vn
                  </p>
                  <p className="flex items-center">
                    <span className="w-5 h-5 mr-2">💬</span>
                    Zalo: 0123 456 789
                  </p>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="font-semibold text-xl mb-4">Giờ Mở Cửa</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <span className="w-5 h-5 mr-2">📅</span>
                    Thứ 2 - Thứ 7: 9:00 - 20:00
                  </p>
                  <p className="flex items-center">
                    <span className="w-5 h-5 mr-2">📅</span>
                    Chủ Nhật: 9:00 - 17:00
                  </p>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="font-semibold text-xl mb-4">Kết Nối</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-pink-500">Facebook</a>
                  <a href="#" className="text-gray-600 hover:text-pink-500">Instagram</a>
                  <a href="#" className="text-gray-600 hover:text-pink-500">TikTok</a>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-6">Gửi Tin Nhắn</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
                    placeholder="Nhập email của bạn (không bắt buộc)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nội dung
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
                    placeholder="Nhập nội dung tin nhắn của bạn"
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3"
                >
                  Gửi Tin Nhắn
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
