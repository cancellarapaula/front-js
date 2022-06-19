import "./feedMisProyectos.css";

import * as React from "react";
import Post from "../post/Post";
import {useFetchMyPosts} from "../../hooks/useFetchMyPosts";



export default function FeedMisProyectos() {

    const { data:myPosts, loading } = useFetchMyPosts();
    let bool = false;
    if(Array.isArray(myPosts)){
        bool = true;
    }





    return (

        <div  >
            <div className="feedWrapperMisProyectos">

                <p className="misProyectos">Mis proyectos</p>
                { loading && <p className="loading">Loading...</p> }

                {bool &&
                    myPosts.map((p) => (

                        <Post key={p.id} post={p}/>

                    ))
                }


            </div>

        </div>


    );
}
