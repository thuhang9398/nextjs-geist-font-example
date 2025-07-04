"use client"

import { Button } from "@/components/ui/button"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
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
  )
}
