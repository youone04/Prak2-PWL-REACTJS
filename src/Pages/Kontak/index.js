import Footer from "../../Components/Footer";
import NavbarTop from "../../Components/Navbar";
import SectionKontak from "./SectionKontak";
import Helmet from "react-helmet";

const Kontak = () => {
    return(
        <>
         <Helmet>
            <title>Yudi Gunawan  - Kontak</title>
            <meta name="description" content="Saya Sangat termotivasi untuk terus belajar dan mengasah kemampuan dalam dunia pemrograman agar dapat tumbuh secara profesional. Saya yakin dengan kemampuan saya dapat menghasilkan ide yang menarik dalam membuat sebuah aplikasi"/>
            <meta name="keywords" content="yudi gunawan - Kontak" />
        </Helmet>
        <NavbarTop/>
        <SectionKontak/>
        <Footer/>
        </>
    )
}
export default Kontak;