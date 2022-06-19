import "./feed.css";
import Encabezado from "../../components/encabezado/Encabezado";
import Menufeed from "../../components/Menufeed/Menufeed";
import FeedDerecho from "../../components/feedDerecho/FeedDerecho";
import FeedCentral from "../../components/feedCentral/FeedCentral";
/*
import {SmartContractData} from "../../models/SmartContractData";
import {cargarWeb3, loadBlockchainData} from "../../ethereum/web3";
*/

export default function Feed() {
/*    let smartContractData = new SmartContractData()

    async function inicio() {
        await cargarWeb3(window.web3)
        await loadBlockchainData(window.web3, smartContractData)
    }

    window.addEventListener("pageshow", async () => {
        await inicio()
    })*/

    return (
        <>
            <Encabezado/>
            <div className="homeContainer">
                <Menufeed/>
                <FeedCentral/>
                <FeedDerecho/>
            </div>
        </>
    );
}
