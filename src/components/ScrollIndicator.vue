<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const isVisible = ref(true)
    const handleScroll = () => {
        if (window.scrollY > 10) {
            isVisible.value = false
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })

</script>

<template>
    <transition name="scroll-indicator">
        <div v-if="isVisible" class="scroll-indicator" aria-hidden="true">
            <span class="scroll-text">SCROLL</span>
            <div class="scroll-line">
                <span class="scroll-dot"></span>
            </div>
        </div>
    </transition>
</template>

<style scoped>
    .scroll-indicator {
        position: fixed;
        left: 50%;
        bottom: 28px;
        transform: translateX(-50%);
        z-index: 40;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        pointer-events: none;
    }

    .scroll-text {
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.35em;
        color: #6b7280;
    }

    .scroll-line {
        position: relative;
        width: 1.5px;
        height: 52px;
        background: #d1d5db;
        overflow: hidden;
    }

    .scroll-dot {
        position: absolute;
        top: -8px;
        left: 50%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #374151;
        transform: translateX(-50%);
        animation: scrollMove 1.8s ease-in-out infinite;
    }

    @keyframes scrollMove {
        0% {
            top: -8px;
            opacity: 0;
        }

        20% {
            opacity: 1;
        }

        70% {
            opacity: 1;
        }

        100% {
            top: 52px;
            opacity: 0;
        }
    }

    .dark .scroll-text {
        color: #9ca3af;
    }

    .dark .scroll-line {
        background: #374151;
    }

    .dark .scroll-dot {
        background: #e5e7eb;
    }

    .scroll-indicator-enter-active,
    .scroll-indicator-leave-active {
        transition: opacity 0.4s ease, transform 0.4s ease;
    }

    .scroll-indicator-enter-from,
    .scroll-indicator-leave-to {
        opacity: 0;
        transform: translate(-50%, 10px);
    }

    @media (max-width: 767.98px) {
        .scroll-indicator {
            display: none;
        }
    }

</style>