import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Leo's&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Websites&nbsp;</h1>  
        <h2 className={subtitle({ class: "mt-4 italic" })}>
          Websites for you
        </h2>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row">
      <p>I specialize in crafting unique and vibrant websites tailored just for you. Dive into our world of creativity and let us help you bring your digital vision to life.</p>
      <img width={500} height={500} src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lion" />
      <p>As a true lion, we fight for excellence in design, innovation in technology, and the courage to push boundaries. Join us on this journey to redefine the digital landscape.</p>
      </div>
    </section>
  );
}
