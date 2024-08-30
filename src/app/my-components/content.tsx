import { LayananKami } from "./layanan-kami";
import { Footer } from "./footer";
import { Separator } from "./separator";
import { AboutUs } from "./about-us";
import { CoFounder } from "./co-founders";
  

export const Content = () => {
    return (

        <>
            <Separator title="Layanan Kami" id="layanan-kami"/>
            <LayananKami />

            <Separator title="Siapa Kami?" id="tentang-kami"/>
            <AboutUs />

            <Separator title="Co-Founders"/>
            <CoFounder />

            <Footer />
        </>
    );
};
