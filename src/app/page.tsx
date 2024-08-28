"use client"
import { motion } from "framer-motion";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export default function Home(): React.JSX.Element {

  const stacks = ['html', 'css', 'js', 'ts', 'react', 'vite', 'nodejs', 'express', 'postgre', 'mongo', 'redis', 'elasticsearch']

  return (
    <>
      <div className="absolute opacity-20 mt-5 md:mt-10 z-50">
        <img width={900} src="/logo-background.png" alt="logo_perusahaan" className="" />
      </div>
      <div id="jumbotron" className="flex flex-col justify-center items-center w-full bg-gradient-to-r from-[#0762c8] to-[#edf1ff] pt-16 md:pt-4">
        <div className="flex justify-center items-center relative h-screen">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-3 px-4"
          >
            <div className="flex flex-col justify-center items-center font-[Handjet]">

              <div className="flex flex-col justify-center items-center">

                <div className="z-50 pb-20 text-center flex flex-col justify-center gap-4">

                  <div className="tracking-widest text-5xl md:text-8xl font-extrabold bg-[#141285] bg-clip-text text-transparent">
                    Innovatech Solusindo
                  </div>

                  <div className="text-xs md:text-4xl font-bold text-slate-700 max-w-[700px] text-center self-center ">
                    <h3 className="text-center text-xl md:text-3xl">Kami membantu digitalisasi proses bisnis secara kolaboratif bagi usaha mikro, kecil, menengah, hingga koorporasi.</h3>
                  </div>

                  <button><a href="https://wa.me/6285732398679/?text=Halo, admin. Saya ingin berkonsultasi terkait layanan Innovatech Solusindo." className="bg-slate-400 rounded-full w-fit text-white px-4 py-2 text-lg uppercase shadow-xl font-bold hover:bg-[#0762c8] duration-300 tracking-widest " target="_blank" rel="noopener noreferrer" >
                    Hubungi Admin
                  </a></button>

                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-slate-200 absolute bottom-1 md:bottom-5  flex flex-col items-center justify-center">
          <div className="flex flex-wrap items-center justify-center z-50 gap-4">
            {stacks.map((stack) => {
              return (
                <div key={stack} className="max-w-16 flex items-center justify-center flex-wrap sm:max-w-24 ">
                  <Image src={`/${stack}.png`} alt={`${stack}`} width={100} height={72} />
                </div>

              )
            })
            }
          </div>
        </div>

        <NavbarComp />
      </div>
    </>
  );
}

