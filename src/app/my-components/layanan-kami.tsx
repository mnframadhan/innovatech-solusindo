import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

const projects = [
    {
        href: "/",
        title: "Company Profile Website",
        description: "Buat profile perusahaan yang lebih menarik dan mudah diakses.",
        image: "/website.jpg",
    },
    {
        href: "/",
        title: "Web Application",
        description: "Aplikasi berbasis web dengan fitur custom sesuai permintaan client",
        image: "/web-application.jpg",
    },
    {
        href: "/",
        title: "Mobile / Desktop Apps",
        description: "Integrasi antar perangkat agar aplikasi lebih aksesibel.",
        image: "/mobile and desktop.jpg",
    },
    {
        href: "/",
        title: "Data Science & Analytics",
        description: "Ungkap insight penting dari data yang kompleks, prediksi masa depan.",
        image: "/data-science.jpg",
    },
    {
        href: "/",
        title: "Web Scraping",
        description: "Ekstrak konten dan data dari website dengan automatisasi berkala.",
        image: "/web-scraping.png",
    },
    {
        href: "/",
        title: "Natural Language Processing",
        description: "Ekstrak informasi penting dari text jurnal, buku, rekaman, atau suara.",
        image: "/nlp.webp",
    }
]


export const LayananKami = () => {
    return (
        <div className="py-10 w-full bg-gradient-to-r from-[#0762c8] to-[#edf1ff]">

            <ScrollArea className="rounded-md w-full text-center">
                <ScrollBar orientation="horizontal" className="bg-slate-500 opacity-40 z-auto" />
                <div className="flex">
                    {projects.map((project) => {

                        return (
                            <div className="px-2" key={project.title}>
                                <Link href={`${project.href}`}>
                                    <div className="overflow-hidden rounded-xl w-72 h-64 bg-black py-4 px-2">
                                        <div className="flex justify-center items-center flex-col px-2">
                                            <h3
                                                className="text-xl text-nowrap font-bold text-slate-100 font-[Handjet] tracking-widest">
                                                {project.title}
                                            </h3>
                                            <p className="text-[10px] text-slate-300">{project.description}</p>
                                        </div>
                                        <div className="flex flex-1 overflow-hidden p-2 h-40 object-cover">
                                            <img src={`${project.image}`} alt={`${project.title}`} className="overflow-hidden w-full h-full"/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </ScrollArea>
        </div>
    );
}