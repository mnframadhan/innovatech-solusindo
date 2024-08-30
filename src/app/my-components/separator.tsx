import { url } from "inspector"
import Image from "next/image"



export const Separator = ({ title = "title", id = "id" }) => {

    const url = "/circuit.png"

    return (

        <div className="h-[5rem] md:h-[8rem] uppercase tracking-widest font-bold md:text-3xl bg-slate-100 flex justify-center items-center font-[Handjet] relative bg-repeat bg-[url('/circuit.png')]  bg-opacity-80" style={{backgroundImage: `url(${url})`, backgroundSize: '200px'}}  id={`${id}`}>
            <h1 className="text-lg md:text-2xl text-slate-900 bg-slate-300 px-4">&#9472;&#9472;&nbsp;&nbsp;{title}&nbsp;&nbsp;&#9472;&#9472;</h1>
        </div>

    )

}