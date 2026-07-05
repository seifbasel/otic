"use client";
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Internal Independent Types and Configs
const WHATSAPP_NUMBER = "+966544230533";
const ITEMS_PER_PAGE = 8;

interface Product {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  price: string;
  priceNum: number;
  img: string;
  description: string;
  dimensions: string;
}

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "باب جوز داكن",
    category: "أبواب",
    priceRange: "mid",
    price: "1,099",
    priceNum: 1099,
    img: "/17.png",
    description:
      "تشطيب جوز داكن بخطوط هادئة وحضور معماري راقٍ يضيف دفئًا وأناقة للمكان.",
    dimensions: "2100 مم × 900 مم × 40 مم",
  },
  {
    id: 2,
    name: "باب أبيض هادئ",
    category: "أبواب",
    priceRange: "entry",
    price: "999",
    priceNum: 999,
    img: "/11.png",
    description:
      "سطح أبيض نقي للمساحات التي تعتمد على البساطة والاتساع والهدوء البصري.",
    dimensions: "2100 مم × 850 مم × 40 مم",
  },
  {
    id: 3,
    name: "باب بلوط فاخر",
    category: "أبواب",
    priceRange: "premium",
    price: "1,099",
    priceNum: 1099,
    img: "/12.png",
    description:
      "درجات بلوط دافئة مع إكسسوارات مصقولة تمنح التصميم توازنًا بصريًا فخمًا.",
    dimensions: "2100 مم × 900 مم × 44 مم",
  },
  {
    id: 4,
    name: "باب رمادي مسطح",
    category: "أبواب",
    priceRange: "premium",
    price: "999",
    priceNum: 999,
    img: "/13.png",
    description:
      "تصميم مسطح بدرجات رمادية هادئة ومسار بصري نظيف يناسب المساحات المعاصرة.",
    dimensions: "2100 مم × 900 مم × 40 مم",
  },
  {
    id: 5,
    name: "باب بألواح خطية",
    category: "أبواب",
    priceRange: "luxury",
    price: "1,099",
    priceNum: 1099,
    img: "/13.png",
    description:
      "إيقاع رأسي خفيف يضيف عمقًا وظلالًا أنيقة لتكوينات الجدران والأبواب.",
    dimensions: "2100 مم × 950 مم × 50 مم",
  },
  {
    id: 6,
    name: "باب هندسي بطابع لافت",
    category: "أبواب",
    priceRange: "luxury",
    price: "999",
    priceNum: 999,
    img: "/14.png",
    description:
      "تفاصيل نحاسية هندسية تمنح المدخل شخصية فاخرة وحضورًا واضحًا من النظرة الأولى.",
    dimensions: "2200 مم × 1000 مم × 55 مم",
  },
  {
    id: 7,
    name: "ألواح بلوط ذات تموج",
    category: "أبواب",
    priceRange: "luxury",
    price: "999",
    priceNum: 999,
    img: "/15.png",
    description:
      "تموجات البلوط تضيف ملمسًا أعمق وأناقة أكثر هدوءًا مع إمكانية دمج الإضاءة المخفية.",
    dimensions: "2200 مم × 1000 مم × 55 مم",
  },
];

