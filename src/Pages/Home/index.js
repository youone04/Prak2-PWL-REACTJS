import Footer from "../../Components/Footer";
import NavbarTop from "../../Components/Navbar";
import Cards from "./Cards";
import Keahlian from "./Keahlian";
import Project from "./Project";

const Home = () => {
    return(
        <>
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