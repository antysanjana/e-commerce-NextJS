import { Navbar } from "./_components/Navbar";
import { TypewriterEffectSmoothDemo } from "./_components/TypewriterEffect";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <TypewriterEffectSmoothDemo />
    </div>
  );
}
