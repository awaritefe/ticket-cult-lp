<template>
	<div id="contact-form" class="overflow-hidden bg-white py-8 sm:py-16">
		<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8"
			>
				<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
					<h2
						class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
					>
						Early days, <span class="text-primary bg-black">big plans.</span>
					</h2>
					<p class="mt-6 text-xl/8 text-gray-900">
						We're building the UK's fairest ticketing platform — not live just
						yet, but you can join the Ticket Cult list to stay in the loop.
					</p>
					<p class="mt-6 text-base/7 text-gray-700">
						Ticket Cult is on a mission to revolutionise the ticketing industry
						by creating a fairer, more transparent system for fans, artists,
						venues, and organisers. We're building something amazing. Join us on
						this journey and be the first to know when we launch!
					</p>
					<div class="mt-10 flex">
						<form
							class="w-full lg:col-span-5 lg:pt-2"
							@submit.prevent="onSubmit"
						>
							<div class="grid sm:flex gap-4 sm:gap-x-4">
								<div class="w-full flex gap-2 sm:gap-4">
									<label for="email-address" class="sr-only"
										>Email address</label
									>
									<input
										id="email-address"
										v-model="email"
										name="email"
										type="email"
										autocomplete="email"
										required=""
										class="w-full sm:w-auto sm:flex-2 rounded-md bg-gray-400/10 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-400/75 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-400 sm:text-sm/6"
										placeholder="Enter your email"
									/>
									<Menu as="div" class="relative">
										<MenuButton
											:class="[
												'inline-flex min-w-26 sm:w-auto h-full items-center justify-center gap-x-1.5 rounded-md  outline-1 -outline-offset-1 outline-black/10 px-3.5 py-2 text-sm focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-400 hover:bg-gray-50',
												role
													? 'text-gray-900 bg-gray-100/10'
													: 'text-gray-400 bg-gray-400/10',
											]"
										>
											{{ role || "I am a..." }}
											<ChevronDownIcon
												class="-mr-1 size-5 text-gray-400"
												aria-hidden="true"
											/>
										</MenuButton>

										<transition
											enter-active-class="transition ease-out duration-100"
											enter-from-class="transform opacity-0 scale-95"
											enter-to-class="transform scale-100"
											leave-active-class="transition ease-in duration-75"
											leave-from-class="transform scale-100"
											leave-to-class="transform opacity-0 scale-95"
										>
											<MenuItems
												class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5"
											>
												<div class="py-1">
													<MenuItem
														v-for="opt in roles"
														:key="opt"
														v-slot="{ active }"
													>
														<button
															type="button"
															:class="[
																active
																	? 'bg-gray-100 text-gray-900 outline-hidden'
																	: 'text-gray-700',
																'block w-full px-4 py-2 text-left text-sm',
															]"
															@click="role = opt"
														>
															{{ opt }}
														</button>
													</MenuItem>
												</div>
											</MenuItems>
										</transition>
									</Menu>
								</div>
								<!-- Honeypot field (hidden visually, but present in the DOM) -->
								<div
									style="
										position: absolute;
										left: -9999px;
										top: auto;
										width: 1px;
										height: 1px;
										overflow: hidden;
									"
								>
									<label>Leave this field empty</label>
									<input v-model="honeypot" autocomplete="off" />
								</div>
								<button
									type="submit"
									class="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-brandpink cursor-crosshair focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-60"
									:disabled="loading"
								>
									{{ loading ? "Submitting…" : "Subscribe" }}
								</button>
							</div>
							<p v-if="msg" class="mt-3 text-green-600">{{ msg }}</p>
							<p v-if="err" class="mt-3 text-red-600">{{ err }}</p>
						</form>
						<!-- <a
							href="#"
							class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Join our team
							<span aria-hidden="true">&rarr;</span>
						</a> -->
					</div>
				</div>
				<div
					class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
				>
					<div
						class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
					>
						<img
							src="/images/cta3.jpg"
							alt=""
							class="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
						/>
					</div>
					<div
						class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8"
					>
						<div
							class="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto"
						>
							<img
								src="/images/cta1.jpg"
								alt=""
								class="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
							/>
						</div>
						<div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
							<img
								src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
								alt=""
								class="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
							/>
						</div>
						<div
							class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
						>
							<img
								src="/images/cta2.jpg"
								alt=""
								class="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const email = ref("");
const role = ref("");
const loading = ref(false);
const msg = ref(null);
const err = ref(null);
const honeypot = ref("");

const roles = [
	"Fan",
	"Venue",
	"Event Organiser",
	"Artist",
	"Festival",
	"Potential Investor",
];

// Prefer runtime config. Set NUXT_PUBLIC_APP_SCRIPT_URL in your .env
const runtime = useRuntimeConfig();
const APPS_SCRIPT_URL =
	runtime?.public?.appScriptUrl ||
	"https://script.google.com/macros/s/AKfycbw-twTEhni46l1J34YRVO56xe2AXYxMNIU2edaDbcLRMtBRKIgxrYE0PPWzxjtQkvki/exec";

if (!APPS_SCRIPT_URL.startsWith("http")) {
	console.error("Invalid APPS_SCRIPT_URL:", APPS_SCRIPT_URL);
}

const onSubmit = async () => {
	msg.value = null;
	err.value = null;

	const value = email.value.trim();
	const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
	if (!isEmail) {
		err.value = "Please enter a valid email.";
		return;
	}

	// Honeypot check: if filled, assume bot and abort
	if (honeypot.value) {
		err.value = "Bot detected.";
		return;
	}

	// Require a role selection
	if (!role.value) {
		err.value = "Please choose your role.";
		return;
	}

	loading.value = true;
	try {
		const body = new URLSearchParams();
		body.set("email", value);
		body.set("role", role.value);
		body.set("ua", navigator.userAgent);
		body.set("honeypot", honeypot.value);

		// TEMP: log payload
		console.log("sending", Object.fromEntries(body));

		const res = await fetch(APPS_SCRIPT_URL, { method: "POST", body });
		const data = await res.json();
		if (!data?.ok) throw new Error(data?.error || "Failed to subscribe");

		msg.value = "You're in! Check your inbox.";
		email.value = "";
		role.value = "";
	} catch (e) {
		err.value = e?.message || "Something went wrong";
	} finally {
		loading.value = false;
	}
};
</script>
