<template>
	<div class="bg-white">
		<div
			class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8"
		>
			<div
				class="grid grid-cols-1 items-center gap-x-8 gap-y-8 md:gap-y-16 lg:grid-cols-2"
			>
				<div>
					<div class="border-b border-gray-200 pb-6">
						<h2 class="font-medium text-gray-500">
							Ticket Cult is made with you in mind
						</h2>
						<p
							class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
						>
							The Solution
						</p>
					</div>

					<dl class="mt-6 space-y-5 md:space-y-10">
						<div v-for="feature in features" :key="feature.name">
							<dt class="text-base font-medium text-gray-900">
								{{ feature.name }}
							</dt>
							<dd class="mt-3 text-sm font-medium text-indigo-600">
								{{ feature.subtitle }}
							</dd>
							<dd class="mt-3 text-sm text-gray-500">
								{{ feature.description }}
							</dd>
						</div>
					</dl>
				</div>

				<div>
					<img
						src="/images/friends.jpg"
						alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
						class="aspect-video w-full rounded-lg bg-gray-100 object-cover"
					/>
					<div
						class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8"
					>
						<img
							src="/images/tickets.jpg"
							alt="Detail of temperature setting button on kettle bass with digital degree readout."
							class="aspect-square w-full rounded-lg bg-gray-100 object-cover"
						/>
						<img
							src="/images/stats.jpg"
							alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
							class="aspect-square w-full rounded-lg bg-gray-100 object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const features = [
	{
		name: "Fair Ballot System",
		subtitle: "Everyone gets an equal shot — no queue chaos, no bots.",
		description:
			"Forget the 9 a.m. panic: fans register, ballots run, and allocations stay fair and calm. No more scalpers. No more stress.",
	},
	{
		name: "ID-Verified Tickets",
		subtitle: "Real people, real tickets.",
		description:
			"Every ticket links to a verified ID, killing fake resales and protecting fans, artists, and venues alike. You always pay cost price.",
	},
	{
		name: "Upfront Pricing",
		subtitle: "One transparent fee — shown before you buy, no hidden fees.",
		description:
			"No last-minute mark-ups or “service surprises.” You see the real cost first and only once. Fair price. Clear conscience.",
	},
	{
		name: "Data Ownership & Transparency",
		subtitle: "You keep control of your audience and your insights.",
		description:
			"Venues and artists own their customer data; fans know exactly how theirs is used. No more gatekeeping. Just real connection.",
	},
];
</script>
