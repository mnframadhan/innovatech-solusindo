export const MainAdvantages = () => {

    return (
        <div className="w-full px-40 flex gap-20 py-20 bg-secondary-white">
            <div className="flex gap-4">
                <div className="w-3/4 px-20 flex flex-col gap-4">
                    <h2 className=" text-3xl tracking-wider font-extrabold">Lightweight Applications</h2>
                    <div className="flex flex-col text-[15px] gap-2 pr-20">
                        <p className="font-light text-justify">Keahlian kami adalah membangun aplikasi yang ringan dan cepat, efisien, dan minim resource. Aplikasi dapat di-load secara cepat dan performa yang smooth, memastikan user experience yang unggul di semua jenis perangkat yang digunakan.</p>
                        <p className="font-light text-justify">Kami memastikan aplikasi tidak hanya melakukan performa yang unggul tetapi juga aksesibel dan efisien. Mengantarkan user experience yang baik di segala perangkat. Komitmen efisiensi dan kecepatan aplikasi, mengantarkan kami kepada kepercayaan untuk setiap proyek yang kami tangani.</p>
                    </div>
                </div>
                <div className=" max-w-96 bg-blue-200 shadow-2xl">
                    <img src="/modern-app.jpg" alt="" />
                </div>
            </div>
        </div>
    )

}