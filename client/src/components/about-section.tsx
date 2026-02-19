import { Leaf, Heart, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">About Want A Smoothie</h2>
          <div className="w-24 h-1 brand-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Located in the heart of Woodbridge, New Jersey, Want A Smoothie was created with the focus of making healthy eating more affordable and convenient for on-the-go access. Find us inside the wonderful Knot Just Bagels Deli.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-2xl card-hover">
            <div className="w-16 h-16 brand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-brand-gray mb-4">100% Natural</h3>
            <p className="text-gray-600">No added concentrates or syrups. Every product is REAL FOOD.</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl card-hover">
            <div className="w-16 h-16 brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-brand-gray" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Healthy & Fresh</h3>
            <p className="text-gray-600">Fresh ingredients prepared daily for maximum nutrition and taste.</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl card-hover">
            <div className="w-16 h-16 brand-dark-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Convenient</h3>
            <p className="text-gray-600">Quick, healthy options perfect for your busy lifestyle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
