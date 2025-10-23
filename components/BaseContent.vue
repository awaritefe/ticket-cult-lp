<template>
	<div class="bg-white py-8 sm:py-16">
		<div
			class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8"
		>
			<article class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
				<span
					v-if="featuredPost.subtitle"
					class="text-sm font-medium text-indigo-600"
					>{{ featuredPost.subtitle }}</span
				>
				<h2
					id="featured-post"
					class="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
				>
					{{ featuredPost.title }}
				</h2>
				<p class="mt-4 text-lg/8 text-gray-600">
					{{ featuredPost.description }}
				</p>
				<ul
					v-if="featuredPost.lists"
					class="mt-2 sm:mt-4 text-sm text-gray-500 space-y-1 disc list-inside list-disc"
				>
					<li v-for="list in featuredPost.lists" :key="list">
						{{ list }}
					</li>
				</ul>
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
			</article>
			<div
				class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0"
			>
				<div class="sm:-my-12 divide-y divide-gray-900/10">
					<article v-for="post in posts" :key="post.id" class="py-8">
						<div class="group relative max-w-xl">
							<h2
								class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600"
							>
								<a :href="post.href">
									<span class="absolute inset-0" />
									{{ post.title }}
								</a>
							</h2>
							<p class="mt-4 text-sm/6 text-gray-600">{{ post.description }}</p>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const featuredPost = {
	id: 1,
	subtitle: "Ticket Cult - A Social Venture",
	title: "More Than Tickets — A Fair Future for Live Music",
	href: "#",
	description:
		"Ticket Cult is a UK Social Venture rebuilding ticketing around fairness, transparency, and cultural sustainability. Every sale helps keep the scene alive — supporting youth arts, small venues, and emerging artists across the country.",
	lists: [
		"10 % of profits reinvested into live culture ",
		" Zero hidden fees",
		"Full data transparency",
	],
};

const posts = [
	{
		id: 2,
		title: "Fair Access & Transparency",
		href: "#",
		description:
			"We believe everyone should experience live music without exploitation. Our platform makes access honest — no bots, no hidden fees, no queue chaos — so fairness isn't optional, it's built in.",
	},
	{
		id: 3,
		title: "Profit for Purpose (10 %)",
		href: "#",
		description:
			"10 % of profits go straight back into the culture that fuels us — funding community venues, youth performance programs, and artist development grants. Every ticket sold helps strengthen UK music from the ground up.",
	},
	{
		id: 4,
		title: "Ethical Technology & Accountability",
		href: "#",
		description:
			"We're governed as a social venture using the EMBED model — legally bound to our mission, transparent in our reporting, and accountable to our community. Your data, your audience, your trust — protected, not traded.",
	},
];
</script>
