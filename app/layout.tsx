import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen  flex flex-col items-center">
        {/* حاوية رئيسية تحدد العرض الأقصى وتتوسط الشاشة مع خلفية موحدة */}
        <div className="mt-4 w-full max-w-[1440px] flex flex-col  ">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 