<template>
	<div class="bg-white">
		<div class="relative isolate">
			<div
				class="mx-auto max-w-7xl px-6 pb-8 pt-28 lg:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8"
			>
				<div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
					<div class="flex">
						<div
							class="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							<span class="font-semibold text-indigo-600">Coming soon</span>
							<span class="h-4 w-px bg-gray-900/10" aria-hidden="true" />
							<a href="#" class="flex items-center gap-x-1">
								<span class="absolute inset-0" aria-hidden="true" />
								Find out more
								<ChevronRightIcon
									class="-mr-2 size-5 text-gray-400"
									aria-hidden="true"
								/>
							</a>
						</div>
					</div>
					<h1
						class="mt-5 md:mt-10 text-3xl md:text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl"
					>
						Fair ticketing. Real fans.
						<span class="text-primary bg-black whitespace-nowrap"
							>No bullsht.*</span
						>
					</h1>
					<p
						class="mt-4 md:mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
					>
						We're rebuilding UK ticketing around fairness, transparency, and
						trust — no bots, no hidden fees, no chaos. Just music, venues, and
						fans in harmony.
					</p>
					<div class="mt-10 flex items-center gap-x-6">
						<a
							href="#"
							class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-brandpink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Stay in the loop</a
						>
						<a href="#" class="text-sm/6 font-semibold text-gray-900"
							>Learn more <span aria-hidden="true">→</span></a
						>
					</div>
				</div>
				<div class="mt-8 md:mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
					<svg
						viewBox="0 0 366 729"
						role="img"
						class="mx-auto w-91.5 max-w-full drop-shadow-xl"
					>
						<title>App screenshot</title>
						<defs>
							<clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
								<rect width="316" height="684" rx="36" />
							</clipPath>
						</defs>
						<path
							fill="#4B5563"
							d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
						/>
						<path
							fill="#343E4E"
							d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
						/>
						<foreignObject
							width="316"
							height="684"
							transform="translate(24 24)"
							clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
						>
							<img
								src="/images/mb-gorillaz.png"
								alt="Mobile view of landing page"
							/>
						</foreignObject>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
</script>
