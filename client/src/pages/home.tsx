import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import LocationSection from "@/components/location-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <ContactSection />
      <footer className="bg-gray-800 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h3 className="text-2xl font-bold mb-4" style={{ color: "#FFB800" }}>Want A Smoothie</h3>
    <p className="text-gray-300 mb-6">Fresh, convenient, real food & refreshments</p>
    <p className="text-gray-300 mb-4">Located inside Knot Just Bagels</p>
    <p className="text-gray-400 text-sm">
      © 2026 Want A Smoothie. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  );
}