const DICTIONARY = {
  all: "الكل",
  collection: "المجموعة",
  title: "كتالوج منتجات",
  subtitle:
    "مجموعة مختارة من الأبواب والألواح والقطع المميزة، مع تصفح خفيف وفلاتر مرتبة وصفحات واضحة.",
  type: "النوع",
  price: "السعر",
  sort: "الترتيب",
  reset: "إعادة الضبط",
  items: "قطع",
  itemSingle: "قطعة",
  noProducts: "لا توجد قطع تطابق الفلاتر",
  showing: "عرض",
  of: "من",
  loadMore: "عرض المزيد",
  showLess: "عرض أقل",
  viewDetails: "عرض التفاصيل",
  dimensions: "الأبعاد",
  whatsappBtn: "أشتر الأن ",
  continueBtn: "متابعة التصفح",
  whatsappMsg: (name: string, cat: string, price: string) =>
    `مرحبًا، أرغب بالاستفسار عن *${name}* (${cat}) بسعر SAR ${price}. هل يمكنكم مشاركة المزيد من التفاصيل؟`,
  categories: [
    "الكل",
    "غرف الملابس",
    "غرف نوم",
    "مطابخ",
    "أبواب",
    "التكسيات الخشبية",
    "غرف معيشة",
    "وحدات ديكورية",
  ],
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
        className="relative w-full max-w-5xl max-h-[92vh] md:max-h-[90vh] bg-background rounded-4xl md:rounded-4xl overflow-hidden shadow-2xl border border-border/60 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 left-3 z-50 w-10 h-10 rounded-full bg-background/85 md:bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center text-foreground transition-colors cursor-pointer backdrop-blur-sm"
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

        <div className="relative aspect-3/4 w-full shrink-0 md:h-auto md:w-[46%] md:aspect-auto">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-5 pt-5 scroll-pb-28 md:w-[54%] md:px-10 md:pb-10 md:pt-10 lg:px-12 lg:pb-12 lg:pt-12">
          <div className="mb-4 md:mb-6">
            <span className="text-accent text-base font-mono block mb-3">
              {product.category}
            </span>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h3 className="text-2xl md:text-4xl font-light text-foreground leading-tight">
                {product.name}
              </h3>
              <span className="text-xl md:text-3xl font-light text-foreground/80 whitespace-nowrap">
                SAR {product.price}
              </span>
            </div>
          </div>

          <p className="mb-5 max-w-2xl text-sm text-foreground/70 leading-relaxed md:mb-8 md:text-base">
            {product.description}
          </p>

          <div className="mb-6 border border-border rounded-2xl p-4 bg-white/2 md:mb-8">
            <span className="mb-2 block text-sm text-foreground/50 md:text-base">
              {t.dimensions}
            </span>
            <span className="text-sm font-light">{product.dimensions}</span>
          </div>

          <div className="sticky bottom-0 -mx-5 mt-auto border-t border-border/70 bg-background/95 px-5 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 backdrop-blur-sm md:static md:mx-0 md:border-t-0 md:bg-transparent md:px-0 md:pb-0 md:pt-2 md:backdrop-blur-none">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-medium text-sm px-6 py-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.whatsappBtn}
              </button>
              <button
                onClick={onClose}
                className="w-full border border-border text-foreground hover:border-accent text-sm px-4 py-3 rounded-full transition-colors duration-300 cursor-pointer"
              >
                {t.continueBtn}
              </button>
            </div>
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
      className={`px-4 py-2 text-[11px] uppercase  font-medium rounded-full border transition-all duration-300 cursor-pointer whitespace-nowrap ${
        active
          ? "bg-accent border-accent text-white shadow-[0_10px_25px_rgba(244,116,59,0.25)]"
          : "bg-transparent border-border text-foreground/60 hover:border-foreground/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function PaginationNumberButton({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 shrink-0 rounded-full border text-base transition-colors inline-flex items-center justify-center leading-none ${
        active
          ? "bg-foreground text-background border-foreground"
          : "bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40"
      } cursor-pointer`}
    >
      <span className="flex items-center justify-center">{children}</span>
    </button>
  );
}

function PaginationActionButton({
  disabled,
  children,
  onClick,
}: {
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-10 px-5 rounded-full border text-base transition-colors inline-flex items-center justify-center leading-none bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40 ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {children}
    </button>
  );
}

