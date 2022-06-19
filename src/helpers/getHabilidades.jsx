
export const getHabilidades = async()  => {


    const url = 'http://localhost:8082/v1/gestion-proyectos/habilidades/todos';


    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await resp.json();


    return {data}
}
