import Navbar from "@/components/navbar"
import PdfUpload from "@/components/PdfUpload"
import Features from "@/components/features"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <PdfUpload />
        <Features />
      </div>
    </div>
  );
}