<template>
    <section id="contact" class="py-24 bg-white dark:bg-[#11131c]">
        <div class="mx-auto w-full px-5 sm:px-6 lg:px-10 xl:px-16">
            <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white"> Contact Me </h2>
            <div class="mt-5 h-[2px] w-full bg-black dark:bg-gray-700"></div>
            <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
                <div class="space-y-8">
                    <div class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1b1e28] p-8">
                        <div class="space-y-8">
                            <div class="flex items-center gap-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-gray-800">
                                    <img src="@/assets/telephone-call.png" alt="Phone" class="h-6 w-6 object-contain" >
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                    <p class="font-semibold text-gray-900 dark:text-white"> +62 813 7520 8486 </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-gray-800">
                                    <img src="@/assets/email.png" alt="Email" class="h-6 w-6 object-contain" >
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <p class="font-semibold text-gray-900 dark:text-white"> mariono@email.com </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-gray-800">
                                    <img src="@/assets/location.png" alt="Location" class="h-6 w-6 object-contain" >
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                    <p class="font-semibold text-gray-900 dark:text-white"> Jakarta, Indonesia </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1b1e28] p-8">
                    <form @submit.prevent="sendToWhatsApp" class="space-y-6">
                        <div>
                            <label for="name" class="text-sm font-medium text-gray-700 dark:text-white"> Name </label>
                            <input id="name" v-model="form.name" type="text" placeholder="Your Name" required class="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#11131c] px-4 py-3 outline-none focus:border-blue-500">
                        </div>
                        <div>
                            <label for="email" class="text-sm font-medium text-gray-700 dark:text-white"> Email </label>
                            <input id="email" v-model="form.email" type="email" placeholder="your@email.com" required class="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#11131c] px-4 py-3 outline-none focus:border-blue-500">
                        </div>
                        <div>
                            <label for="message" class="text-sm font-medium text-gray-700 dark:text-white"> Message </label>
                            <textarea id="message" v-model="form.message" rows="5" placeholder="How can I help you?" required class="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#11131c] px-4 py-3 outline-none resize-none focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" class="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"> Send Message → </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { reactive } from 'vue'

    const form = reactive({ name: '', email: '', message: '' })
    const sendToWhatsApp = () => {
        const phoneNumber = '6281375208486' 
        const text = `
            Halo Mariono,
            Saya ingin menghubungi Anda melalui website portfolio.
            Nama: ${form.name}
            Email: ${form.email}
            Pesan: ${form.message} `.trim()
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

        window.open(whatsappUrl, '_blank')
    }
</script>