"use client";

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const RobotHeader = () => {
  return (
    <Card className="w-full sm:h-[500px] h-[600px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

      <div className="flex h-full sm:flex-row flex-col ">
        <div className="flex-1 p-8 sm:pt-0 pt-15 relative z-10 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Busy Mind Concept
          </h1>
          <p className="sm:mt-10 mt-5 text-neutral-300 sm:pl-10 pl-2">
            We are an IT solutions provider specializing in software
            development, offering both frontend and backend (full-stack)
            expertise. We focus on creating high-performance, visually engaging
            digital experiences that capture your audience&apos;s attention.
            Whether you&apos;re looking to build a responsive website, web
            application, or custom software, we bring your UI ideas to life with
            sleek designs and robust functionality.
          </p>
        </div>

        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
};

export default RobotHeader;
