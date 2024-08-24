"use client"
import { motion } from "framer-motion";
import React  from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import { PinContainer } from "../components/ui/3d-pin";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Link from "next/link";

export default function Home (): React.JSX.Element {

  const stacks = ['html', 'css', 'js', 'ts', 'react', 'vite', 'nodejs', 'express', 'postgre', 'mongo', 'redis']

  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-3 items-center px-4"
        >
          <div className="flex flex-col justify-center items-center mb-40 md:mb-0 font-mono">
            <div className="flex flex-col justify-center items-center">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.2}
                maxSize={3}
                particleDensity={150}
                className="w-full h-full absolute z-0"
                particleColor="#008000"
              />
              <div className="z-50 text-center">
                <div className="text-3xl md:text-7xl font-bold dark:text-white ">
                  Innovatech Solusindo.
                </div>
                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
                  <h3 className="text-xl">Kembangkan Bisnismu dengan Sistem Ter-Digitalisasi</h3>
                </div>
                <Link href="https:wa.me/6285732398679/?text=Halo, admin. Saya ingin berkonsultasi terkait layanan Innovatech Solusindo." className="bg-black dark:bg-black rounded-full w-fit text-white dark:text-white px-4 py-2 text-sm shadow-xl" target="__blank" passHref={true}>
                  Hubungi Admin
                </Link>
              </div>
              
            </div>
          </div>
        </motion.div>
        <div className="text-slate-200 absolute bottom-10 flex flex-col">
          <div className="flex gap-7 flex-wrap px-10 justify-center">

            {stacks.map((stack) => {
              return (
                <div key={stack} className="max-w-16 flex flex-wrap sm:max-w-24 ">
                  <Image src={`${stack}.png`} alt={`${stack}`} />
                </div>
              )
            })
            }
          </div>
        </div>
      </AuroraBackground>
      <NavbarComp />
    </>
  );
}

export function NavbarComp () {
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
      link: "https:wa.me/6285732398679/?text=Halo, admin. Saya ingin berkonsultasi terkait layanan Innovatech Solusindo.",
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
      <div className="h-[8.5rem] bg-slate-100 flex justify-center items-center font-mono" id="layanan">
        <h1 className="text-2xl text-slate-900">&#9472;&#9472;&nbsp;&nbsp;Layanan Kami&nbsp;&nbsp;&#9472;&#9472;</h1>
      </div>
      <div className="grid grid-cols-1 pt-10 pb-10 w-full bg-white dark:bg-gradient-to-b from-slate-900 to-slate-700 relative">
        <AnimatedPinDemo />
      </div>
      <div className="h-[8.5rem] bg-slate-100 flex justify-center items-center font-mono" id="tentang-kami">
        <h1 className="text-2xl text-slate-900">&#9472;&#9472;&nbsp;&nbsp;Siapa Kami?&nbsp;&nbsp;&#9472;&#9472;</h1>
      </div>
      <div className="flex flex-col justify-center items-center pt-10 pb-10 w-full bg-slate-200 dark:bg-gradient-to-b from-slate-900 to-slate-700 relative p-10 gap-10 font-mono">
      <SparklesCore
            id="test"
            background="transparent"
            minSize={0.2}
            maxSize={2}
            particleDensity={200}
            className="w-full h-full absolute z-0"
            particleColor="#008000"
              />
        <div className="max-w-[15rem] md:w-1/4 z-50">
          <div className="flex flex-col justify-center items-center w-full">
            <img src="logo.png" alt="logo" className="bg-white rounded-full p-4" />
          </div>
        </div>
        <div className="w-full md:w-1/2 z-50">
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Mengapa Memilih Kami?</h2>
              <p className="text-md text-slate-300">Kami memberikan solusi terbaik untuk mendukung perkembangan bisnis Anda.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 text-white">
                <h3 className="text-2xl font-semibold mb-3">Tim Ahli</h3>
                <p className="text-slate-300">Kami didukung oleh tim pengembang yang berpengalaman dan berdedikasi untuk memberikan yang terbaik bagi klien.</p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 text-white">
                <h3 className="text-2xl font-semibold mb-3">Pendekatan Kolaboratif</h3>
                <p className="text-slate-300">Kami bekerja sama dengan klien pada setiap tahap pengembangan untuk memastikan hasil yang sesuai dengan harapan.</p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 text-white">
                <h3 className="text-2xl font-semibold mb-3">Inovasi Teknologi</h3>
                <p className="text-slate-300">Kami selalu menggunakan teknologi terbaru dan terbaik untuk memastikan aplikasi yang kami buat relevan dan unggul di pasaran.</p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-400 transition duration-300 text-white">
                <h3 className="text-2xl font-semibold mb-3">Harga Kompetitif</h3>
                <p className="text-slate-300">Kami menawarkan solusi berkualitas tinggi dengan harga yang kompetitif, memastikan nilai terbaik bagi investasi Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[5rem] bg-slate-100 flex justify-between items-center font-mono px-10" id="layanan">
        <div className="text-sm flex flex-col items-center">
          <h1>Innovatech</h1>
          <h3>Solusindo</h3>
        </div>
        <div className="text-[9px] md:text-[12px] flex gap-2">
          <p>Fitrah</p>-
          <p>Titus</p>-
          <p>Fajar</p>
        </div>
        <div className="text-[9px] md:text-[12px] flex gap-2">
          <p>Surabaya, Indonesia</p>
        </div>
        
      </div>
    </>
  );
};

export const AnimatedPinDemo = () => {
  return (

    <div className="w-full flex flex-col mt-60 md:mt-0 mb-60 md:mb-0 h-[30rem] gap-4 md:flex-row items-center justify-center  font-mono">
      <PinContainer
        title="Digitalisasi UMKM"
        href="/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] h-[17rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Digitalisasi UMKM
          </h3>
          <div className="text-sm !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Aplikasi Kasir, Pengelolaan Cashflow, Aplikasi Pergudangan.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img src="UMKM.jpg" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="Korporasi"
        href="/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] h-[17rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Korporasi
          </h3>
          <div className="text-sm !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Sistem Manajemen Proyek, Website, Manajemen Tenaga Kerja.
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
            Sistem Informasi Sekolah
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <div className="text-slate-500 text-sm ">
              Belajar-Mengajar dengan Terstruktur dan <span className="italic">Goals-oriented-learning.</span>
            </div>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img src="Pendidikan.jpg" alt="" />
          </div>
        </div>
      </PinContainer>
      <BackgroundBeams />
    </div>
  );
}
