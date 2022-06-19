export const postGeneric = async (url, model) => {

    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(model),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await resp.json();
    const statusCode = resp.status
    return {data, statusCode}
}
