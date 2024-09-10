import { ExternalLink } from "lucide-react"

export const Footer = () => {

    return (

        <div className="w-full bg-gradient-to-b from-primary-blue to-secondary-blue flex-col text-center">
            <div>
                <div className="h-2 bg-queternary-blue" />
                <div className="h-2 bg-tertiary-blue" />
            </div>

            <div className="flex justify-between px-20 py-10 pb-5 relative">
                <div className="w-72 text-secondary-white text-left flex flex-col gap-2">
                    <h1 className="text-2xl font-extrabold">Innovatech Solusindo</h1>
                    <p className="text-sm font-light">Jl. Griya Kebraon Barat XVI Ci NO 3, RT.01/RW.03, Kebraon, Kec. Karangpilang, Surabaya, Jawa Timur 60222</p>
                </div>
                <div className="w-44 flex flex-col gap-4 items-center">
                    <h3 className="font-semibold text-secondary-white">Hubungi Kami</h3>
                    <div className="flex flex-col gap-2">
                        <a href="https://wa.me/6285732398679/?text=Halo, admin. Saya ingin berkonsultasi terkait layanan Innovatech Solusindo." 
                            className="font-light text-nowrap text-sm flex items-center bg-secondary-white text-black py-1 text-center justify-center w-32 rounded-md" target="_blank">WhatsApp &nbsp;&nbsp; <ExternalLink size={14}/></a>
                        <a href="https://ig.me/m/innovatechsolusindo/" 
                            className="font-light text-nowrap text-sm flex items-center bg-secondary-white text-black py-1 text-center justify-center w-32 rounded-md" target="_blank">Instagram &nbsp;&nbsp; <ExternalLink size={14}/></a>
                    </div>
                    
                </div>
                <div className="w-72 flex items-end justify-center flex-col text-secondary-white">
                    <img src="/mirrored-logo.png" alt="logo" className="w-44 opacity-70" />
                    <p>Innovatech Solusindo</p>
                </div>
            </div>

        </div>

    )
}
