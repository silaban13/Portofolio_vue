<script setup>
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

    defineProps({
        open: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['toggle'])

</script>

<template>
  <button type="button" @click="emit('toggle')" class="w-16 h-12 rounded-xl flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300" :aria-label="open ? 'Close menu' : 'Open menu'">
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 rotate-90 scale-75" enter-to-class="opacity-100 rotate-0 scale-100" leave-active-class="transition-all duration-200 ease-in absolute" leave-from-class="opacity-100 rotate-0 scale-100" leave-to-class="opacity-0 -rotate-90 scale-75">
      <XMarkIcon v-if="open" key="close" class="w-12 h-12"/>
      <svg v-else key="menu" class="w-12 h-12 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9H21M11 15H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </Transition>
  </button>
</template>