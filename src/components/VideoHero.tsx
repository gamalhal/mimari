import React from "react";

/**
 * مكون فيديو رئيسي للصفحة الرئيسية
 * يعرض فيديو خلفية مع نص ترحيبي وتأثيرات بصرية
 */
const VideoHero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* فيديو الخلفية */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
        >
          {/* فيديو من Pexels - Architectural Time Lapse */}
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          {/* فيديو احتياطي آخر من Pexels */}
          <source src="https://player.vimeo.com/external/371433808.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35570b724aa&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          {/* فيديو احتياطي ثالث من Pexels */}
          <source src="https://player.vimeo.com/external/434045526.hd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=175&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        
        {/* طبقة التدرج فوق الفيديو */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      
      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl">
          {/* العنوان الرئيسي */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            معمارى
          </h1>
          
          {/* النص الوصفي */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            نبتكر تصاميم معمارية فريدة تجمع بين الجمال والوظيفة والاستدامة
          </p>
          
          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-[#bfa16a] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a8905a] transition-colors duration-300 transform hover:scale-105">
              استكشف مشاريعنا
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              تواصل معنا
            </button>
          </div>
          
          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-delay-3">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#bfa16a] mb-2">150+</div>
              <div className="text-sm md:text-base text-gray-300">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#bfa16a] mb-2">25+</div>
              <div className="text-sm md:text-base text-gray-300">سنة خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#bfa16a] mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-300">عميل سعيد</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* زر التمرير للأسفل */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero; 