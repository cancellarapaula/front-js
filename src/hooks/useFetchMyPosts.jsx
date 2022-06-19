import {useContext, useState} from "react";
import {getMyPost} from "../helpers/getMyPost";
import {UserIdContext} from "../context/UserIdContext";
import {StatusCodes} from "http-status-codes";


export const useFetchMyPosts = async () => {
    const {userId} = useContext(UserIdContext);
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    let {posts, statusCode} = await getMyPost(userId)

    if (statusCode === StatusCodes.OK) {

        setState({

            data: posts.reverse(),
            loading: false

        })
    } else {
        alert('no hay proyectos asociados')
    }


    return state;


}


