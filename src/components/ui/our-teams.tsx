import { coFounders } from "../../data/co-founders"

export const Teams = () => {

    return (

        <div className="w-full  bg-gradient-to-b from-primary-blue to-secondary-blue flex-col text-center" id="our-teams">
            <div className="h-2 bg-queternary-blue" />
            <div className="h-2 bg-tertiary-blue" />

            <h2 className="text-secondary-white text-3xl tracking-wider font-extrabold px-40 py-10 flex flex-col">Co Founders</h2>

            <div className="px-40 py-10 flex gap-20 items-center justify-center ">

                {coFounders.map((cf) => {

                    return (

                        <div className="flex flex-col gap-2 text-secondary-white ">
                            <div className="w-44 bg-secondary-white h-56">
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h1 className="font-light text-md">{cf.name}</h1>
                                <p className="font-extralight text-[10px]">{cf.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>



            <div className="h-2 bg-tertiary-blue" />
            <div className="h-2 bg-queternary-blue" />
        </div>

    )

}