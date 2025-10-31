<template>
	<div class="bg-white py-16">
		<div
			class="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3"
		>
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2
					class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
				>
					The people behind Ticket Cult
				</h2>
				<p class="mt-6 text-lg/8 text-gray-600">
					Our team is made up of live music lovers, tech enthusiasts, and
					industry veterans committed to revolutionising ticketing for the
					better.
				</p>
			</div>
			<ul
				role="list"
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
			>
				<li v-for="person in people" :key="person.name">
					<img
						class="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
						:src="person.imageUrl"
						alt=""
					/>
					<h3 class="mt-6 text-lg/8 font-semibold text-gray-900">
						{{ person.name }}
					</h3>
					<p class="text-base/7 text-indigo-600">{{ person.role }}</p>
					<p class="mt-4 text-base/7 text-gray-600">{{ person.bio }}</p>
					<ul role="list" class="mt-6 flex gap-x-6">
						<!-- <li>
							<div class="bg-black rounded-full p-2">
								<a
									:href="person.xUrl"
									class="text-primary hover:text-brandpink"
								>
									<span class="sr-only">X</span>
									<svg
										class="size-5"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
										/>
									</svg>
								</a>
							</div>
						</li> -->
						<li>
							<div class="bg-black rounded-full p-2">
								<a
									:href="person.linkedinUrl"
									class="text-primary hover:text-brandpink"
								>
									<span class="sr-only">LinkedIn</span>
									<svg
										class="size-5"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
											clip-rule="evenodd"
										/>
									</svg>
								</a>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const people = [
	{
		name: "Daniel",
		role: "Founder & CEO",
		imageUrl: "/images/headshot.jpg",
		bio: "Daniel is a software developer with over five years' experience in front-end development, sales management, and operations leadership. Frustrated by the unfairness of today's ticketing giants, he created Ticket Cult after repeatedly losing out on tickets due to crashed queues, inflated prices, and dynamic pricing. As both the builder and the target market, Daniel understands exactly where ticketing fails fans and venues and how to fix it.",
		linkedinUrl: "https://www.linkedin.com/company/ticket-cult/",
	},
	{
		name: "Mo",
		role: "Co-founder & CTO",
		imageUrl: "/images/headshot2.jpg",
		bio: "Mo brings extensive experience in customer success and digital business management. Formerly Customer Success Director at Red Letter Days, he now runs several successful e-commerce ventures and digital operations. A self-made entrepreneur with a passion for user experience, Mo ensures Ticket Cult's technology and partnerships deliver for both fans and venues alike.",
		linkedinUrl: "https://www.linkedin.com/company/ticket-cult/",
	},
];
</script>

<!-- <style scoped>
h2::before {
	content: "";
	display: block;
	position: absolute;
	bottom: 0;
	width: 150%;
	height: 42%;
	background-color: var(--color-primary);
	z-index: -1;
}
</style> -->
