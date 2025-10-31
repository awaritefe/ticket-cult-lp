<template>
	<div class="bg-white">
		<div
			class="mx-auto sm:bg-accent rounded-2xl max-w-7xl px-6 pb-8 pt-16 sm:py-16 lg:px-8"
		>
			<div class="mx-auto max-w-4xl">
				<h2
					class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
				>
					Frequently asked questions
				</h2>
				<div class="mt-16 space-y-12">
					<div v-for="([category, items], idx) in groupedFaqs" :key="category">
						<h3 v-if="category" class="text-xl font-semibold text-indigo-700">
							{{ category }}
						</h3>
						<dl class="mt-4 divide-y divide-gray-900/10">
							<Disclosure
								v-for="faq in items"
								:key="faq.question"
								v-slot="{ open }"
								class="py-6 first:pt-0 last:pb-0"
								as="div"
							>
								<dt>
									<DisclosureButton
										class="flex w-full items-start justify-between text-left text-gray-900"
									>
										<span class="text-base/7 font-semibold">{{
											faq.question
										}}</span>
										<span class="ml-6 flex h-7 items-center">
											<PlusSmallIcon
												v-if="!open"
												class="size-6"
												aria-hidden="true"
											/>
											<MinusSmallIcon
												v-else
												class="size-6"
												aria-hidden="true"
											/>
										</span>
									</DisclosureButton>
								</dt>
								<DisclosurePanel as="dd" class="mt-2 pr-12">
									<p class="text-base/7 text-gray-800">{{ faq.answer }}</p>
								</DisclosurePanel>
							</Disclosure>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { computed } from "vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
	{
		question: "What is Ticket Cult?",
		answer:
			"Ticket Cult is a fair ticketing platform for live music — built for venues, festivals and events to sell tickets transparently while connecting directly with real fans.",
		category: "General / Public",
	},
	{
		question: "How can I get involved?",
		answer:
			"Join early access, support our crowdfunding, or partner with us to pilot fair ticketing at your venue or event.",
		category: "Who It's For & Getting Involved",
	},
	{
		question: "How is Ticket Cult different from other ticketing platforms?",
		answer:
			"We prioritise independence and fairness: transparent fees, verified fan access, and venue ownership of audience data. We're built with the music community, not above it.",
		category: "General / Public",
	},
	{
		question: "Where are you launching first?",
		answer:
			"We're starting in Camden and wider London with pilot events, then expanding to key UK cities like Brighton, Bristol, Manchester and Glasgow.",
		category: "General / Public",
	},
	{
		question: "Are you a social enterprise?",
		answer:
			"Yes — we're a social venture. Our mission and a 10% annual profit reinvestment into youth arts and venue resilience are locked into our governance so it can't be watered down.",
		category: "General / Public",
	},

	// Fans
	{
		question: "Are your fees higher than other platforms?",
		answer:
			"No. Our fees are lower and fully transparent. You'll see the total price upfront — no surprises or add-ons at checkout.",
		category: "For Fans",
	},
	{
		question: "How do you stop bots and touts?",
		answer:
			"Tickets are linked to verified IDs so real people — not bots — can buy, transfer and enter. This closes common scalping loopholes.",
		category: "For Fans",
	},
	{
		question: "Can I resell my ticket if I can't go?",
		answer:
			"Yes. We provide a verified resale where tickets can only be resold at the original cost price. ID verification ensures transfers stay between real fans.",
		category: "For Fans",
	},
	{
		question: "Do you ever charge hidden fees?",
		answer:
			"Never. All fees are shown upfront and are compliant with upcoming UK no-drip pricing rules.",
		category: "For Fans",
	},

	// Venues / Promoters / Festivals
	{
		question: "How does Ticket Cult help venues earn more?",
		answer:
			"We're designing one of the lowest-fee models in the industry so venues keep around 92% or more of their ticket revenue, while reducing admin and building loyal audiences.",
		category: "For Venues / Promoters / Festivals",
	},
	{
		question: "How quickly do venues get paid?",
		answer:
			"Our aim is instant or same-day payouts via trusted providers. We're also exploring options to release a portion of sales early for loyal, long-term partners.",
		category: "For Venues / Promoters / Festivals",
	},
	{
		question: "Do venues get access to customer data?",
		answer:
			"Yes. Our ticketing and event management tools let venues build direct relationships with fans — important because many legacy platforms gatekeep this data.",
		category: "For Venues / Promoters / Festivals",
	},
	{
		question: "Do we need to sign a long-term contract?",
		answer:
			"No. Start with a pilot or individual events — no exclusivity. We believe loyalty should be earned, not forced.",
		category: "For Venues / Promoters / Festivals",
	},
	{
		question: "Can Ticket Cult handle large on-sales or festivals?",
		answer:
			"Yes. We use an alternative to traditional queue systems designed to handle high demand fairly and reliably without crashes.",
		category: "For Venues / Promoters / Festivals",
	},

	// Investors / Partners
	{
		question: "How does Ticket Cult make money?",
		answer:
			"Through a dual-fee model shared between venues and fans. It's transparent, sustainable and scales as more venues join — without ads or data resale.",
		category: "For Investors / Partners",
	},
	{
		question: "How is Ticket Cult funded right now?",
		answer:
			"We're pre-seed and pursuing a blend of arts grants, community crowdfunding and strategic partnerships aligned with our mission.",
		category: "For Investors / Partners",
	},
	{
		question: "What's your long-term vision?",
		answer:
			"To be the UK's most trusted fair-ticketing platform — giving control back to venues, access back to fans, and strengthening live music culture.",
		category: "For Investors / Partners",
	},

	// Security / Data
	{
		question: "How do you handle data and ID verification securely?",
		answer:
			"We collect only the minimum data needed to provide accounts and tickets. ID checks are handled by a professional third-party; we don't store your documents — only the pass/fail result. We're fully UK-GDPR compliant and never sell data.",
		category: "Security & Data",
	},

	// Who it's for / Getting involved
	{
		question: "Who can use Ticket Cult to sell tickets?",
		answer:
			"Venues, artists, event organisers and festivals can create an account and start selling. For larger or complex events we offer a managed service with hands‑on support.",
		category: "Who It's For & Getting Involved",
	},
	{
		question: "Why the name 'Ticket Cult'?",
		answer:
			"Because we're building a movement — a culture around fair access and real connection in live music.",
		category: "Who It's For & Getting Involved",
	},
];

const groupedFaqs = computed(() => {
	const map = new Map();
	for (const item of faqs) {
		const key = item.category || "General / Public";
		if (!map.has(key)) map.set(key, []);
		map.get(key).push(item);
	}
	return Array.from(map.entries());
});
</script>
