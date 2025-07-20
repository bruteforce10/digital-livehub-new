import { Facebook, Instagram, Linkedin } from "lucide-react";
import LogoDigitalLiveHub from "../../public/logo.svg";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-white py-12 border-t" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <LogoDigitalLiveHub className="w-36 h-auto" />
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/services#packages">Services</Link>
              </li>
              <li>
                <Link href="/services#digital-strategy">Our Programs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">We Can't Wait to Hear From You!</h4>
            <p className="text-gray-600 text-sm">
              Mega Bekasi Hypermall Lt.1, Jl. Ahmad Yani No.1, RT.004/RW.001,
              Marga Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17141
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-gray-600 text-sm">
              Email: info@digitallivehubumkm.co.id
              <br />
              Phone: +62 898-0961-999
              <br />
              Jakarta, Indonesia
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
          © 2025 Digital LiveHub DMHUB
        </div>
      </div>
    </footer>
  );
}
