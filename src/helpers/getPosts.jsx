


export const getPosts = async()  => {


    const url = 'http://localhost:8082/v1/gestion-proyectos/proyectos/todos';
    const resp = await fetch(url);
    const data = await resp.json();


    const posts = data.map( post => {
        return {

            id: post.id,
            nombre: post.nombre,
            descripcion: post.descripcion,
            vacantes_abiertas_colaboradores: post.vacantes_abiertas_colaboradores,
            estado: post.estado,
            monto_minimo_inversion: post.monto_minimo_inversion
        }
    })
    //console.log(posts);

    return posts;


}
