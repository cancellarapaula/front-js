import { useState, useEffect } from 'react'
import {getPosts} from "../helpers/getPosts";


export const useFetchPosts = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getPosts()
            .then( posts => {

                setState({

                    data: posts.reverse(),
                    loading: false

                });

            })

    }, [])




    return state; // { data:[], loading: true };


}


