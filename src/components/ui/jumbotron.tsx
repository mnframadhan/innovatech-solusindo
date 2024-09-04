export const Jumbotron = () => {
    return (

        <div className="bg-gradient-to-b from-primary-blue to-secondary-blue h-screen flex flex-col items-center pt-16 px-32 text-center gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-secondary-white text-5xl font-extrabold px-20 leading-snug">Software Development & Enterprise Apps Integration.</h1>
                
            </div>
            <div className="text-slate-300 px-48"> 
                <p>We assist in the digitalization of business processes collaboratively for micro, small, and medium enterprises, corporations, and educational institutions.</p>
            </div>
        <div className="w-full h-full  mt-4 bg-[#030303] flex items-end justify-center">
            <img src="/cover.jpg" alt="robot" className="max-h-[320px]" />
        </div>
        </div>

    )
}

// [#030303]