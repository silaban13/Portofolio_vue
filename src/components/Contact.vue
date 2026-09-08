<template>

  <section  
  id="contact"  
  class="fullpage-section bg-white dark:bg-[#11131c] py-24"  
  style="padding-top:clamp(8rem,12vw,12rem);"  
>

    <div class="mx-auto w-full px-6 sm:px-10 md:px-24 lg:px-28 xl:px-36">
        <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white"> Contact Me </h2>
        <div class="mt-5 h-[2px] w-[82%] sm:w-[87%] md:w-[92%] lg:w-[97%] bg-black dark:bg-gray-700"></div>
    </div>
    <div class="mx-auto w-full flex-1 flex items-center px-6 sm:px-10 md:px-24 lg:px-28 xl:px-36 py-12">
        <div class="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div class="w-full max-w-xl mx-auto lg:mx-0">
                <p class="text-gray-500 dark:text-gray-400 leading-8 text-center lg:text-left" style="font-size:clamp(.75rem,1vw,.95rem);">
                    Jika Anda memiliki pertanyaan, ingin bekerja sama, atau tertarik
                    dengan project yang saya kerjakan, jangan ragu untuk menghubungi saya.
                </p>
                <div class="mt-10 space-y-5">
                    <a href="tel:+6281375208486" class="group flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-[#1b1e28]">
                            <img src="@/assets/telephone-call.png" alt="Phone" class="h-6 w-6 object-contain"/>
                        </div>
                        <div class="min-w-0">
                            <p class="text-sm text-gray-500 dark:text-gray-400"> Phone </p>
                            <p class="font-semibold text-gray-900 dark:text-white"> +62 813 7520 8486 </p>
                        </div>
                        <span class="ml-auto text-gray-400 transition-transform duration-300 group-hover:translate-x-1"> → </span>
                    </a>
                    <a href="mailto:mariono@email.com" class="group flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-[#1b1e28]">
                            <img src="@/assets/email.png" alt="Email" class="h-6 w-6 object-contain"/>
                        </div>
                        <div class="min-w-0">
                            <p class="text-sm text-gray-500 dark:text-gray-400"> Email </p>
                            <p class="font-semibold text-gray-900 dark:text-white break-all"> mariono@email.com </p>
                        </div>
                        <span class="ml-auto text-gray-400 transition-transform duration-300 group-hover:translate-x-1"> → </span>
                    </a>
                    <div class="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-[#1b1e28]">
                            <img src="@/assets/location.png" alt="Location" class="h-6 w-6 object-contain"/>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500 dark:text-gray-400"> Location </p>
                            <p class="font-semibold text-gray-900 dark:text-white"> Jakarta, Indonesia </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto">
                <div class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1b1e28] p-6 sm:p-8">
                    <form @submit.prevent="sendToWhatsApp" class="space-y-5">
                        <div>
                            <label for="name" class="text-sm font-medium text-gray-700 dark:text-gray-300"> Name </label>
                            <input id="name" v-model="form.name" type="text" placeholder="Your Name" required class="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#11131c] px-4 py-3 text-gray-900 dark:text-white outline-none transition focus:border-gray-500 dark:focus:border-gray-500"/>
                        </div>
                        <div>
                            <label for="email" class="text-sm font-medium text-gray-700 dark:text-gray-300"> Email </label>
                            <input id="email" v-model="form.email" type="email" placeholder="your@email.com" required class="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#11131c] px-4 py-3 text-gray-900 dark:text-white outline-none transition focus:border-gray-500 dark:focus:border-gray-500" />
                        </div>
                        <div>
                            <label for="message" class="text-sm font-medium text-gray-700 dark:text-gray-300"> Message </label>
                            <textarea id="message" v-model="form.message" rows="4" placeholder="How can I help you?" required class="mt-2 w-full resize-none rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#11131c] px-4 py-3 text-gray-900 dark:text-white outline-none transition focus:border-gray-500 dark:focus:border-gray-500"></textarea>
                        </div>
                        <button type="submit" class="group inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white font-semibold text-gray-800 transition-all duration-300 hover:bg-gray-800 hover:text-white dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-gray-900" style="gap:clamp(0.5rem,0.8vw,0.75rem); padding-top:clamp(0.35rem,0.5vw,0.375rem); padding-bottom:clamp(0.35rem,0.5vw,0.375rem); padding-left:clamp(1rem,1.8vw,1.5rem); padding-right:clamp(0.35rem,0.5vw,0.375rem); font-size:clamp(0.75rem,1.1vw,0.875rem);">
                            <span>Send Message</span>
                            <span class="flex items-center justify-center rounded-full bg-gray-600 text-white transition-all duration-300 group-hover:bg-white group-hover:text-gray-800" style="width:clamp(2rem,3.5vw,2.25rem); height:clamp(2rem,3.5vw,2.25rem);"> → </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
    import { reactive } from 'vue'

    const form = reactive({
        name: '',
        email: '',
        message: ''
    })

    const sendToWhatsApp = () => {
        const phoneNumber = '6281375208486'
        const text = `
            Halo Mariono,
            Saya ingin menghubungi Anda melalui website portfolio.
            Nama: ${form.name}
            Email: ${form.email}
            Pesan: ${form.message}
            `.trim()
            const whatsappUrl =
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

                 window.open(whatsappUrl, '_blank')
    }
</script>