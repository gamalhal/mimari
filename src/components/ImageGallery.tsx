import React from "react";
import Image from "next/image";

/**
 * مكون معرض الصور التفاعلي
 * يعرض مشاريع معمارية مع تأثيرات hover وتفاعلية
 */
const ImageGallery: React.FC = () => {
  // بيانات المشاريع المعمارية مع روابط صور من Unsplash
  const projects = [
    {
      id: 1,
      title: "مشروع سكني فاخر",
      description: "مجمع سكني حديث بتصميم عصري",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      category: "سكني"
    },
    {
      id: 2,
      title: "مركز تجاري حديث",
      description: "مركز تسوق متطور بتقنيات حديثة",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      category: "تجاري"
    },
    {
      id: 3,
      title: "فندق سياحي فاخر",
      description: "فندق 5 نجوم بتصميم فريد",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      category: "سياحي"
    },
    {
      id: 4,
      title: "جامعة حديثة",
      description: "حرم جامعي متطور للتعليم العالي",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=800&h=600&fit=crop",
      category: "تعليمي"
    },
    {
      id: 5,
      title: "مستشفى متطور",
      description: "مركز طبي متخصص بتقنيات متقدمة",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop",
      category: "صحي"
    },
    {
      id: 6,
      title: "ملعب رياضي",
      description: "استاد رياضي متعدد الأغراض",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: "رياضي"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
        >
          {/* صورة المشروع */}
          <div className="relative h-64 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* طبقة التدرج عند التمرير */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* معلومات المشروع */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-200 mb-2">{project.description}</p>
              <span className="inline-block bg-[#bfa16a] text-white px-3 py-1 rounded-full text-xs font-medium">
                {project.category}
              </span>
            </div>
          </div>
          
          {/* أيقونة التكبير */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery; 