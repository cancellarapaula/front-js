export const getGeneric = async (url) => {

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
