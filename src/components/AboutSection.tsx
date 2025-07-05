import React from "react";
import Image from "next/image";

/**
 * مكون قسم "عن الشركة" محسن
 * يعرض معلومات الشركة مع صور حقيقية وتصميم جذاب
 */
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">عن معمارى</h2>
          <div className="w-32 h-1 bg-[#bfa16a] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن نؤمن بأن التصميم المعماري الجيد يمكن أن يغير العالم
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* النص التعريفي */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                نبتكر تصاميم معمارية فريدة
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                شركة معمارى هي شركة رائدة في مجال التصميم المعماري والبناء. 
                نقدم حلولاً مبتكرة ومستدامة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                فريقنا من المهندسين المعماريين ذوي الخبرة يعمل على تقديم تصاميم 
                تجمع بين الجمال والوظيفة والاستدامة، مع التركيز على الابتكار والتقنيات الحديثة.
              </p>
            </div>
            
            {/* قائمة الخدمات */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#bfa16a] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">التصميم المعماري</h4>
                <p className="text-gray-600 text-sm">تصاميم فريدة تجمع بين الجمال والوظيفة</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#bfa16a] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">التخطيط الحضري</h4>
                <p className="text-gray-600 text-sm">تخطيط شامل للمدن والمجتمعات</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#bfa16a] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">إدارة المشاريع</h4>
                <p className="text-gray-600 text-sm">إدارة شاملة للمشاريع من البداية للنهاية</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#bfa16a] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">الاستشارات الهندسية</h4>
                <p className="text-gray-600 text-sm">استشارات متخصصة في جميع المجالات</p>
              </div>
            </div>
          </div>
          
          {/* الصور */}
          <div className="space-y-6">
            {/* الصورة الرئيسية */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="مبنى معمارى حديث"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">مبنى معمارى حديث</h4>
                <p className="text-gray-200">تصميم عصري يجمع بين الجمال والوظيفة</p>
              </div>
            </div>
            
            {/* الصور الصغيرة */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
                  alt="تصميم داخلي"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
                  alt="تصميم خارجي"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 