<script setup>
const props = defineProps({
	variant: {
		type: String,
		default: "default",
		validator: (value) => ["default", "white", "auto"].includes(value),
	},
	size: {
		type: String,
		default: "default", // small, default, large
		validator: (value) => ["small", "default", "large"].includes(value),
	},
	href: {
		type: String,
		default: "/",
	},
});

const sizeClasses = computed(() => {
	switch (props.size) {
		case "small":
			return "h-6 sm:h-8 w-auto";
		case "large":
			return "h-10 sm:h-16 w-auto";
		default:
			return "h-8 sm:h-12 w-auto";
	}
});
</script>

<!-- Logo.vue - Updated -->
<template>
	<ClientOnly>
		<NuxtLink :to="href" class="flex items-center">
			<!-- Your existing image logic -->
			<template v-if="variant === 'white'">
				<img
					:class="sizeClasses"
					src="/images/logo-white.svg"
					alt="Ticket Cult Logo"
				/>
			</template>
			<template v-else>
				<img
					:class="sizeClasses"
					class="hidden dark:block"
					src="/images/logo-white.svg"
					alt="Ticket Cult Logo"
				/>
				<img
					:class="sizeClasses"
					class="block dark:hidden"
					src="/images/logo.svg"
					alt="Ticket Cult Logo"
				/>
			</template>
		</NuxtLink>

		<template #fallback>
			<div class="flex items-center">
				<img
					v-if="variant === 'white'"
					:class="sizeClasses"
					src="/images/logo-white.svg"
					alt="Ticket Cult Logo"
				/>
				<template v-else>
					<img
						:class="sizeClasses"
						class="hidden dark:block"
						src="/images/logo-white.svg"
						alt="Ticket Cult Logo"
					/>
					<img
						:class="sizeClasses"
						class="block dark:hidden"
						src="/images/logo.svg"
						alt="Ticket Cult Logo"
					/>
				</template>
			</div>
		</template>
	</ClientOnly>
</template>
