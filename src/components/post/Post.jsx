import React from "react";
import "./post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Post({post}) {
    return (
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
                        <span className="postFecha">{post.fechaCreacion}</span>
                    </div>
                    <div className="postTopDerecha">

                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText"></span>
                    <p className="titulo"> Nombre del proyecto</p>
                    <p className="informacion"> {post.nombre}</p>
                    <p className="titulo"> Descripción del proyecto </p>
                    <p className="informacion">{post.descripcion}</p>
                    <p className="titulo"> Vacantes disponibles </p>
                    {/*<p className="informacion"> {post.vacantes}</p>*/}
                    <p className="titulo"> Monto mínimo de inversión </p>
                    <p className="informacion">{post.monto_minimo_inversion} </p>
                </div>
                <div className="postBottom">
                    <div className="postBottomIzq">
                        <ThumbUpIcon className="likeIcon" htmlColor="#3F7FD4"/>
                        <FavoriteIcon className="likeIcon" htmlColor="#E85461"/>
                    </div>

                </div>
            </div>
        </div>

    );
}
