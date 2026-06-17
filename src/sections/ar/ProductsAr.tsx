"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Internal Independent Types and Configs
const WHATSAPP_NUMBER = "1234567890";
const ITEMS_PER_PAGE = 4;

interface Product {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  price: string;
  priceNum: number;
  finish: string;
  img: string;
  description: string;
  dimensions: string;
  finishLabel: string;
  hardware: string;
}

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "باب جوز داكن",
    category: "أبواب مخصصة",
    priceRange: "mid",
    price: "1,450",
    priceNum: 1450,
    finish: "قشرة خشبية",
    img: "/10.jpeg",
    description:
      "تشطيب جوز داكن بخطوط هادئة وحضور معماري راقٍ يضيف دفئًا وأناقة للمكان.",
    dimensions: "2100 مم × 900 مم × 40 مم",
    finishLabel: "قشرة جوز طبيعية",
    hardware: "نحاس مصقول",
  },
  {
    id: 2,
    name: "باب أبيض هادئ",
    category: "أبواب مخصصة",
    priceRange: "entry",
    price: "1,050",
    priceNum: 1050,
    finish: "لاكير",
    img: "/11.jpeg",
    description:
      "سطح أبيض نقي للمساحات التي تعتمد على البساطة والاتساع والهدوء البصري.",
    dimensions: "2100 مم × 850 مم × 40 مم",
    finishLabel: "لاكير مطفي",
    hardware: "نيكل ساتان",
  },
  {
    id: 3,
    name: "باب بلوط فاخر",
    category: "أبواب مخصصة",
    priceRange: "premium",
    price: "2,100",
    priceNum: 2100,
    finish: "قشرة خشبية",
    img: "/12.jpeg",
    description:
      "درجات بلوط دافئة مع إكسسوارات مصقولة تمنح التصميم توازنًا بصريًا فخمًا.",
    dimensions: "2100 مم × 900 مم × 44 مم",
    finishLabel: "قشرة بلوط مدخن",
    hardware: "ذهبي مصقول",
  },
  {
    id: 4,
    name: "باب رمادي مسطح",
    category: "أبواب مخصصة",
    priceRange: "premium",
    price: "1,950",
    priceNum: 1950,
    finish: "لامينيت",
    img: "/13.jpeg",
    description:
      "تصميم مسطح بدرجات رمادية هادئة ومسار بصري نظيف يناسب المساحات المعاصرة.",
    dimensions: "2100 مم × 900 مم × 40 مم",
    finishLabel: "لامينيت مطفي محبب",
    hardware: "أسود مطفي",
  },
  {
    id: 5,
    name: "باب بألواح خطية",
    category: "ألواح جدارية",
    priceRange: "luxury",
    price: "2,800",
    priceNum: 2800,
    finish: "لاكير",
    img: "/13.jpeg",
    description:
      "إيقاع رأسي خفيف يضيف عمقًا وظلالًا أنيقة لتكوينات الجدران والأبواب.",
    dimensions: "2100 مم × 950 مم × 50 مم",
    finishLabel: "MDF مطلي / قشرة خشبية",
    hardware: "مقبض مدمج",
  },
  {
    id: 6,
    name: "باب هندسي بطابع لافت",
    category: "قطع مميزة",
    priceRange: "luxury",
    price: "3,200",
    priceNum: 3200,
    finish: "لاكير",
    img: "/14.jpeg",
    description:
      "تفاصيل نحاسية هندسية تمنح المدخل شخصية فاخرة وحضورًا واضحًا من النظرة الأولى.",
    dimensions: "2200 مم × 1000 مم × 55 مم",
    finishLabel: "لاكير رمادي داكن مع نحاس",
    hardware: "مقبض مطعّم بالذهب",
  },
  {
    id: 7,
    name: "ألواح بلوط ذات تموج",
    category: "ألواح جدارية",
    priceRange: "luxury",
    price: "3,200",
    priceNum: 3200,
    finish: "قشرة خشبية",
    img: "/15.jpeg",
    description:
      "تموجات البلوط تضيف ملمسًا أعمق وأناقة أكثر هدوءًا مع إمكانية دمج الإضاءة المخفية.",
    dimensions: "2200 مم × 1000 مم × 55 مم",
    finishLabel: "لاكير رمادي داكن مع نحاس",
    hardware: "مقبض مطعّم بالذهب",
  },
];

