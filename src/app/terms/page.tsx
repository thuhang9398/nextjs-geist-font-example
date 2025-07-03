import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Điều Khoản & Điều Kiện | Seoul Beauty Center",
  description: "Điều khoản và điều kiện sử dụng dịch vụ tại Seoul Beauty Center. Tìm hiểu về quy định, chính sách và cam kết của chúng tôi.",
  openGraph: {
    title: "Điều Khoản & Điều Kiện | Seoul Beauty Center",
    description: "Điều khoản và điều kiện sử dụng dịch vụ tại Seoul Beauty Center",
    images: ["https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg"],
  },
  keywords: "điều khoản, điều kiện, chính sách, quy định, seoul center",
  robots: "index, follow",
  alternates: {
    canonical: "https://seoulcenter.vn/terms"
  }
}

export default function TermsPage() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Điều Khoản & Điều Kiện</h1>
        
        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Giới Thiệu</h2>
            <p className="mb-4">
              Chào mừng bạn đến với Seoul Center. Bằng việc truy cập và sử dụng website này, bạn đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản và điều kiện sau đây.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Dịch Vụ</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Các dịch vụ được cung cấp bởi đội ngũ chuyên gia có trình độ và kinh nghiệm.</li>
              <li>Giá cả dịch vụ có thể thay đổi mà không cần thông báo trước.</li>
              <li>Kết quả điều trị có thể khác nhau tùy thuộc vào từng cá nhân.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Đặt Lịch & Hủy Lịch</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Khách hàng cần đặt lịch trước ít nhất 24 giờ.</li>
              <li>Trong trường hợp cần hủy lịch, vui lòng thông báo trước ít nhất 12 giờ.</li>
              <li>Đối với các gói điều trị, thời hạn sử dụng là 6 tháng kể từ ngày mua.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Thanh Toán</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chấp nhận thanh toán bằng tiền mặt và chuyển khoản ngân hàng.</li>
              <li>Đối với các gói điều trị, có thể thanh toán trả góp theo thỏa thuận.</li>
              <li>Hoàn tiền chỉ áp dụng trong một số trường hợp đặc biệt.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Bảo Mật Thông Tin</h2>
            <p className="mb-4">
              Seoul Center cam kết bảo mật thông tin cá nhân của khách hàng. Chúng tôi không chia sẻ thông tin với bên thứ ba mà không có sự đồng ý của khách hàng.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Quyền Sở Hữu Trí Tuệ</h2>
            <p className="mb-4">
              Tất cả nội dung trên website này thuộc quyền sở hữu của Seoul Center. Nghiêm cấm sao chép, phân phối mà không có sự cho phép bằng văn bản.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Trách Nhiệm</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Khách hàng có trách nhiệm cung cấp thông tin chính xác về tình trạng sức khỏe.</li>
              <li>Seoul Center không chịu trách nhiệm về các vấn đề phát sinh do khách hàng không tuân thủ hướng dẫn.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Thay Đổi Điều Khoản</h2>
            <p className="mb-4">
              Seoul Center có quyền thay đổi các điều khoản này mà không cần thông báo trước. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc chấp nhận các điều khoản mới.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">9. Liên Hệ</h2>
            <p className="mb-4">
              Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ với chúng tôi qua:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: info@seoulcenter.vn</li>
              <li>Điện thoại: 0123 456 789</li>
              <li>Địa chỉ: 123 Đường Láng, Đống Đa, Hà Nội</li>
            </ul>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl mt-8">
            <p className="text-sm text-gray-600">
              Cập nhật lần cuối: Tháng 3, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
