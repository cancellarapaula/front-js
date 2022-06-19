export const getUsers = async () => {


    const url = 'http://localhost:8080/v1/gestion-emprendedor/login';
    const resp = await fetch(url);
    const data = await resp.json();


    const userId = data.map(user => {
        return {

            id: userId.id

        }
    })


    return posts;


}
