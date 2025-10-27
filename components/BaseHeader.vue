<template>
	<div ref="sentinel" />
	<header
		:class="[
			'fixed top-3 left-0 right-0 z-50 transition-all duration-300',
			scrolled
				? 'mx-auto p-6 pl-8 max-w-4xl bg-white/80 backdrop-blur-md shadow-md rounded-full ring-1 ring-black/5'
				: 'p-6 lg:px-8',
		]"
	>
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between"
			aria-label="Global"
		>
			<div class="flex flex-1">
				<div class="hidden lg:flex lg:gap-x-12">
					<a
						v-for="item in navigation"
						:key="item.name"
						:href="item.href"
						class="text-sm/6 font-semibold text-gray-900"
						>{{ item.name }}</a
					>
				</div>
				<div class="flex lg:hidden">
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						@click="mobileMenuOpen = true"
					>
						<span class="sr-only">Open main menu</span>
						<Bars3Icon class="size-6" aria-hidden="true" />
					</button>
				</div>
			</div>
			<a href="#" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<Logo class="cursor-crosshair" :size="scrolled ? 'small' : ''" />
			</a>
			<div class="hidden sm:flex flex-1 justify-end">
				<a
					href="#"
					class="bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-brandpink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					:class="scrolled ? 'rounded-full' : 'rounded-md'"
					>Stay in the loop</a
				>
			</div>
		</nav>
		<Dialog
			class="lg:hidden"
			@close="mobileMenuOpen = false"
			:open="mobileMenuOpen"
		>
			<div class="fixed inset-0 z-50" />
			<DialogPanel
				class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-indigo-600 px-6 py-9"
			>
				<div class="flex items-center justify-between">
					<div class="flex flex-1">
						<button
							type="button"
							class="-m-2.5 rounded-md p-2.5 text-gray-100"
							@click="mobileMenuOpen = false"
						>
							<span class="sr-only">Close menu</span>
							<XMarkIcon class="size-6" aria-hidden="true" />
						</button>
					</div>
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<Logo variant="white" />
					</a>
					<div class="hidden sm:flex flex-1 justify-end">
						<a
							href="#"
							class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-brandpink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Stay in the loop</a
						>
					</div>
				</div>
				<div class="mt-6 space-y-2 border-t-2 border-gray-200 pt-4">
					<a
						v-for="item in navigation"
						:key="item.name"
						:href="item.href"
						class="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-right font-semibold text-gray-100 hover:bg-gray-50"
						>{{ item.name }}</a
					>
				</div>
			</DialogPanel>
		</Dialog>
	</header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
	{ name: "About us", href: "/about" },
	{ name: "FAQs", href: "/faq" },
];

const mobileMenuOpen = ref(false);

const scrolled = ref(false);
const sentinel = ref(null);

onMounted(() => {
	const observer = new IntersectionObserver(
		([entry]) => {
			scrolled.value = !entry.isIntersecting;
		},
		{ threshold: 0.1 }
	);
	observer.observe(sentinel.value);
	onUnmounted(() => observer.disconnect());
});
</script>
