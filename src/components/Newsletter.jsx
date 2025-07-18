import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSection() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-pink-600 py-12 text-white">
      <div className="container flex items-center mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-8 max-w-[400px] mx-auto text-md">
            Subscribe for Updates, Tips & Trends about the latest opportunities
            in Indonesia and Southeast Asia
          </p>
        </div>
        <div className="flex gap-2 max-w-md mx-auto">
          <Input
            placeholder="Enter your email"
            className="bg-white text-gray-900 border-0 h-12"
          />
          <Button className="bg-white  hover:bg-gray-800 hover:text-white text-gray-900 px-6">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
