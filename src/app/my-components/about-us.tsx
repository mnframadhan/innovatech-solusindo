import { HoverEffect } from "@/components/ui/card-hover-effect"

export const values = [
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

export const AboutUs = () => {

    return (
      <>
        <div
            className="flex flex-col justify-center items-center pt-10 w-full bg-gradient-to-r from-[#0762c8] to-[#edf1ff] relative p-10 gap-10 font-[Plus Jakarta Sans]"
        >
            <div className="max-w-[15rem] md:w-1/4 z-50">
                <div className="relative flex flex-col gap-3 px-4">
                    <img src="logo.png" alt="logo" className="bg-white rounded-full p-4" />
                </div>
            </div>

            <div className="w-full md:w-1/2 z-50 font-[Plus Jakarta Sans]">
                <div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white mb-2">Mengapa Memilih Kami?</h2>
                        <p className="text-md text-slate-100">Kami memberikan solusi secara kolaboratif, komunikatif, dan <span className="italic">tech-data-driven</span>.</p>
                    </div>
                    <div className="">
                        <div className="mx-auto w-full">
                            <HoverEffect items={values} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 opacity-30">
              <img src="mirrored-logo.png" alt="mirrored-logo" />
            </div>
        </div>
            </>
    )

}