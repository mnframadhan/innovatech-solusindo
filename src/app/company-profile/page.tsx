"use client"
import React from "react";

import { WhatsappIcon } from "react-share"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";


export default function Company(): React.JSX.Element {

    const stacks = ['html', 'css', 'js', 'ts', 'react', 'vite', 'nodejs', 'express', 'postgre', 'mongo', 'redis', 'elasticsearch']

    return (
        <>
            <div className="absolute opacity-20 mt-5 md:mt-10 z-40 overflow-hidden">
                <img width={900} src="/logo-background.png" alt="logo_perusahaan" className="" />
            </div>
            <Link href="/" className="absolute z-50 font-[Handjet] font-extrabold text-6xl px-20 py-10">
                Innovatech Solusindo
            </Link>
            <div id="jumbotron" className="w-full bg-gradient-to-r from-[#0762c8] to-[#edf1ff] pt-16 md:pt-4 overflow-hidden">
                <div className="flex gap-40 items-center">

                    <Carousel className="z-40 max-w-[700px]">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="flex relative h-screen items-center pl-20">
                                    <div className="w-[680px] h-96 bg-emerald-50 z-50">
                                    </div>
                                </div>
                            </CarouselItem>

                            <CarouselItem>
                                <div className="flex relative h-screen items-center pl-20">
                                    <div className="w-[680px] h-96 bg-orange-500 z-50">
                                    </div>
                                </div>
                            </CarouselItem>

                            <CarouselItem>
                                <div className="flex relative h-screen items-center pl-20">
                                    <div className="w-[680px] h-96 bg-orange-300 z-50">
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex relative h-screen items-center pl-20">
                                    <div className="w-[680px] h-96 bg-lime-200 z-50">
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="flex flex-col gap-4">

                        <div className="flex flex-col gap-4 font-[Handjet]">
                            <h1 className="text-6xl  font-extrabold">Company Profile Website</h1>
                            <p className="text-2xl">Pembuatan Website Company Profile Custom</p>
                        </div>
                        <div className="text-md px-5 font-[Plus Jakarta Sans]">
                            <ul className="list-disc">
                                <li>Website Company Profile</li>
                                <li>Website Portofolio Pribadi</li>
                                <li>Website Custom</li>
                            </ul>
                        </div>
                        <div className="max-w-[31rem]">
                            <p className="text- text-justify">Situs yang memberikan informasi tentang perusahaan, termasuk visi, misi, produk, layanan, dan kontak, untuk memperkenalkan perusahaan kepada publik dan membangun citra.</p>
                        </div>

                        <div className="flex gap-6">
                            <a
                                href="https://wa.me/6285732398679/?text=Halo, admin. Saya ingin berkonsultasi terkait layanan Innovatech Solusindo."
                                className="z-50 w-fit text-white py-2 text-lg self-start uppercase font-bold duration-300 tracking-widest " target="_blank" rel="noopener noreferrer" >
                                <WhatsappIcon size={44} />
                            </a>

                            <a
                                href="https://ig.me/m/innovatechsolusindo/"
                                className="z-50 w-fit text-white py-2 text-lg self-start uppercase font-bold duration-300 tracking-widest " target="_blank" rel="noopener noreferrer" >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="instagramicon" width={44} />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}