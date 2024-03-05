import { defineStore } from "pinia";

interface login {
    userName: string,
    password: string
}

export const useAuthStore = defineStore('authStore', () => {
    const signIn = async (param: login) => {
        try {

            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        username: param.userName,
                        password: param.password
                    }
                )
            });

            if(!response.ok){
                throw new Error(`Failed Sign In : status: ${response.status}`);
                return false;              
            }

            const data = await response.json()
            if(data.token){
                const token = useCookie('token')
                token.value = data.token;
            }


        } 
        
        catch (error) {

        }



    }


    return {
        signIn
    }
})