import { services } from "../../data/services";

export const Services = () => {

    return (
        <div className="bg-secondary-white flex flex-col items-center py-14 gap-10" id="our-services">
            <div>
                <h1 className="text-3xl font-extrabold tracking-wider">Our Services</h1>
            </div>
            <div className="grid grid-cols-3 px-40 py-10 gap-10">

                { services.map (service => {
                    return (
                        <div key={service.title} className="flex flex-col  py-4 text-center w-72 px-2 items-center h-fit">
                            <h2 className="font-semibold text-lg">{service.title}</h2>
                            <p className="font-light text-sm">{service.sub_title}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>

    )

}