import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Liên Hệ | Seoul Beauty Center",
  description: "Liên hệ với Seoul Center để được tư vấn miễn phí về các dịch vụ làm đẹp và chăm sóc da. Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn.",
  openGraph: {
    title: "Liên Hệ | Seoul Beauty Center",
    description: "Liên hệ với Seoul Center để được tư vấn miễn phí về các dịch vụ làm đẹp và chăm sóc da",
    images: ["https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg"],
    type: "website",
    locale: "vi_VN",
    siteName: "Seoul Beauty Center"
  },
  keywords: "liên hệ spa, đặt lịch spa, tư vấn làm đẹp, seoul center, spa hà nội, chăm sóc da, làm đẹp",
  robots: "index, follow",
  alternates: {
    canonical: "https://seoulcenter.vn/lien-he"
  },
  authors: [{ name: "Seoul Beauty Center" }],
  category: "Beauty & Spa"
}

export default function LienHePage() {

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
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
