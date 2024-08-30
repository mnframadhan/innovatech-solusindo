import Image from "next/image"
import { NavbarComp } from "./navbar"



const stacks = ['html', 'css', 'js', 'ts', 'react', 'vite', 'nodejs', 'express', 'postgre', 'mongo', 'redis', 'elasticsearch']

export const Jumbotron = () => {

    return (

        <>

            <div className="absolute opacity-20 mt-5 md:mt-10">
                <img src="/logo-background.png" alt="logo_perusahaan" className="w-[800px]" />
            </div>
            <div id="jumbotron" className="flex flex-col justify-center items-center w-full bg-gradient-to-r from-[#0762c8] to-[#edf1ff] pt-16 md:pt-4">
                <div className="flex justify-center items-center relative h-screen">
                    <div
                        className="relative flex flex-col gap-3 px-4"
                    >
                        <div className="flex flex-col justify-center items-center">

                            <div className="flex flex-col justify-center items-center">

                                <div className="z-30 pb-20 text-center flex flex-col justify-center gap-4">

                                    <div className="tracking-widest text-5xl md:text-8xl font-extrabold bg-[#141285] bg-clip-text text-transparent font-[Handjet]">
                                        Innovatech Solusindo
                                    </div>

                                    <div className="text-slate-700 max-w-[700px] text-center self-center font-[Plus Jakarta Sans] ">
                                        <h3 className="text-center text-sm md:text-xl">Kami membantu digitalisasi proses bisnis secara kolaboratif bagi usaha mikro, kecil, menengah, koorporasi, hingga lembaga pendidikan.</h3>
                                    </div>

                                    <button><a href="https://wa.me/6285732398679/?text=Halo, admin. Saya ingin berkonsultasi terkait layanan Innovatech Solusindo." className="bg-[#0762c8] rounded-lg w-fit text-white px-4 py-2 text-lg uppercase shadow-xl font-bold hover:bg-slate-400 duration-300 tracking-widest " target="_blank" rel="noopener noreferrer" >
                                        Hubungi Admin
                                    </a></button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-slate-200 absolute md:bottom-5 bottom-2  flex flex-col items-center justify-center">
                        <div className="flex flex-wrap items-center justify-center z-30 gap-4">
                            {stacks.map((stack) => {
                                return (
                                    <div key={stack} className="max-w-16 flex items-center justify-center flex-wrap sm:max-w-24 ">
                                        <Image src={`/${stack}.png`} alt={`${stack}`} width={72} height={72} className="saturate-0 hover:saturate-100 duration-300" />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>

                <NavbarComp />
            </div>



        </>

    )

}