const DICTIONARY = {
  all: "الكل",
  collection: "المجموعة",
  title: "كتالوج منتجات بمنطق هادئ وفاخر.",
  subtitle:
    "مجموعة مختارة من الأبواب والألواح والقطع المميزة، مع تصفح خفيف وفلاتر مرتبة وصفحات واضحة.",
  type: "النوع",
  finish: "التشطيب",
  price: "السعر",
  sort: "الترتيب",
  reset: "إعادة الضبط",
  items: "قطع",
  itemSingle: "قطعة",
  noProducts: "لا توجد قطع تطابق الفلاتر",
  page: "الصفحة",
  of: "من",
  prev: "السابق",
  next: "التالي",
  viewDetails: "عرض التفاصيل",
  perPiece: "للقطعة",
  dimensions: "الأبعاد",
  hardware: "الإكسسوارات",
  whatsappBtn: "اطلب عبر واتساب",
  continueBtn: "متابعة التصفح",
  whatsappMsg: (name: string, cat: string, price: string) =>
    `مرحبًا، أرغب بالاستفسار عن *${name}* (${cat}) بسعر SAR ${price}. هل يمكنكم مشاركة المزيد من التفاصيل؟`,
  categories: ["الكل", "أبواب مخصصة", "ألواح جدارية", "قطع مميزة"],
  finishes: ["الكل", "قشرة خشبية", "لاكير", "لامينيت"],
  priceRanges: [
    { key: "all", label: "كل الأسعار" },
    { key: "entry", label: "أقل من 1500 ريال" },
    { key: "mid", label: "1500 - 2000 ريال" },
    { key: "premium", label: "2000 - 2500 ريال" },
    { key: "luxury", label: "2500 ريال فأعلى" },
  ],
  sortOptions: [
    { key: "default", label: "الأبرز" },
    { key: "price-asc", label: "السعر: من الأقل إلى الأعلى" },
    { key: "price-desc", label: "السعر: من الأعلى إلى الأقل" },
    { key: "name", label: "الاسم: من أ إلى ي" },
  ],
};

