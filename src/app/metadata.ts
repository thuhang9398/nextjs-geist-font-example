import { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Seoul Beauty Center | Chăm Sóc Sắc Đẹp Chuyên Nghiệp",
  description: "Seoul Beauty Center - Trung tâm chăm sóc sắc đẹp hàng đầu với công nghệ hiện đại và đội ngũ chuyên gia. Các dịch vụ: trẻ hóa da, điều trị mụn, tẩy tế bào chết, nâng cơ RF.",
  openGraph: {
    title: "Seoul Beauty Center | Chăm Sóc Sắc Đẹp Chuyên Nghiệp",
    description: "Trung tâm chăm sóc sắc đẹp hàng đầu với công nghệ hiện đại và đội ngũ chuyên gia",
    images: ["https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg"],
    type: "website",
    locale: "vi_VN",
    siteName: "Seoul Beauty Center"
  },
  keywords: "spa, làm đẹp, chăm sóc da, trẻ hóa da, điều trị mụn, nâng cơ, seoul center, thẩm mỹ viện",
  robots: "index, follow",
  alternates: {
    canonical: "https://seoulcenter.vn"
  },
  authors: [{ name: "Seoul Beauty Center" }],
  icons: {
    icon: "/favicon.ico"
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
  category: "Beauty & Spa"
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ec4899"
}
