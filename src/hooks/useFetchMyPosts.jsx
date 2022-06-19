import {useContext, useState} from "react";
import {getMyPost} from "../helpers/getMyPost";
import {UserIdContext} from "../context/UserIdContext";
import {StatusCodes} from "http-status-codes";


export const useFetchMyPosts = async () => {
    const {userId}= useContext(UserIdContext);
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //let idDueño = 1;

    const idDueño = userId;
    console.log(idDueño)


      let {posts, statusCode} = await getMyPost(userId)

                if (statusCode === StatusCodes.OK) {
                    console.log(statusCode)

                    setState({

                        data: posts.reverse(),
                        loading: false

                    })
                } else {
                    console.log(statusCode)
                    alert('no hay proyectos asociados')
                }




    return state; // { data:[], loading: true };


}


