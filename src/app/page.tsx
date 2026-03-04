import { Hero } from "@/components/sections/Hero";
import { RavesFramework } from "@/components/sections/RavesFramework";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { VibeCheckBridge } from "@/components/sections/VibeCheckBridge";

export default function Home() {
  return (
    <>
      <Hero />
      <RavesFramework />
      <About />
      <Services />
      <VibeCheckBridge />
    </>
  );
}
