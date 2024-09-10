import { services } from "../../data/services";

export const Services = () => {

    return (
        <div className="bg-secondary-white flex flex-col items-center py-14 gap-10" id="our-services">
            <div>
                <h1 className="text-3xl font-extrabold tracking-wider">Layanan Kami</h1>
            </div>
            <div className="grid grid-cols-3 px-40 py-10 gap-10">
                
                { services.map (service => {
                    return (
                        <div key={service.title} className="flex flex-col gap-2 py-4 text-center w-72 px-2 items-center shadow-2xl">
                            <div className="overflow-hidden">
                                <img src={`./services-images/${service.image}`} alt={`${service.title}`} className="w-72 h-40 hover:scale-110 duration-200"/>
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">{service.title}</h2>
                                <p className="font-light text-sm">{service.sub_title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>

    )

}