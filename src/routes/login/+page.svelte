<script lang="ts">
	import { Card, Label, Input, Checkbox, A, Button } from 'flowbite-svelte';

	export let site = {
		name: 'Gin Svelte Template',
		img: '/favicon.png',
		link: '/',
		imgAlt: 'Gin Svelte Template'
	};
</script>

<main class="bg-gray-50 dark:bg-gray-900 w-full">
	<div
		class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
	>
		<a
			href={site.link}
			class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
		>
			<img src={site.img} class="mr-4 h-11" alt={site.imgAlt} />
			<span>{site.name}</span>
		</a>

		<!-- Card -->
		<Card class="w-full" size="md" border={false}>
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in to platform</h1>
			<form class="mt-8 space-y-6" on:submit|preventDefault>
				<div>
					<Label for="email" class="mb-2 dark:text-white">Your email</Label>
					<Input
						type="email"
						name="email"
						id="email"
						placeholder="root"
						required
						class="border outline-none dark:border-gray-600 dark:bg-gray-700"
					/>
				</div>
				<div>
					<Label for="password" class="mb-2 dark:text-white">Your password</Label>
					<Input
						type="password"
						name="password"
						id="password"
						placeholder="123"
						required
						class="border outline-none dark:border-gray-600 dark:bg-gray-700"
					/>
				</div>

				<div class="flex items-start">
					<Checkbox class="accent-primary-600" name="remember">Remember me</Checkbox>
					<A href="" aClass="ml-auto text-sm">Lost Password?</A>
				</div>

				<Button type="submit" size="lg">Login to your account</Button>

				<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
					Not registered? <A href="/register">Create account</A>
				</div>
			</form>
		</Card>
	</div>
</main>
