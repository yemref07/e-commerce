import { defineStore } from "pinia";

interface login {
    username: string,
    password: string
}

type Gender = "male" | "female" | "other";

type user = {
    readonly id:number,
    email: string,
    firstName: string,
    lastName: string,
    gender?: Gender,
    image?: string,
    token:string,
}

export const useAuthStore = defineStore('authStore', () => {
    const isAuthenticated = ref(false)
    const token = useCookie('token', { maxAge: 60000, domain: "localhost", sameSite: 'lax' })
    const errorMsg = ref("")
    const userData = ref<user>();

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

            //In some cases event can response status can be ok but we can get an error like invalid credentials with status code:400
            if (!response.ok) {
                console.log(data)
                errorMsg.value = data.message;
                return false;
            }

            if (data?.token) {
                token.value = data.token;
                isAuthenticated.value = true;
                userData.value = data;
                console.log('userData:',userData.value)
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


    return {
        signIn,
        logout,
        isAuthenticated,
        userData,
        errorMsg
    }
})