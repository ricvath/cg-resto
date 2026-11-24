import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarDays, Clock3 } from "lucide-react";

const cover = "/events/svenskt-julbord-cover.jpeg";
const menu = "/events/svenskt-julbord-menu.jpeg";

const JulbordDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="h-auto rounded-none bg-[#8f171b] px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#fff6e5] shadow-sm hover:bg-[#721216]">
        Svenskt Julbord
      </Button>
    </DialogTrigger>
    <DialogContent className="max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-[1180px] overflow-y-auto border-[#d7c5a6] bg-[#f7e9cf] p-3 sm:p-5">
      <div className="pb-2 pr-10 text-[#7d171b]">
        <DialogTitle className="font-display text-3xl font-medium">Svenskt Julbord</DialogTitle>
        <DialogDescription className="mt-1 text-sm text-[#3f5945]">Swedish Christmas buffet at Cortes Garden</DialogDescription>
      </div>
      <div className="grid items-start gap-3 md:grid-cols-2">
        <img src={cover} alt="Svenskt Julbord at Cortes Garden, dates, prices and booking details" className="h-auto w-full border border-[#d7c5a6]" />
        <img src={menu} alt="Svenskt Julbord buffet menu" className="h-auto w-full border border-[#d7c5a6]" />
      </div>
    </DialogContent>
  </Dialog>
);

export const JulbordHomePromotion = () => (
  <section className="shrink-0 border-y border-[#cdbfaa] bg-[#f3e4c9] px-4 py-4 text-center text-[#3f5945] sm:py-6">
    <p className="text-[11px] uppercase tracking-[0.28em] text-[#8f171b]">Christmas at Cortes Garden</p>
    <h2 className="mt-1 font-display text-3xl font-medium text-[#7d171b] sm:mt-2 sm:text-4xl">Swedish Christmas Buffet</h2>
    <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm sm:mt-3">
      <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> 22 & 24 December</span>
      <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" /> Marbella</span>
    </div>
    <div className="mt-3 sm:mt-4"><JulbordDialog /></div>
  </section>
);

export const JulbordEventPromotion = () => (
  <section className="mx-auto grid max-w-4xl items-center gap-8 border-b border-[#cdbfaa] pb-12 md:grid-cols-[minmax(0,360px)_1fr]">
    <div className="group block w-full">
      <img src={cover} alt="Svenskt Julbord at Cortes Garden" className="h-auto w-full border border-[#d7c5a6] shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-lg" />
    </div>
    <div className="text-center md:text-left">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#8f171b]">Christmas 2026</p>
      <h2 className="mt-3 font-display text-5xl font-medium leading-none text-[#7d171b]">Svenskt Julbord</h2>
      <p className="mt-4 leading-7 text-[#635b4f]">A traditional Swedish Christmas buffet at Cortes Garden on 22 and 24 December. Open the two-page invitation for dates, prices, booking details and the full menu.</p>
      <div className="mt-6"><JulbordDialog /></div>
    </div>
  </section>
);
