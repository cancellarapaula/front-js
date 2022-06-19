import "./feedCentral.css";
import Publicar from "../publicar/Publicar";
import * as React from "react";
import Post from "../post/Post";
import {useFetchPosts} from "../../hooks/useFetchPosts";


export default function FeedCentral() {

    const {data: posts, loading} = useFetchPosts();

    return (
        <div>
            <div className="feedWrapper">
                {<Publicar/>}

                {loading && <p className="loading">Loading...</p>}
                {posts.map((p) => (

                    <Post key={p.id} post={p}/>

                ))
                }

            </div>

        </div>
    );
}
