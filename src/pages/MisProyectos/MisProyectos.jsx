import "./misproyectos.css";
import Encabezado from "../../components/encabezado/Encabezado";
import Menufeed from "../../components/Menufeed/Menufeed";
import FeedDerecho from "../../components/feedDerecho/FeedDerecho";
import FeedMisProyectos from "../../components/feedMisProyectos/FeedMisProyectos";

export default function Feed() {
    return (
        <>
            <Encabezado />
            <div className="homeContainer">
                <Menufeed />
                <FeedMisProyectos/>
                <FeedDerecho/>

            </div>
        </>
    );
}
