import { useState, useEffect } from 'react'
import {getHabilidades} from "../helpers/getHabilidades";


export const useFetchHabilidades = () => {

    const [state, setState] = useState({
        data: []

    });

    useEffect(() => {

        getHabilidades()
            .then(habilidades => {

                setState({

                    data: habilidades.data


                });

            })

    }, [])

    return state;
}
