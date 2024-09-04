import { FeaturedServices } from "../../data/featured-services"

export const FeaturedService = () => {

    return (
        <div className="w-full bg-gradient-to-b from-primary-blue to-secondary-blue flex-col">
            <div className="h-2 bg-queternary-blue" />
            <div className="h-2 bg-tertiary-blue" />

            <h2 className="text-secondary-white text-3xl tracking-wider font-extrabold px-40 py-10 flex flex-col">Featured Service</h2>
            <div className="flex px-40 gap-20">
                <div className="bg-slate-700 w-1/2 shadow-xl max-w-[400px] h-[500px] overflow-hidden ">
                    <img src="/featured-image.jpg" alt="featured-image" className="w-[480px] h-[500px]" />
                </div>
                <div className=" w-1/2 px-5 flex flex-col gap-4 ">
                    <h2 className="font-extrabold text-secondary-white text-2xl">Web Application</h2>
                    <div className="flex flex-col gap-4">
                        {FeaturedServices.map(fs => {
                            return (
                                <div>
                                    <h3 className="text-white text-lg font-semibold">{fs.title}</h3>
                                    <p className="text-secondary-white font-light text-sm text-justify">{fs.sub_title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="h-2 bg-tertiary-blue mt-10" />
            <div className="h-2 bg-queternary-blue" />
        </div>

    )

}