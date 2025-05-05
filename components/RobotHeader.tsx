"use client";

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const RobotHeader = () => {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

      <div className="flex h-full">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Busy Mind Concept
          </h1>
          <p className="mt-10 text-neutral-300 pl-10">
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
