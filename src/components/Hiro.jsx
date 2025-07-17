import { Button } from "./ui/button";

export default function Hiro() {
  return (
    <section className="-mt-24 pt-45 bg-gray-50 py-32 relative overflow-hidden border-b-2 border-primary-custom">
      <div className="w-[700px] h-[400px] bg-primary-custom rounded-full absolute -top-32 -right-24 blur-[60px] opacity-[0.13]"></div>
      <div className="w-[700px] h-[400px] bg-purple-800 rounded-full absolute -bottom-32 -left-24 blur-[60px] opacity-[0.13]"></div>
      <div className="container mx-auto px-8 text-center">
        <h1
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text mb-6"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #E96E4D 0%, #D4346A 52%, #644B86 100%)",
          }}
        >
          Redefining Market Entry
          <br />
          <span> for Southeast Asia</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Digital Live Hub combines seamless distribution and performance
          marketing to help global brands win in Indonesia
        </p>
        <Button variant={"primary"}>GET STARTED</Button>
      </div>
    </section>
  );
}
