import "./menufeed.css";
import {Home} from "@material-ui/icons";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import {useNavigate} from "react-router-dom";

import React from "react";



export default function Menufeed() {
    let navigate = useNavigate();

    return (
        <div className="menufeed">
            <div className="menufeedWrapper">
                <ul className="menufeedList">
                    <li className="menufeedListItem">
                        <Home className="menufeedIcon" />
                        <button className="menufeedListItemText"
                                onClick={(e) => {navigate("/feed", {replace: true});}}>Noticias</button>
                    </li>
                    <li className="menufeedListItem">
                        <BeenhereIcon className="menufeedIcon" />
                        <button id="btn" className="menufeedListItemText">Postulaciones</button>
                    </li>
                    <li className="menufeedListItem">
                        <BookmarkIcon className="menufeedIcon" />
                        <button className="menufeedListItemText"
                                onClick={(e) => {navigate("/misproyectos", {replace: true});}}>Mis proyectos</button>
                    </li>


                </ul>

                <hr className="sidebarHr" />

            </div>
        </div>


    );
}
