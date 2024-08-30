import Image from "next/image"

export const Separator = ({ title = "title", id = "id" }) => {

    return (

        <div className="z-30 h-[5rem] md:h-[8rem] uppercase tracking-widest font-bold md:text-3xl bg-slate-100 flex justify-center items-center font-[Handjet] relative" id={`${id}`}>
            <div className="absolute left-0 opacity-10">
                <div className="flex gap-1">
                    <Image src="/circuit.png" alt={`${title}circuit11`} width={150} height={150} />
                    <Image src="/circuit.png" alt={`${title}circuit12`} width={150} height={150} />
                    <Image src="/circuit.png" alt={`${title}circuit13`} width={150} height={150} />
                    <Image src="/circuit.png" alt={`${title}circuit14`} width={150} height={150} />
                    <Image src="/circuit.png" alt={`${title}circuit15`} width={150} height={150} />
                    
                </div>
            </div>

            <div className="absolute right-0 opacity-10">
                <div className="flex gap-1">
                    <Image src="/circuit.png" alt={`${title}circuit21`} width={150} height={150} />
                    <Image src="/circuit.png" alt={`${title}circuit22`} width={150} height={150} />
                    <Image src="/circuit.png" alt={`${title}circuit23`} width={150} height={150} />
                    <Image src="/circuit.png" alt={`${title}circuit24`} width={150} height={150} />
                    <Image src="/circuit.png" alt={`${title}circuit25`} width={150} height={150} />
                </div>
            </div>


            <h1 className="text-lg md:text-2xl text-slate-900">&#9472;&#9472;&nbsp;&nbsp;{title}&nbsp;&nbsp;&#9472;&#9472;</h1>
            

        </div>

    )

}