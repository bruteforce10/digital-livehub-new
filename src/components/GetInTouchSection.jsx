import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import Link from "next/link";

const GetInTouchSection = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-16">
          Ready to Be Part of Something Big?
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-pink-600" />
            <div>
              <div className="font-medium">PHONE</div>
              <div className="text-sm text-gray-600">+62 857 1138 1050</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-pink-600" />
            <div>
              <div className="font-medium">LOCATION</div>
              <div className="text-sm text-gray-600">
                Jl. Raya Bogor KM 26, Pekayon, Pasar Rebo, Jakarta Timur, DKI
                Jakarta 13710
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Linkedin className="w-5 h-5 text-pink-600" />
            <div>
              <div className="font-medium">LINKEDIN</div>
              <Link
                href={"https://id.linkedin.com/company/digital-live-hub"}
                className="text-sm text-gray-600"
                target="_blank"
              >
                Digital Live Hub
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-pink-600" />
            <div>
              <div className="font-medium">EMAIL</div>
              <div className="text-sm text-gray-600">
                hello@digitallivehub.com
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <Input placeholder="Name *" className="w-full" />
              </div>
              <div>
                <Input placeholder="Email *" type="email" className="w-full" />
              </div>
              <div>
                <Input placeholder="Subject" className="w-full" />
              </div>
              <div>
                <Textarea
                  placeholder="How can we help you? *"
                  className="w-full h-32"
                />
              </div>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3">
                SEND
              </Button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.10617591948!2d106.99047447459958!3d-6.249737993738687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d007f82df83%3A0xf22e1d66663d6677!2sDigital%20Livehub%20-%20Live%20Studio!5e0!3m2!1sen!2sid!4v1752823206420!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
