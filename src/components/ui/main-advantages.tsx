export const MainAdvantages = () => {

    return (
        <div className="w-full px-40 flex gap-20 py-20 bg-secondary-white">
            <div className="w-1/2 flex flex-col gap-4">
            <h2 className=" text-3xl tracking-wider font-extrabold">Lightweight Applications</h2>
                <div className="flex flex-col text-[15px] gap-2">
                    <p className="font-light text-justify">Our expertise is in developing lightweight applications that are fast, efficient, and resource-friendly. These applications offer quick load times and smooth performance, ensuring an excellent user experience across all devices.</p>
                    <p className="font-light text-justify">we ensure that your software is not only high-performing but also accessible and efficient, delivering a superior user experience across all devices and networks. This commitment to efficiency sets us apart and drives the success of every project we undertake</p>
                </div>
            </div>
            <div className="w-1/2 bg-blue-200 shadow-2xl">
                <img src="/modern-app.jpg" alt="" />
            </div>
        </div>
    )

}