export const getMyPost = async (id) => {


    const url = `http://localhost:8082/v1/gestion-proyectos/proyectos/propietario/${(id)}`;


    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await resp.json();
    const statusCode = resp.status
    return {data, statusCode}
    
}