export function NavbarComp() {
  const navItems = [
    {
      name: "Layanan",
      link: "#layanan",
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

export const Content = () => {
  return (

    <>
      <div className="h-[5rem] md:h-[8rem] uppercase tracking-widest font-bold md:text-3xl bg-slate-100 flex justify-center items-center font-[Handjet]" id="layanan">
        <h1 className="text-lg md:text-2xl text-slate-900">&#9472;&#9472;&nbsp;&nbsp;Layanan Kami&nbsp;&nbsp;&#9472;&#9472;</h1>
      </div>

      <div className="grid grid-cols-1 pt-10 pb-10 w-full bg-gradient-to-r from-[#0762c8] to-[#edf1ff] relative" id="pinned">
        <LayananKami />
      </div>

      <div className="h-[5rem] md:h-[8rem] uppercase tracking-widest font-bold md:text-3xl bg-slate-100 flex justify-center items-center font-[Handjet]" id="tentang-kami">
        <h1 className="text-lg md:text-2xl text-slate-900">&#9472;&#9472;&nbsp;&nbsp;Siapa Kami?&nbsp;&nbsp;&#9472;&#9472;</h1>
      </div>

      <div className="flex flex-col justify-center items-center pt-10 pb-10 w-full bg-gradient-to-r from-[#0762c8] to-[#edf1ff] relative p-10 gap-10 font-[Plus Jakarta Sans]" id="kenapa-memilih-kami">

        <div className="max-w-[15rem] md:w-1/4 z-50">
          <motion.div 
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 40 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-3 px-4 mb-10">
            <img src="logo.png" alt="logo" className="bg-white rounded-full p-4 ease-in-out" />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 z-50">
          <div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Mengapa Memilih Kami?</h2>
              <p className="text-md text-slate-300">Kami memberikan solusi terbaik untuk mendukung perkembangan bisnis Anda.</p>
            </div>
            <div className="">
              <CardHoverEffectDemo />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[5rem] md:h-[8rem] uppercase tracking-widest font-bold md:text-3xl bg-slate-100 flex justify-center items-center font-[Handjet]">
        <h1 className="text-lg md:text-2xl text-slate-900 ">&#9472;&#9472;&nbsp;&nbsp;Co-Founders&nbsp;&nbsp;&#9472;&#9472;</h1>
      </div>

      <div className="flex h-[30rem] justify-center items-center w-full bg-gradient-to-r from-[#0762c8] to-[#edf1ff] relative gap-2 md:gap-20 font-[Plus Jakarta Sans]">
        <div>
          <div className="bg-indigo-500 w-32 lg:w-56 h-32 lg:h-60 rounded-t-xl overflow-hidden"></div>
          <div className="bg-white h-12 rounded-b-xl flex flex-col text-sm text-center justify-center">
            <h1>Fitrah</h1>
          </div>
        </div>
        <div>
          <div className="bg-indigo-500 w-32 lg:w-56 h-32 lg:h-60 rounded-t-xl overflow-hidden"></div>
          <div className="bg-white h-12 rounded-b-xl flex flex-col text-sm text-center justify-center">
            <h1>Titus</h1>
          </div>
        </div>
        <div>
          <div className="bg-indigo-500 w-32 lg:w-56 h-32 lg:h-60 rounded-t-xl overflow-hidden"></div>
          <div className="bg-white h-12 rounded-b-xl flex flex-col text-sm text-center justify-center">
            <h1>Fajar</h1>
          </div>
        </div>

      </div>

      <div className="h-[5rem] bg-slate-100 flex justify-between items-center font-[Plus Jakarta Sans] px-5">
        <div className="text-xs md:text-sm font-bold flex flex-col items-center">
          <h1>Innovatech</h1>
          <h3>Solusindo</h3>
        </div>
        <div className="text-[9px] md:text-[12px] flex gap-1">
          <p>Fitrah</p>-
          <p>Titus</p>-
          <p>Fajar</p>
        </div>
        <div className="text-[10px] md:text-[12px] flex gap-2">
          <p>Surabaya, Indonesia</p>
        </div>

      </div>
    </>
  );
};

export const LayananKami = () => {
  return (

    <div className="w-full flex flex-col mt-60 md:mt-0 mb-72 md:mb-0 h-[30rem] gap-4 md:flex-row items-center justify-center font-[Plus Jakarta Sans]">
      <PinContainer
        title="Grow-Up UMKM"
        href="/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] h-[17rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            <span className="italic">Grow-Up</span> UMKM
          </h3>
          <div className="text-sm !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Aplikasi Kasir, Pengelolaan Cashflow, Aplikasi Pergudangan.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img src="/UMKM.jpg" alt="" />
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="Korporasi"
        href="/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] h-[17rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Maturing Enterprises
          </h3>
          <div className="text-sm !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Manajemen Proyek, Manajemen SDM, Business Analytics.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img src="Perusahaan.jpg" alt="" />
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="Pendidikan"
        href="/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] h-[17rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            E-Learning Solution
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <div className="text-slate-500 text-sm ">
              Belajar-Mengajar Terstruktur dan <span className="italic">Goals-oriented-learning.</span>
            </div>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img src="Pendidikan.jpg" alt="" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="mx-auto w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Tim Ahli",
    description:
      "Kami didukung oleh tim pengembang yang berpengalaman dan berdedikasi untuk memberikan yang terbaik bagi klien.",
    link: "/"
  },
  {
    title: "Pendekatan Kolaboratif",
    description:
      "Kami bekerja sama dengan klien pada setiap tahap pengembangan untuk memastikan hasil yang sesuai dengan harapan.",
    link: "/"
  },
  {
    title: "Inovasi Teknologi",
    description:
      "Kami selalu menggunakan teknologi terbaru dan terbaik untuk memastikan aplikasi yang kami buat relevan dan unggul di pasaran.",
    link: "/"
  },
  {
    title: "Harga Kompetitif",
    description:
      "Kami menawarkan solusi berkualitas tinggi dengan harga yang kompetitif, memastikan nilai terbaik bagi investasi Anda.",
    link: "/"
  }
];
