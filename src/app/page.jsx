import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
        <section>
          <Hero></Hero>
        </section>

        <section>
          <Products></Products>
        </section>
    </div>
  );
}
