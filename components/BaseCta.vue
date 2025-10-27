<template>
	<div class="overflow-hidden bg-white pt-28 py-32 md:pt-48">
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
					<p class="mt-6 text-xl/8 text-gray-700">
						We're building the UK's fairest ticketing platform — not live just
						yet, but you can join the Ticket Cult list to stay in the loop.
					</p>
					<p class="mt-6 text-base/7 text-gray-600">
						Ticket Cult is on a mission to revolutionise the ticketing industry
						by creating a fairer, more transparent system for fans, artists,
						venues, and organisers. We're building something amazing. Join us on
						this journey and be the first to know when we launch!
					</p>
					<div class="mt-10 flex">
						<form class="w-full max-w-md lg:col-span-5 lg:pt-2">
							<div class="flex gap-x-4">
								<label for="email-address" class="sr-only">Email address</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autocomplete="email"
									required=""
									class="min-w-0 flex-auto rounded-md bg-gray-400/10 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-400/75 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-400 sm:text-sm/6"
									placeholder="Enter your email"
								/>
								<button
									type="submit"
									class="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-brandpink cursor-crosshair focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
								>
									Subscribe
								</button>
							</div>
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
