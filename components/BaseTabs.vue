<template>
	<div class="bg-white">
		<section
			aria-labelledby="features-heading"
			class="mx-auto max-w-7xl py-8 sm:px-2 sm:py-16 lg:px-8"
		>
			<div class="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
				<div class="max-w-3xl">
					<h2
						id="features-heading"
						class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
					>
						Burn the Old System. Build a Fairer One.
					</h2>
					<p class="mt-4 text-gray-500">
						Ticketing Event platforms have been broken for too long — hidden
						fees, chaotic queue based systems, and control in the wrong hands.
						Ticket Cult puts fairness, transparency, and power back where it
						belongs: with fans, artists, venues, and organisers.
					</p>
				</div>

				<TabGroup as="div" class="mt-4">
					<div class="-mx-4 flex overflow-x-auto sm:mx-0">
						<div class="flex-auto border-b border-gray-200 px-4 sm:px-0">
							<TabList class="-mb-px flex space-x-10">
								<Tab
									as="template"
									v-for="tab in tabs"
									:key="tab.name"
									v-slot="{ selected }"
								>
									<button
										:class="[
											selected
												? 'border-indigo-500 text-indigo-600 focus-visible:outline-none focus-visible:ring-0'
												: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
											'border-b-2 py-6 text-sm font-medium whitespace-nowrap',
										]"
									>
										{{ tab.name }}
									</button>
								</Tab>
							</TabList>
						</div>
					</div>

					<TabPanels as="template">
						<TabPanel
							v-for="tab in tabs"
							:key="tab.name"
							class="space-y-16 pt-10 lg:pt-16"
						>
							<div
								v-for="feature in tab.features"
								:key="feature.name"
								class="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-y-8 lg:gap-x-8"
							>
								<dl
									class="grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2 lg:col-span-7"
								>
									<div v-for="item in feature.items" :key="item.name">
										<h3 class="text-lg font-medium text-gray-900">
											{{ item.name }}
										</h3>
										<p
											v-if="item.description"
											class="mt-2 text-sm text-gray-500"
										>
											{{ item.description }}
										</p>
										<ul
											v-if="item.descriptionList"
											class="mt-2 text-sm text-gray-500 space-y-1"
										>
											<li v-for="line in item.descriptionList" :key="line">
												{{ line }}
											</li>
										</ul>
									</div>
								</dl>
								<div class="lg:col-span-5">
									<img
										:src="feature.imageSrc"
										:alt="feature.imageAlt"
										class="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover"
									/>
								</div>
							</div>
						</TabPanel>
					</TabPanels>
				</TabGroup>
			</div>
		</section>
	</div>
</template>

<script setup>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";

const tabs = [
	{
		name: "Fans",
		features: [
			{
				imageSrc: "./images/fans.jpg",
				imageAlt:
					"Maple organizer base with slots, supporting white polycarbonate trays of various sizes.",
				items: [
					{
						name: "For fans tired of rigged queues",
						description:
							"You just want a fair shot, no queue crashes, no bots, no surprise fees.",
					},
					{
						name: "The problem",
						description:
							"Queue chaos, crashes, feels like a scam; you queue, it crashes, prices double.",
					},
					{
						name: "How Ticket Cult helps",
						descriptionList: [
							"Fair Ballot → everyone gets the same chance; no scramble.",
							"Simple fee shown upfront — nothing hidden.",
						],
					},
					{
						name: "Feel the difference",
						description: "Finally… tickets without the bullsht.*",
					},
				],
			},
		],
	},
	{
		name: "Venues",
		features: [
			{
				imageSrc: "./images/venue3.jpg",
				imageAlt:
					"Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.",
				items: [
					{
						name: "For venues that refuse to be squeezed",
						description: "Keep more of the face value and your audience, too.",
					},
					{
						name: "The frustration",
						description:
							"Opaque fees, slow payouts, lock-ins, support that vanishes when it counts.",
					},
					{
						name: "How Ticket Cult helps",
						descriptionList: [
							"Transparent booking fee (5-8%) so you retain 92-95% of face value",
							"You own the audience data — build relationships, not someone else's database.",
						],
					},
					{
						name: "Feel the difference",
						description: "More revenue. More control. Less grief.",
					},
				],
			},
		],
	},
	{
		name: "Event Organisers",
		features: [
			{
				imageSrc: "./images/venue.jpg",
				imageAlt:
					"Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.",
				items: [
					{
						name: "For organisers tired of platform chaos",
						description: "You sell the experience — they sell excuses.",
					},
					{
						name: "The problem",
						description:
							"Queue crashes, payout delays, and “support” that vanishes when it's urgent.",
					},
					{
						name: "How Ticket Cult helps",
						descriptionList: [
							"Ballot + pre-reg removes traffic spikes and stop surge crashes before they start.",
							"ID-locked tickets + face-value resale reduce fraud and PR blow-ups.",
						],
					},
					{
						name: "Feel the difference",
						description: "Calm launches. Happy crowds. Clear economics.",
					},
				],
			},
		],
	},
	{
		name: "Artists",
		features: [
			{
				imageSrc: "./images/artist.jpg",
				imageAlt:
					"Walnut organizer system on black leather desk mat on top of white desk.",
				items: [
					{
						name: "For artists who've had enough of being cut out",
						description:
							"You build the buzz — they take the data and the profit.",
					},
					{
						name: "The problem",
						description:
							"bots steal tickets, resale sites gouge fans, you never see who's buying.",
					},
					{
						name: "How Ticket Cult helps",
						descriptionList: [
							"Artist-owned data platform for direct connection and re-engagement.",
							"Fair Ballot + ID verification stops touting; fans buy at face value.",
						],
					},
					{
						name: "Feel it",
						description: "Your shows, your crowd, your rules.",
					},
				],
			},
		],
	},
];
</script>
