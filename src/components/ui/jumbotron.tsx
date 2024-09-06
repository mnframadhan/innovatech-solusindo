export const Jumbotron = () => {
    return (

        <div className="relative bg-gradient-to-b from-primary-blue to-secondary-blue h-[700px] flex flex-col items-center pt-44 px-24 text-center gap-4">
            <div className="absolute left-2 z-0 bottom-0 opacity-30">
                <img src="logo-background.png" width={600} alt="logo" />
            </div>

            <div className="flex flex-col gap-20 z-20">
                <div className="flex flex-col leading-normal ">
                    <h1 className="text-secondary-white text-9xl font-extrabold px-20 uppercase tracking-widest">Innovatech</h1>
                    <h2 className="text-secondary-white uppercase text-5xl">Solusindo</h2>
                </div>
                <div className="text-slate-300 text-3xl px-24"> 
                    <p>Kami membantu proses digitalisasi untuk usaha mikro, kecil, menengah, korporasi, hingga lembaga pendidikan.</p>
                </div>
            </div>
            <div className="h-2 bg-queternary-blue z-50" />
            <div className="h-2 bg-tertiary-blue z-50" />
        </div>

    )
}