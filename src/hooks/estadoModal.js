import {useState, useCallback} from 'react'

const EstadoPopUp = () => {
    const [estado, cambiarEstado] = useState(false);

    const setTrue = useCallback(() => cambiarEstado(true), [])
    const setFalse = useCallback(() => cambiarEstado(false), [])

    return {estado, setTrue, setFalse}
}

export default EstadoPopUp