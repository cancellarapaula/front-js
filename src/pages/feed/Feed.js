import "./feed.css";
import Encabezado from "../../components/encabezado/Encabezado";
import Menufeed from "../../components/Menufeed/Menufeed";
import FeedDerecho from "../../components/feedDerecho/FeedDerecho";
import FeedCentral from "../../components/feedCentral/FeedCentral";

export default function Feed() {
    return (
        <>
            <Encabezado />
            <div className="homeContainer">
                <Menufeed />
                <FeedCentral/>
                <FeedDerecho/>
            </div>
        </>
    );
}
