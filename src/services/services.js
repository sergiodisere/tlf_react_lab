export const getAuth = async (email, pass) => {
    const response = fetch('https://react-test.apps.ocp-epg.tid.es/auth', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": email,
            "password": pass
        }),
    }).then((res) => res.status === 200 ? res.json() : Promise.reject())
    return response;
}

export const getProfile = async () => {
    const response = fetch('https://react-test.apps.ocp-epg.tid.es/profile', {
        method: "GET",
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    }).then((res) => res.status === 200 ? res.json() : Promise.reject())
    return response;
}

export const getPosts = async () => {
    const response = fetch('https://react-test.apps.ocp-epg.tid.es/posts', {
        method: "GET",
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    }).then((res) => res.status === 200 ? res.json() : Promise.reject())
    return response;
}

export const getLike = async (idPost) => {
    const response = fetch('https://react-test.apps.ocp-epg.tid.es/posts/' + idPost + '/like', {
        method: "POST",
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    }).then((res) => res.status === 200 ? res.json() : Promise.reject())
    return response;
}

