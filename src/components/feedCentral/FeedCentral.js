import "./feedCentral.css";
import Publicar from "../publicar/Publicar";
import Post from "../post/Post";
import * as React from "react";


export default function FeedCentral() {

    return (
        <div className="feedCentral">
            <div className="feedWrapper">
                <Publicar/>

            </div>

        </div>
    );
}
