<template>
    <section id="contact" class="py-24 bg-white dark:bg-[#11131c]">
        <div class="mx-auto w-full px-5 sm:px-6 lg:px-10 xl:px-16">
            <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white"> Contact Me </h2>
            <div class="mt-5 h-[2px] w-full bg-black dark:bg-gray-700"></div>
            <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
                <div class="space-y-8">
                    <div class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1b1e28] p-8 transition-all duration-300 hover:-translate-y-2">
                        <div class="space-y-8">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center"> 📞 </div>
                                <div>
                                    <p class="text-sm text-gray-500"> Phone </p>
                                    <p class="font-semibold dark:text-white"> +62 813 7520 8486 </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center"> ✉️ </div>
                                <div>
                                    <p class="text-sm text-gray-500"> Email </p>
                                    <p class="font-semibold dark:text-white"> mariono@email.com </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">📍 </div>
                                <div>
                                    <p class="text-sm text-gray-500"> Location </p>
                                    <p class="font-semibold dark:text-white"> Jakarta, Indonesia </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1b1e28] p-8 transition-all duration-300 hover:-translate-y-2">
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="text-sm font-medium dark:text-white"> Name </label>
                            <input id="name" type="text" placeholder="Your Name" class="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#11131c] px-4 py-3 outline-none focus:border-blue-500">
                        </div>
                        <div>
                            <label for="email" class="text-sm font-medium dark:text-white"> Email </label>
                            <input id="email" type="email" placeholder="your@email.com" class="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#11131c] px-4 py-3 outline-none focus:border-blue-500">
                        </div>
                        <div>
                            <label for="message" class="text-sm font-medium dark:text-white"> Message </label>
                            <textarea id="message" rows="5" placeholder="How can I help you?" class="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#11131c] px-4 py-3 outline-none resize-none focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" class="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"> Send Message → </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>