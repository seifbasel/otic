import NavbarAr from "@/sections/ar/NavbarAr";
import HeroAr from "@/sections/ar/HeroAr";
import ServicesAr from "@/sections/ar/ServicesAr";
import PortfolioAr from "@/sections/ar/PortfolioAr";
import DeliveredResults from "@/sections/DeliveredResults";
import ProductsAr from "@/sections/ar/ProductsAr";
import HistoryAr from "@/sections/ar/HistoryAr";
import ContactAr from "@/sections/ar/ContactAr";
import LocationsectionAr from "@/sections/ar/LocationsectionAr";
import FooterAr from "@/sections/ar/FooterAr";

export default function HomeAr() {
  return (
    <main>
      <NavbarAr />
      <HeroAr />
      <ServicesAr />
      <PortfolioAr />
      <DeliveredResults
        eyebrow="نتائج منفذة"
        title="مساحات حقيقية بعد التنفيذ"
        description="عرض مباشر للأعمال بعد التسليم كما ظهرت على أرض الواقع، بدون عناوين أو وصف إضافي."
        sectionLabel="معرض النتائج المنفذة"
        closeLabel="إغلاق عرض الصورة"
        openedImageAlt="صورة النتيجة بعد الفتح"
        imageAltPrefix="نتيجة منفذة"
        previousLabel="السابق"
        nextLabel="التالي"
        pageLabel="الصفحة"
      />
      <ProductsAr />
      <HistoryAr />
      <ContactAr />
      <LocationsectionAr />
      <FooterAr />
    </main>
  );
}
