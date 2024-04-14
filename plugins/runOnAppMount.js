import { useAuthStore } from '~/store/auth'

export default defineNuxtPlugin((nuxtApp) => {
    const authStore = useAuthStore()
    const token = useCookie('token')
    const { getAuthUser } = authStore
    const { userData } = storeToRefs(authStore)

    nuxtApp.hook('app:mounted', async (context) => {
        if (token.value && !userData.value) {
            await getAuthUser()
        }
    })
})