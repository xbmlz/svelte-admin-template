import { writable } from "svelte/store"

interface UserState {
    isLoggedIn: boolean,
}

export const userStore = writable<UserState>({
    isLoggedIn: false
})