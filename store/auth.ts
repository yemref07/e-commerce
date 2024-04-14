import { defineStore } from "pinia";

interface login {
    username: string,
    password: string
}

type Gender = "male" | "female" | "other";


export const useAuthStore = defineStore('authStore', () => {
    const isAuthenticated = ref(false)
    const token = useCookie('token', { maxAge: 3600, domain: "https://dumy-commercee.netlify.app/", sameSite: 'lax' })
    const errorMsg = ref("")
    const userData = ref();

    const signIn = async (param: login) => {
        try {

            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        username: param.username,
                        password: param.password
                    }
                )
            });

            const data = await response.json()

            //In some cases event can response status code can be ok but we can get an error like invalid credentials with status code:400
            if (!response.ok) {
                errorMsg.value = data.message;
                return false;
            }

            if (data?.token) {
                token.value = data.token;
                isAuthenticated.value = true;
                userData.value = data;
                return true;
            }

            else {
                throw new Error(`Token in response is null or undefined`);
            }


        }

        catch (error: any) {
            console.error(`Something wrong about login ${error}`)
            return false;
        }



    }

    const logout = () => {
        token.value = null;
        isAuthenticated.value = false;
    }

    //İf token is already exist and session is not expire get userData with this token
    const getAuthUser = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.value}`,
                }
            });

            const data = await response.json()
            userData.value = data;

        }

        catch (error: any) {
            if (error?.message.includes('expired')) {
                logout()
            }
            console.error(error)
        }

    }


    return {
        signIn,
        logout,
        isAuthenticated,
        userData,
        errorMsg,
        getAuthUser
    }
}, {
    persist: {
        paths: ['isAuthenticated'],
    }
})