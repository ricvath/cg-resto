import { CalendarDays, Clock3, Music2 } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const Events = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SiteHeader />
    <header className="relative isolate overflow-hidden bg-[url('https://cg.diff.hu/wp-content/themes/cortesgarden/img/header-bg.jpg')] bg-cover bg-center px-4 pb-4 pt-[106px] text-center text-[#e9e1d2] before:absolute before:inset-0 before:-z-10 before:bg-[#0e0d0b]/65 md:pb-8 md:pt-[122px]">
      <h1 className="font-myanmar mb-0 text-[36px] uppercase leading-none md:text-[46px]">Events</h1>
    </header>
    <main className="mx-auto max-w-[1024px] px-4 py-12 md:py-20">
      <article className="relative mx-auto max-w-md overflow-hidden bg-[url('https://cg.diff.hu/wp-content/themes/cortesgarden/img/event-bg.jpg')] bg-cover bg-center p-6 text-center">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-[#e9e1d2] px-3 py-1 text-2xl font-bold text-[#635b4f]">05/11</div>
        <div className="min-h-[400px] border-2 border-[#e9e1d2] bg-[#635b4f] px-4 pb-4 pt-12 text-[#e9e1d2]">
          <p className="border-y border-dashed border-[#e9e1d2] py-2 text-sm uppercase">Live Music Program</p>
          <h2 className="font-myanmar mt-8 text-3xl text-[#e9e1d2]">Jochen Janz</h2>
          <div className="mt-8 grid justify-center gap-3 text-sm"><span className="flex items-center gap-2"><Clock3 className="h-5 w-5" /> 7.00 PM</span><span className="flex items-center gap-2"><Music2 className="h-5 w-5" /> Chilled Live Music</span><span className="flex items-center gap-2"><CalendarDays className="h-5 w-5" /> Garden stage</span></div>
        </div>
      </article>
    </main>
    <SiteFooter />
  </div>
);

export default Events;
