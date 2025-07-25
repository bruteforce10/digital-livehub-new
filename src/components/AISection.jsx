import Image from "next/image";
import React from "react";

const AISection = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 py-20 lg:grid-cols-2 lg:gap-8 items-center">
      <div className=" max-lg:text-center lg:order-1 order-2">
        <h2
          className="text-5xl font-bold leading-normal text-transparent bg-clip-text mb-6"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #E96E4D 0%, #D4346A 52%, #644B86 100%)",
          }}
        >
          Empowering Human Potential with AI
        </h2>
        <p>
          We proudly position ourselves as an AI powerhouse, not to replace
          human roles, but to empower them. At our core, we believe technology
          should amplify human potential, not eliminate it. That’s why AI is
          integrated across all our teams—not as a substitute, but as a powerful
          assistant. It helps us work faster, think smarter, and extend our
          reach—from streamlining operations to delivering sharper insights and
          unlocking new opportunities. This synergy between human creativity and
          AI efficiency keeps us agile, relevant, and ahead in an ever-evolving
          market.
        </p>
      </div>
      <Image
        src={"/ai-image.png"}
        alt="AI Section Image"
        width={500}
        height={500}
        className="mt-8 mx-auto"
      />
    </div>
  );
};

export default AISection;
