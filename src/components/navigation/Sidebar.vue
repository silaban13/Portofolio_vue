<script setup>
    import homeIcon from '@/assets/home.png'
    import aboutIcon from '@/assets/about.png'
    import skillsIcon from '@/assets/skills.png'
    import contactIcon from '@/assets/contact.png'
    import { ref, onMounted } from 'vue'
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon, EyeIcon } from '@heroicons/vue/24/outline'
    import lightIcon from '@/assets/darker.png'
    import darkIcon from '@/assets/night-mode.png'

    const navigation = [
        {
            name: 'Home',
            href: '#home',
            icon: homeIcon
        },
        {
            name: 'About',
            href: '#about',
            icon: aboutIcon
        },
        {
            name: 'Skills',
            href: '#skills',
            icon: skillsIcon
        },
        {
            name: 'Contact',
            href: '#contact',
            icon: contactIcon
        }
    ]

    const activeSection = ref('home')
    const theme = ref('light')
    onMounted(() => {
        const saved = localStorage.getItem('theme') || 'light'
        theme.value = saved

        if (saved === 'dark') {
        document.documentElement.classList.add('dark')
        }

        const sections = navigation
        .map(item => document.querySelector(item.href))
        .filter(Boolean)

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        activeSection.value = entry.target.id
                    }
                })
            }, {
                threshold: 0.45
            }
        )
        sections.forEach(section => observer.observe(section))
    })

    function toggleTheme() {
        if (theme.value === 'light') {
            theme.value = 'dark'
            document.documentElement.classList.add('dark')
        } else {
            theme.value = 'light'
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme.value)
    }

    function scrollToSection(href) {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

</script>
<template>
    <aside class="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 w-[58px] h-[360px] bg-[#354155] dark:bg-[#202938] rounded-r-[26px] flex-col items-center justify-center shadow-[5px_0_20px_rgba(0,0,0,0.08)] dark:shadow-[5px_0_20px_rgba(0,0,0,0.25)] transition-all duration-300">
        <nav class="flex flex-col items-center gap-5">
            <a v-for="item in navigation" :key="item.name" :href="item.href" @click.prevent="scrollToSection(item.href)" class=" group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300" :class=" activeSection === item.href.replace('#', '') ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'">
                <img :src="item.icon" :alt="item.name" class="w-5 h-5 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110"/>
                <span class="absolute left-[52px] px-2.5 py-1.5 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] font-medium opacity-0 invisible translate-x-1 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap shadow-lg"> {{ item.name }} </span>
            </a>
        </nav>
        <div class="absolute bottom-5 flex flex-col items-center gap-2">
            <button type="button" @click="toggleTheme" class=" w-9 h-9 rounded-lg flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300" :title="theme === 'light' ? 'Dark Mode' : 'Light Mode'">
                <img :src="theme === 'light' ? lightIcon : darkIcon" alt="Theme" class="w-4 h-4"/>
            </button>
        </div>
    </aside>
    <Disclosure as="nav" class="md:hidden fixed top-0 left-0 right-0 z-[100] bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800" v-slot="{ open }">
        <div class="h-[72px] px-5 flex items-center justify-between">
            <a href="#home" @click.prevent="scrollToSection('#home')" class="text-xl font-bold text-gray-900 dark:text-white"> Mariono <span class="text-blue-600"> Silaban </span></a>
            <DisclosureButton class="w-11 h-11 rounded-xl flex items-center justify-center text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <Bars3Icon v-if="!open" class="w-6 h-6"/>
                <XMarkIcon v-else class="w-6 h-6"/>
            </DisclosureButton>
        </div>
        <DisclosurePanel class="absolute top-[72px] left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-xl p-5">
        <div class="space-y-2">
            <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" @click.prevent="scrollToSection(item.href)" class="flex items-center gap-4 w-full px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 transition">
                <component :is="item.icon" class="w-5 h-5"/>
                <span> {{ item.name }} </span>
            </DisclosureButton>
            <div class=" border-t border-gray-200 dark:border-gray-800 my-4"/>
                <button type="button" @click="toggleTheme" class=" flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    <span> Tema </span>
                    <img :src="theme === 'light' ? lightIcon : darkIcon" alt="Theme" class="w-5 h-5"/>
                </button>
                <a href="https://drive.google.com/file/d/1Loz49kSbVi8FKDVk6TKmQgUA5RLlcaQ-/preview" target="_blank" rel="noopener noreferrer" class=" mt-3 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
                    <span> Open CV </span>
                    <EyeIcon class="w-5 h-5" />
                </a>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>