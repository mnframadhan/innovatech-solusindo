import { FloatingNav } from "@/components/ui/floating-navbar";
import { Content } from "./content";

export function NavbarComp() {
    const navItems = [
      {
        name: "Layanan",
        link: "#layanan-kami",
      },
      {
        name: "Tentang Kami",
        link: "/#tentang-kami",
      },
      {
        name: "Hubungi",
        link: "https://wa.me/6285732398679/?text=Halo, admin. Saya ingin berkonsultasi terkait layanan Innovatech Solusindo.",
        target: "_blank",
        passHref: true,
  
      },
    ];
    return (
      <div className="relative  w-full">
        <FloatingNav navItems={navItems} />
        <Content />
      </div>
    );
  }