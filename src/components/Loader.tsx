import React from "react";

/**
 * Loader Component
 * يعرض شعار متحرك باسم "معمارى" عند تحميل الموقع
 * يمكن استخدامه في الصفحة الرئيسية أو أثناء تحميل البيانات
 */
const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      {/* دائرة متحركة حول الشعار */}
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-[#bfa16a] mb-6"></div>
      {/* اسم الموقع بشكل جمالي */}
      <h1 className="text-4xl font-bold tracking-widest text-[#bfa16a] drop-shadow-lg select-none">
        معمارى
      </h1>
      {/* نص توضيحي أسفل الشعار */}
      <span className="mt-2 text-gray-500 text-sm">جارٍ التحميل...</span>
    </div>
  );
};

export default Loader; 