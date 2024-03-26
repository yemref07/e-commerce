import { defineStore } from "pinia";


interface comment {
    msg: String,
    name: String,
    email: String
    rate: Number
}

export const useCommentStore = defineStore('commentStore', () => {
    const allComments = ref<comment[] | null>()
    const newComment = ref<comment>()
    const isDeleted = ref(false)

    const getAllComments = async (limit: number = 4, skip: number = 4) => {
        try {
            const response = await fetch(`https://dummyjson.com/comments?limit=${limit}&skip=${skip}&select=body,postId`)
            const data = await response.json();
            allComments.value = data.comments
        }
        catch (error: any) {
            console.error('Error Fetching Commets', error.message)
            throw error;
        }
    }

    const sendComment = async (comment: comment) => {
        try {
            const response = await fetch('https://dummyjson.com/comments/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    body: comment.msg,
                    postId: 3,
                    userId: 5,
                })
            })

            newComment.value = await response.json()
            if (newComment.value) {
                allComments.value?.unshift(newComment.value)
                return true
            }
        }

        catch (error: any) {
            console.error(error.message, 'New comment can not sent')
            return false
        }
    }

    const updateComment = async (id:number,comment:string) => {
        try {
            const response = await fetch(`https://dummyjson.com/comments/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    body: comment,
                })
            })

            const newComment = await response.json()
            return {newComment,id}

        } catch (error) {
            console.error(error,'comments can not delete')
        }
    }

    const deleteComment = async (id: number) => {
        try {
            const response = await fetch(`https://dummyjson.com/comments/${id}`, {
                method: 'DELETE',
            })
            const data = await response.json()
            isDeleted.value = data.isDeleted
        }

        catch (error: any) {
            console.error(error.message, "Comments can not delete")
        }

    }


    return {
        allComments,
        getAllComments,
        sendComment,
        updateComment,
        deleteComment
    }
})