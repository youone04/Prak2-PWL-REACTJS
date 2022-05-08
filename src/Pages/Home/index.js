import Helmet from "react-helmet";
import Footer from "../../Components/Footer";
import NavbarTop from "../../Components/Navbar";
import Cards from "./Cards";
import Keahlian from "./Keahlian";
import Project from "./Project";

const Home = () => {
    return(
        <>
        <Helmet>
            <title>Yudi Gunawan  - Home</title>
            <meta name="description" content="Saya Sangat termotivasi untuk terus belajar dan mengasah kemampuan dalam dunia pemrograman agar dapat tumbuh secara profesional. Saya yakin dengan kemampuan saya dapat menghasilkan ide yang menarik dalam membuat sebuah aplikasi"/>
            <meta name="keywords" content="yudi gunawan - Programmer lampung , indonesia" />
        </Helmet>
       <div>
       <NavbarTop/>
        <Cards/>
        <Keahlian/>
        <Project/>
        <Footer/>
       </div>
        </>
    )
}
export default Home;