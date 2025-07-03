import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Giới Thiệu | Seoul Beauty Center",
  description: "Tìm hiểu về Seoul Center - Trung tâm chăm sóc sắc đẹp hàng đầu với đội ngũ chuyên gia và công nghệ hiện đại",
  openGraph: {
    title: "Giới Thiệu | Seoul Beauty Center",
    description: "Tìm hiểu về Seoul Center - Trung tâm chăm sóc sắc đẹp hàng đầu với đội ngũ chuyên gia và công nghệ hiện đại",
    images: ["https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg"],
  },
  keywords: "spa, làm đẹp, chăm sóc da, seoul center, thẩm mỹ viện",
  robots: "index, follow",
  alternates: {
    canonical: "https://seoulcenter.vn/gioi-thieu"
  }
}

export default function GioiThieuPage() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Giới Thiệu</h1>
          <p className="text-gray-600 mt-4">
            Chào mừng bạn đến với Seoul Center – nơi mang đến những trải nghiệm làm đẹp chuyên nghiệp.
          </p>
        </div>
        
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
          <Image 
            src="https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Về Chúng Tôi" 
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Về Chúng Tôi</h2>
              <p className="text-gray-700">
                Seoul Center tự hào mang đến các dịch vụ chăm sóc sắc đẹp với đội ngũ chuyên gia giàu kinh nghiệm và công nghệ hiện đại. Chúng tôi cam kết mang đến cho khách hàng những trải nghiệm tốt nhất và kết quả như mong đợi.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Sứ Mệnh</h2>
              <p className="text-gray-700">
                Sứ mệnh của chúng tôi là giúp khách hàng tỏa sáng với sự tự tin và vẻ đẹp tự nhiên. Chúng tôi không ngừng cập nhật và áp dụng những phương pháp điều trị tiên tiến nhất, đảm bảo an toàn và hiệu quả cao nhất cho khách hàng.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Giá Trị Cốt Lõi</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Chất lượng dịch vụ đẳng cấp quốc tế</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>An toàn và hiệu quả là ưu tiên hàng đầu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Đội ngũ chuyên gia giàu kinh nghiệm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Công nghệ và thiết bị hiện đại</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Cam Kết</h2>
              <p className="text-gray-700">
                Chúng tôi cam kết mang đến cho khách hàng những trải nghiệm tốt nhất với dịch vụ chuyên nghiệp, không gian sang trọng và kết quả điều trị hiệu quả, an toàn.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Đội Ngũ Chuyên Gia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Chuyên gia 1" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Dr. Kim Min Ji</h3>
              <p className="text-gray-600">Giám đốc chuyên môn</p>
            </div>
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Chuyên gia 2" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Dr. Park Ji Sung</h3>
              <p className="text-gray-600">Chuyên gia điều trị</p>
            </div>
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Chuyên gia 3" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Dr. Lee Sun Mi</h3>
              <p className="text-gray-600">Chuyên gia thẩm mỹ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
