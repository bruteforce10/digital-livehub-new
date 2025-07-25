"use client";
import React from "react";
import { Button } from "./ui/button";
import { Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useAtom } from "jotai";
import { languageAtom } from "@/lib/languageAtom";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().optional(),
  message: z.string().min(5, { message: "Message is required" }),
});

export default function GetInTouchSection() {
  const [language] = useAtom(languageAtom);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        toast.success(
          language === "EN"
            ? "Message sent successfully! We will get back to you soon."
            : language === "ID"
            ? "Pesan berhasil dikirim! Kami akan segera menghubungi Anda."
            : "消息已成功发送！我们会尽快与您联系！"
        );
        form.reset();
      } else {
        const data = await res.json();
        toast.error(
          data.error || "Failed to send message." + " Please try again later."
        );
      }
    } catch (err) {
      toast.error(
        "" + err.message || "An error occurred. Please try again later."
      );
    }
  }

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          {language === "EN"
            ? "Get In Touch"
            : language === "ID"
            ? "Hubungi Kami"
            : "联系我们"}
        </h2>
        <p className="text-center text-gray-600 mb-16">
          {language === "EN"
            ? "Ready to Be Part of Something Big?"
            : language === "ID"
            ? "Siap Menjadi Bagian dari Sesuatu yang Besar?"
            : "准备成为伟大事业的一部分吗？"}
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-5 h-5 text-pink-600" />
            <div>
              <div className="font-medium">
                {language === "EN"
                  ? "Fast Whatapps"
                  : language === "ID"
                  ? "WhatsApp Cepat"
                  : "快速WhatsApp"}
              </div>
              <div className="text-sm text-gray-600">+62 857 1138 1050</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-pink-600" />
            <div>
              <div className="font-medium">
                {language === "EN"
                  ? "ADDRESS"
                  : language === "ID"
                  ? "ALAMAT"
                  : "地址"}
              </div>
              <div className="text-sm text-gray-600 pl-4 pt-2">
                <ul className="space-y-2 list-disc">
                  <li>
                    Gd. Agro Plaza Kuningan, Jakarta Selatan, Indonesia - HQ
                  </li>
                  <li>
                    Mega Bekasi Hypermall Lt. 1, Bekasi, Indonesia - Live Studio
                  </li>
                  <li>Lvl 4-1, Sunway Putra Mall, KL, Malaysia - MY Branch</li>
                  <li>190 Clemenceau Avenue #06-01, Singapore - SG Branch</li>
                </ul>
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
                marketing@digitallivehub.id
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {language === "EN"
                          ? "Name *"
                          : language === "ID"
                          ? "Nama *"
                          : "姓名 *"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            language === "EN"
                              ? "Name *"
                              : language === "ID"
                              ? "Nama *"
                              : "姓名 *"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {language === "EN"
                          ? "Email *"
                          : language === "ID"
                          ? "Email *"
                          : "邮箱 *"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            language === "EN"
                              ? "Email *"
                              : language === "ID"
                              ? "Email *"
                              : "邮箱 *"
                          }
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {language === "EN"
                          ? "Subject"
                          : language === "ID"
                          ? "Subjek"
                          : "主题"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            language === "EN"
                              ? "Subject"
                              : language === "ID"
                              ? "Subjek"
                              : "主题"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {language === "EN"
                          ? "Message"
                          : language === "ID"
                          ? "Pesan"
                          : "信息"}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={
                            language === "EN"
                              ? "Your message..."
                              : language === "ID"
                              ? "Pesan Anda..."
                              : "您的信息..."
                          }
                          className="w-full h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3"
                  type="submit"
                >
                  {language === "EN"
                    ? "Send Message"
                    : language === "ID"
                    ? "Kirim Pesan"
                    : "发送消息"}
                </Button>
              </form>
            </Form>
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
}
