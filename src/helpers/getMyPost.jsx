
export const getMyPost = async(id)  => {


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

    // const myPosts = data.map( myPosts => {
    //     return {
    //
    //         id: myPosts.id,
    //         nombre: myPosts.nombre,
    //         descripcion: myPosts.descripcion,
    //         vacantes_abiertas_colaboradores: myPosts.vacantes_abiertas_colaboradores,
    //         estado: myPosts.estado,
    //         monto_minimo_inversion: myPosts.monto_minimo_inversion
    //
    //     }
    // })
    // //console.log(myPosts);
    // const statusCode = data.status;
    // console.log(statusCode);
    // return {myPosts, statusCode}


}