function ProductModalAr({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;
  const t = DICTIONARY;

  const handleWhatsApp = () => {
    const message = t.whatsappMsg(
      product.name,
      product.category,
      product.price,
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-onyx/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-background rounded-4xl overflow-hidden shadow-2xl border border-border/60 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-50 w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center text-foreground transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-full md:w-[46%] h-72 md:h-auto relative bg-card">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background/25 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-onyx/35 to-transparent md:hidden" />
        </div>

        <div className="w-full md:w-[54%] p-7 md:p-10 lg:p-12 flex flex-col overflow-y-auto">
          <div className="mb-6">
            <span className="text-accent text-[10px] uppercase tracking-[0.25em] font-mono block mb-3">
              {product.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground leading-tight">
              {product.name}
            </h3>
          </div>

          <div className="flex items-end gap-3 mb-6 justify-end">
            <span className="text-3xl md:text-4xl font-light text-foreground">
              SAR {product.price}
            </span>
            <span className="text-sm text-foreground/50">{t.perPiece}</span>
          </div>

          <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            {product.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-border rounded-2xl p-4 bg-white/[0.02]">
              <span className="text-[9px] uppercase tracking-[0.28em] text-foreground/50 block mb-2">
                {t.dimensions}
              </span>
              <span className="text-sm font-light">{product.dimensions}</span>
            </div>
            <div className="border border-border rounded-2xl p-4 bg-white/[0.02]">
              <span className="text-[9px] uppercase tracking-[0.28em] text-foreground/50 block mb-2">
                {t.finish}
              </span>
              <span className="text-sm font-light">{product.finishLabel}</span>
            </div>
            <div className="border border-border rounded-2xl p-4 sm:col-span-2 bg-white/[0.02]">
              <span className="text-[9px] uppercase tracking-[0.28em] text-foreground/50 block mb-2">
                {t.hardware}
              </span>
              <span className="text-sm font-light">{product.hardware}</span>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-2">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-medium text-sm uppercase tracking-wider px-6 py-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.whatsappBtn}
            </button>
            <button
              onClick={onClose}
              className="w-full border border-border text-foreground hover:border-accent text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-colors duration-300 cursor-pointer"
            >
              {t.continueBtn}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-[11px] uppercase tracking-widest font-medium rounded-full border transition-all duration-300 cursor-pointer whitespace-nowrap ${
        active
          ? "bg-accent border-accent text-white shadow-[0_10px_25px_rgba(244,116,59,0.25)]"
          : "bg-transparent border-border text-foreground/60 hover:border-foreground/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function PaginationButton({
  active,
  disabled,
  children,
  onClick,
}: {
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`min-w-10 h-10 px-3 rounded-full border text-xs uppercase tracking-[0.25em] transition-colors ${
        active
          ? "bg-foreground text-background border-foreground"
          : "bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40"
      } ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {children}
    </button>
  );
}

export default function ProductCatalogAr() {
  const t = DICTIONARY;
  const products = PRODUCTS_DATA;

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState(t.all);
  const [finish, setFinish] = useState(t.all);
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== t.all) {
      result = result.filter((p) => p.category === category);
    }

    if (finish !== t.all) {
      result = result.filter((p) => p.finish === finish);
    }

    if (priceRange !== "all")
      result = result.filter((p) => p.priceRange === priceRange);

    if (sort === "price-asc") result.sort((a, b) => a.priceNum - b.priceNum);
    else if (sort === "price-desc")
      result.sort((a, b) => b.priceNum - a.priceNum);
    else if (sort === "name")
      result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [category, finish, priceRange, sort, products, t.all]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  // Fix: Fallback to the maximum available page if current page exceeds it
  const safeCurrentPage = currentPage > totalPages ? totalPages : currentPage;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  const handleFilterChange = (setter: (val: string) => void, val: string) => {
    setter(val);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setCategory(t.all);
    setFinish(t.all);
    setPriceRange("all");
    setSort("default");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    category !== t.all ||
    finish !== t.all ||
    priceRange !== "all" ||
    sort !== "default";

  return (
    <div dir="rtl" className="text-right">
      <AnimatePresence>
        {selectedProduct && (
          <ProductModalAr
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      <section
        id="products"
        className="relative py-28 md:py-36 bg-background text-foreground px-6 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
        <div className="absolute -top-24 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-0 w-80 h-80 bg-vibrant/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-16">
            <div className="max-w-3xl">
              <span className="text-accent text-xs uppercase font-bold tracking-[0.35em] block mb-4">
                {t.collection}
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                {t.title}
              </h2>
            </div>
            <p className="max-w-xl text-sm md:text-base text-foreground/60 font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 rounded-[1.5rem] border border-border/80 bg-foreground/5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-md p-5 md:p-6"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-start md:items-center gap-3 flex-wrap">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/40 w-16 shrink-0 pt-2 md:pt-0">
                    {t.type}
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    {t.categories.map((c) => (
                      <Chip
                        key={c}
                        active={category === c}
                        onClick={() => handleFilterChange(setCategory, c)}
                      >
                        {c}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border/70" />
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-5 xl:gap-8 items-start">
                <div className="flex flex-col gap-5">
                  <div className="flex items-start md:items-center gap-3 flex-wrap">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/40 w-16 shrink-0 pt-2 md:pt-0">
                      {t.finish}
                    </span>
                    <div className="flex gap-2 flex-wrap">
                      {t.finishes.map((f) => (
                        <Chip
                          key={f}
                          active={finish === f}
                          onClick={() => handleFilterChange(setFinish, f)}
                        >
                          {f}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 rounded-full border border-border/70 bg-background/70 px-4 py-2.5">
                      <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/40 shrink-0">
                        {t.price}
                      </span>
                      <select
                        value={priceRange}
                        onChange={(e) =>
                          handleFilterChange(setPriceRange, e.target.value)
                        }
                        className="w-full bg-transparent text-foreground text-[11px] uppercase tracking-widest focus:outline-none cursor-pointer"
                      >
                        {t.priceRanges.map((r) => (
                          <option
                            key={r.key}
                            value={r.key}
                            className="bg-background normal-case tracking-normal"
                          >
                            {r.label}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="flex items-center gap-3 rounded-full border border-border/70 bg-background/70 px-4 py-2.5">
                      <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/40 shrink-0">
                        {t.sort}
                      </span>
                      <select
                        value={sort}
                        onChange={(e) =>
                          handleFilterChange(setSort, e.target.value)
                        }
                        className="w-full bg-transparent text-foreground text-[11px] uppercase tracking-widest focus:outline-none cursor-pointer"
                      >
                        {t.sortOptions.map((o) => (
                          <option
                            key={o.key}
                            value={o.key}
                            className="bg-background normal-case tracking-normal"
                          >
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between xl:justify-end gap-4 xl:gap-5 xl:ml-auto">
                  <span className="text-[11px] text-foreground/40 font-light whitespace-nowrap">
                    {filtered.length}{" "}
                    {filtered.length === 1 ? t.itemSingle : t.items}
                  </span>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-[11px] uppercase tracking-[0.35em] text-accent hover:text-accent/70 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {t.reset}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {filtered.length > 0 ? (
            <>
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {paginated.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[1.5rem] mb-5 bg-card border border-border/80 group-hover:border-accent/25 transition-colors duration-300">
                        <Image
                          src={product.img}
                          alt={product.name}
                          fill
                          className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-onyx/55 via-onyx/10 to-transparent opacity-90" />

                        <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <div className="bg-background/90 backdrop-blur-sm text-foreground text-xs uppercase tracking-[0.25em] text-center py-3 rounded-full font-medium">
                            {t.viewDetails}
                          </div>
                        </div>

                        <div className="absolute top-4 left-4 z-20 bg-onyx/75 backdrop-blur-sm text-bone text-sm px-3 py-1.5 rounded-full font-light tracking-wide">
                          SAR {product.price}
                        </div>

                        <div className="absolute top-4 right-4 z-20 bg-onyx/55 backdrop-blur-sm text-bone/80 text-[10px] px-2.5 py-1 rounded-full font-light uppercase tracking-wider">
                          {product.finish}
                        </div>
                      </div>

                      <p className="text-accent text-[10px] font-mono uppercase tracking-[0.25em] mb-1.5">
                        {product.category}
                      </p>
                      <h3 className="text-xl md:text-2xl font-light tracking-wide leading-snug group-hover:text-accent transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-md">
                        {product.description}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* English Version UI string update */}
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/40">
                  {t.page} {safeCurrentPage} {t.of} {totalPages}
                </p>

                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <PaginationButton
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    {t.prev}
                  </PaginationButton>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationButton
                        key={page}
                        active={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </PaginationButton>
                    ),
                  )}

                  <PaginationButton
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    {t.next}
                  </PaginationButton>
                </div>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              <p className="text-foreground/30 text-sm font-light uppercase tracking-[0.35em] mb-4">
                {t.noProducts}
              </p>
              <button
                onClick={clearFilters}
                className="text-accent text-xs uppercase tracking-[0.35em] hover:text-accent/70 transition-colors cursor-pointer"
              >
                {t.reset}
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
