import React, {useState} from "react";
import "./post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function Post() {


    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopIzq">
                        <img
                            className="postProfileImg"
                            src="/images/usuarios/user1.jpg" alt="foto perfil"/>

                        <span className="postNombre">
                        <p>Paula Cancellara</p>
            </span>
                        <span className="postFecha">31/05/2022</span>
                    </div>
                    <div className="postTopDerecha">

                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText"></span>
                    <p> aca va lo que se cargue en la publicación</p>
                </div>
                <div className="postBottom">
                    <div className="postBottomIzq">
                        <ThumbUpIcon className="likeIcon" htmlColor="#3F7FD4"/>
                        <FavoriteIcon className="likeIcon" htmlColor="#E85461" />
                    </div>

                </div>
            </div>
        </div>

    );
}
