<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { userStore } from '../stores/user';
	import { goto } from '$app/navigation';

	console.log('1')

	$: if (browser && !$userStore.isLoggedIn && $page.url.pathname!== '/login') {
		console.log('2')
		goto('/login')
	} else if (browser && $userStore.isLoggedIn && $page.url.pathname === '/login') {
        console.log(
            'we are running in the browser, signed in, and on the sign in page, we are going to the home page'
        )
        goto('/')
    }

</script>

<slot />
