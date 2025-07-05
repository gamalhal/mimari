import React from "react";
import Loader from "../components/Loader";
import VideoHero from "../components/VideoHero";
import AboutSection from "../components/AboutSection";
import ImageGallery from "../components/ImageGallery";

/**
 * الصفحة الرئيسية لموقع معمارى
 * تحتوي على جميع أقسام الموقع: Loader، فيديو رئيسي، عن الشركة، معرض الصور، تواصل معنا
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* قسم Loader - يظهر في أعلى الصفحة */}
      <Loader />
      
      {/* قسم الفيديو الرئيسي */}
      <VideoHero />
      
      {/* قسم عن الشركة مع صور حقيقية */}
      <AboutSection />

      {/* قسم معرض الصور التفاعلي */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">معرض أعمالنا</h2>
            <div className="w-32 h-1 bg-[#bfa16a] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف مجموعة من مشاريعنا المميزة التي تعكس إبداعنا وخبرتنا
            </p>
          </div>
          
          {/* مكون معرض الصور التفاعلي */}
          <ImageGallery />
        </div>
      </section>

      {/* قسم التواصل */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">تواصل معنا</h2>
            <div className="w-32 h-1 bg-[#bfa16a] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في تحقيق رؤيتك المعمارية
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* معلومات التواصل */}
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-8">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-[#bfa16a] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">العنوان</h4>
                    <p className="text-gray-600 text-lg">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-[#bfa16a] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">الهاتف</h4>
                    <p className="text-gray-600 text-lg">+966 11 123 4567</p>
                    <p className="text-gray-600 text-lg">+966 50 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-[#bfa16a] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">البريد الإلكتروني</h4>
                    <p className="text-gray-600 text-lg">info@mimari.com</p>
                    <p className="text-gray-600 text-lg">projects@mimari.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-[#bfa16a] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">ساعات العمل</h4>
                    <p className="text-gray-600 text-lg">الأحد - الخميس: 8:00 ص - 6:00 م</p>
                    <p className="text-gray-600 text-lg">الجمعة - السبت: 9:00 ص - 2:00 م</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* نموذج التواصل المحسن */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-semibold text-gray-800 mb-8">أرسل لنا رسالة</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bfa16a] focus:border-transparent transition-colors duration-300"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bfa16a] focus:border-transparent transition-colors duration-300"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bfa16a] focus:border-transparent transition-colors duration-300"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    الموضوع *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bfa16a] focus:border-transparent transition-colors duration-300"
                    placeholder="أدخل موضوع الرسالة"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bfa16a] focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="أدخل رسالتك هنا..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#bfa16a] text-white py-4 px-8 rounded-lg hover:bg-[#a8905a] transition-colors duration-300 font-semibold text-lg transform hover:scale-105 transition-transform duration-300"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer مع عبارة الإنشاء */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* معلومات الشركة */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-[#bfa16a] mb-4">معمارى</h3>
              <p className="text-gray-300 text-lg mb-6">
                نبتكر تصاميم معمارية فريدة تجمع بين الجمال والوظيفة والاستدامة. 
                نحن نؤمن بأن التصميم الجيد يمكن أن يغير العالم.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#bfa16a] rounded-full flex items-center justify-center hover:bg-[#a8905a] transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#bfa16a] rounded-full flex items-center justify-center hover:bg-[#a8905a] transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#bfa16a] rounded-full flex items-center justify-center hover:bg-[#a8905a] transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* روابط سريعة */}
            <div>
              <h4 className="text-xl font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-[#bfa16a] transition-colors duration-300">عن الشركة</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-[#bfa16a] transition-colors duration-300">معرض الأعمال</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-[#bfa16a] transition-colors duration-300">تواصل معنا</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#bfa16a] transition-colors duration-300">الخدمات</a></li>
              </ul>
            </div>
            
            {/* الخدمات */}
            <div>
              <h4 className="text-xl font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#bfa16a] transition-colors duration-300">التصميم المعماري</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#bfa16a] transition-colors duration-300">التخطيط الحضري</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#bfa16a] transition-colors duration-300">إدارة المشاريع</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#bfa16a] transition-colors duration-300">الاستشارات</a></li>
              </ul>
            </div>
          </div>
          
          {/* حقوق النشر */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © 2024 معمارى. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400">
              تم الإنشاء بواسطة <span className="text-[#bfa16a] font-semibold">gamal hal</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