export default function ProductCatalogAr() {
  const t = DICTIONARY;
  const products = PRODUCTS_DATA;
  const sectionRef = useRef<HTMLElement>(null);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState(t.all);
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("default");
  const [loadedPages, setLoadedPages] = useState(1);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== t.all) {
      result = result.filter((p) => p.category === category);
    }

    if (priceRange !== "all")
      result = result.filter((p) => p.priceRange === priceRange);

    if (sort === "price-asc") result.sort((a, b) => a.priceNum - b.priceNum);
    else if (sort === "price-desc")
      result.sort((a, b) => b.priceNum - a.priceNum);
    else if (sort === "name")
      result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [category, priceRange, sort, products, t.all]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safeLoadedPages = Math.min(loadedPages, totalPages);
  const visible = filtered.slice(0, safeLoadedPages * ITEMS_PER_PAGE);

  const handleFilterChange = (setter: (val: string) => void, val: string) => {
    setter(val);
    setLoadedPages(1);
  };

  const clearFilters = () => {
    setCategory(t.all);
    setPriceRange("all");
    setSort("default");
    setLoadedPages(1);
  };

  const handlePageClick = (page: number) => {
    setLoadedPages((prev) => Math.max(prev, page));
  };

  const handleLoadMore = () => {
    setLoadedPages((prev) => Math.min(totalPages, prev + 1));
  };

  const handleShowLess = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setLoadedPages(1);
  };

  const hasActiveFilters =
    category !== t.all || priceRange !== "all" || sort !== "default";

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
        ref={sectionRef}
        className="relative py-28 md:py-36 bg-background text-foreground px-6 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/15 to-transparent" />
        <div className="absolute -bottom-24 left-0 w-80 h-80 bg-vibrant/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-16">
            <div className="max-w-3xl">
              <span className="text-accent text-base uppercase font-bold block mb-4">
                {t.collection}
              </span>
              <h2 className="text-4xl md:text-5xl font-light  leading-tight">
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
            className="mb-10 rounded-3xl border border-border/80 bg-foreground/5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-md p-5 md:p-6"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-start md:items-center gap-3 flex-wrap">
                  <span className="text-base text-foreground/40 w-16 shrink-0 pt-2 md:pt-0">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 rounded-full border border-border/70 bg-background/70 px-4 py-2.5">
                      <span className="text-base text-foreground/40 shrink-0">
                        {t.price}
                      </span>
                      <select
                        value={priceRange}
                        onChange={(e) =>
                          handleFilterChange(setPriceRange, e.target.value)
                        }
                        className="w-full bg-transparent text-foreground text-base  focus:outline-none cursor-pointer"
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
                      <span className="text-base text-foreground/40 shrink-0">
                        {t.sort}
                      </span>
                      <select
                        value={sort}
                        onChange={(e) =>
                          handleFilterChange(setSort, e.target.value)
                        }
                        className="w-full bg-transparent text-foreground text-base  focus:outline-none cursor-pointer"
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
                  <span className="text-base text-foreground/40 font-light whitespace-nowrap">
                    {filtered.length}{" "}
                    {filtered.length === 1 ? t.itemSingle : t.items}
                  </span>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-base text-accent hover:text-accent/70 transition-colors cursor-pointer whitespace-nowrap"
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
                  {visible.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{
                        duration: 0.35,
                        delay: (idx % ITEMS_PER_PAGE) * 0.04,
                      }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="relative w-full aspect-3/4 md:aspect-4/5 overflow-hidden rounded-3xl mb-5 border border-border/80 group-hover:border-accent/25 transition-colors duration-300">
                        <Image
                          src={product.img}
                          alt={product.name}
                          fill
                          className="object-cover transform scale-80 group-hover:scale-90 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-onyx/55 via-onyx/10 to-transparent opacity-50" />

                        <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <div className="bg-background/90 backdrop-blur-sm text-foreground text-base text-center py-3 rounded-full font-medium">
                            {t.viewDetails}
                          </div>
                        </div>
                      </div>

                      <p className="text-accent text-base font-mono mb-1.5">
                        {product.category}
                      </p>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="flex-1 text-xl md:text-2xl font-light leading-snug group-hover:text-accent transition-colors duration-300">
                          {product.name}
                        </h3>
                        <span className="shrink-0 pt-1 text-base md:text-lg font-light text-foreground/75">
                          SAR {product.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-md">
                        {product.description}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-base text-foreground/40">
                  {t.showing} {visible.length} {t.of} {filtered.length}
                </p>

                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationNumberButton
                        key={page}
                        active={page <= safeLoadedPages}
                        onClick={() => handlePageClick(page)}
                      >
                        {page}
                      </PaginationNumberButton>
                    ),
                  )}

                  {safeLoadedPages > 1 && (
                    <PaginationActionButton onClick={handleShowLess}>
                      {t.showLess}
                    </PaginationActionButton>
                  )}

                  <PaginationActionButton
                    onClick={handleLoadMore}
                    disabled={safeLoadedPages === totalPages}
                  >
                    {t.loadMore}
                  </PaginationActionButton>
                </div>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              <p className="text-foreground/30 text-sm font-light mb-4">
                {t.noProducts}
              </p>
              <button
                onClick={clearFilters}
                className="text-accent text-base hover:text-accent/70 transition-colors cursor-pointer"
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
