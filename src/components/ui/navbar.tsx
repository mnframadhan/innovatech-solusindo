import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full h-16 bg-primary-blue text-secondary-white flex items-center justify-between">
      <div className="px-20 font-extrabold">
        <Link to="/">Innovatech Solusindo</Link>
      </div>
      <div className="flex justify-end px-20 items-center gap-10">
        <a href="#our-services" className="hover:underline">
          Our Services
        </a>
        <a href="#about-us" className="hover:underline">
          About Us
        </a>
        <a
          className="hover:underline flex items-center"
          href="https://wa.me/6285732398679/?text=Halo, admin. Saya ingin berkonsultasi terkait layanan Innovatech Solusindo."
        >
          Join Us &nbsp;&nbsp; <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
};
