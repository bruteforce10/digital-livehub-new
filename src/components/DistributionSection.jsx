import { languageAtom } from "@/lib/languageAtom";
import { useAtom } from "jotai";
import Image from "next/image";

const DISTRIBUTION_DATA = {
  EN: {
    title: "Distribution Network",
    subtitle: "Comprehensive Reach Across Indonesia",
    sections: [
      {
        image: "/marketplace.png",
        alt: "Marketplace Operations",
        title: "Service Include:",
        items: [
          "Store setup and optimization",
          "Product listing management",
          "Inventory synchronization",
          "Pricing strategy and promotions",
          "Customer service management",
          "Performance analytics",
          "Advertising",
        ],
      },
      {
        image: "/network.png",
        alt: "Reseller Network",
        title: "Service Include:",
        items: [
          "500+ verified reseller partners",
          "Nationwide coverage across 34 provinces",
          "Training and support programs",
          "Performance incentive systems",
          "Real-time sales tracking",
          "Marketing material support",
          "Bulk order management",
        ],
      },
    ],
  },
  ID: {
    title: "Jaringan Distribusi",
    subtitle: "Jangkauan Komprehensif di Seluruh Indonesia",
    sections: [
      {
        image: "/marketplace.png",
        alt: "Operasi Marketplace",
        title: "Layanan Meliputi:",
        items: [
          "Pengaturan dan optimasi toko",
          "Manajemen listing produk",
          "Sinkronisasi inventori",
          "Strategi harga dan promosi",
          "Manajemen layanan pelanggan",
          "Analisis performa",
          "Periklanan",
        ],
      },
      {
        image: "/network.png",
        alt: "Jaringan Reseller",
        title: "Layanan Meliputi:",
        items: [
          "500+ mitra reseller terverifikasi",
          "Jangkauan nasional di 34 provinsi",
          "Program pelatihan dan dukungan",
          "Sistem insentif performa",
          "Pelacakan penjualan real-time",
          "Dukungan materi pemasaran",
          "Manajemen pesanan massal",
        ],
      },
    ],
  },
  CN: {
    title: "分销网络",
    subtitle: "印度尼西亚全面覆盖",
    sections: [
      {
        image: "/marketplace.png",
        alt: "电商平台运营",
        title: "服务包括：",
        items: [
          "店铺设置和优化",
          "产品列表管理",
          "库存同步",
          "定价策略和促销",
          "客户服务管理",
          "绩效分析",
          "广告投放",
        ],
      },
      {
        image: "/network.png",
        alt: "分销商网络",
        title: "服务包括：",
        items: [
          "500多个认证分销合作伙伴",
          "覆盖34个省份的全国网络",
          "培训和支持计划",
          "绩效激励系统",
          "实时销售追踪",
          "营销材料支持",
          "批量订单管理",
        ],
      },
    ],
  },
};

export default function DistributionSection() {
  const [language] = useAtom(languageAtom);
  const content = DISTRIBUTION_DATA[language] || DISTRIBUTION_DATA.EN;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{content.title}</h2>
        <p className="text-center text-gray-600 mb-16">{content.subtitle}</p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {content.sections.map((section, index) => (
            <div key={index}>
              <Image
                src={section.image}
                alt={section.alt}
                width={500}
                height={500}
                className="rounded-lg mb-6"
              />
              <h4 className="text-xl font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-600">
                {section.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
