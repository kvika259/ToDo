export const login = async (user, navigate) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_URL}auth/login`, {
            method: 'POST',
            headers:
            {
                accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })
        const userInfo = await response.json()
        localStorage.setItem('token', userInfo.access_token)
        navigate("/MyTask")

    } catch (error) { }
}

export const registr = async (user, navigate) => {
        try {
                const response = await fetch(`${import.meta.env.VITE_URL}auth/register`, {
                    method: 'POST',
                    headers:
                    {
                        accept: 'application/json',
                        "Content-Type": 'application/json'
                    },
                body:JSON.stringify(user)
            })
            const userInfo = await response.json()
            localStorage.setItem('token',userInfo.access_token)
            navigate("/MyTask")
        }catch (error) {}
    }