import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const galleries = [
  { title: "Fun Dining", image: "/family.jpg" },
  { title: "Global Fusion", image: "/food.jpg" },
  { title: "Wines & Cocktails", image: "/wine.jpg" },
];

const Gallery = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SiteHeader />
    <header className="relative isolate overflow-hidden bg-[url('https://cg.diff.hu/wp-content/themes/cortesgarden/img/header-bg.jpg')] bg-cover bg-center px-4 pb-4 pt-[106px] text-center text-[#e9e1d2] before:absolute before:inset-0 before:-z-10 before:bg-[#0e0d0b]/65 md:pb-8 md:pt-[122px]">
      <h1 className="font-myanmar mb-0 text-[36px] uppercase leading-none md:text-[46px]">Gallery</h1>
    </header>
    <main className="mx-auto grid max-w-[1024px] gap-4 px-4 py-12 md:grid-cols-3 md:py-20">
      {galleries.map((gallery) => (
        <figure key={gallery.title} className="group relative h-40 overflow-hidden bg-[#0e0d0b]">
          <img src={gallery.image} alt={gallery.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[#0e0d0b]/10 transition group-hover:bg-[#0e0d0b]/50" />
          <figcaption className="font-myanmar absolute inset-0 grid place-items-center p-5 text-center text-[22px] uppercase tracking-[0.5rem] text-[#e9e1d2]">{gallery.title}</figcaption>
        </figure>
      ))}
    </main>
    <SiteFooter />
  </div>
);

export default Gallery;
