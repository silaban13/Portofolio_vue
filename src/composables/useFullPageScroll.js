import { onMounted, onUnmounted } from 'vue'

export function useFullPageScroll() {
    let isScrolling = false
    let scrollTimeout = null
    let touchStartY = 0

    const getSections = () => {
        return Array.from(
            document.querySelectorAll('.fullpage-section')
        )
    }

    const getCurrentIndex = () => {
        const sections = getSections()

        if (!sections.length) return 0

        const currentScroll = window.scrollY

        let currentIndex = 0
        let closestDistance = Infinity

        sections.forEach((section, index) => {
            const distance = Math.abs(
                section.offsetTop - currentScroll
            )

            if (distance < closestDistance) {
                closestDistance = distance
                currentIndex = index
            }
        })

        return currentIndex
    }

    const scrollToSection = (index) => {
        const sections = getSections()
        const target = sections[index]

        if (!target || isScrolling) return

        isScrolling = true

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        clearTimeout(scrollTimeout)

        scrollTimeout = setTimeout(() => {
            isScrolling = false
        }, 850)
    }

    // =========================
    // DESKTOP - MOUSE WHEEL
    // =========================

    const handleWheel = (event) => {
        const sections = getSections()

        if (!sections.length) return

        if (isScrolling) {
            event.preventDefault()
            return
        }

        // Scroll sedikit langsung pindah section
        const threshold = 5

        if (Math.abs(event.deltaY) < threshold) {
            return
        }

        const currentIndex = getCurrentIndex()

        if (event.deltaY > 0) {
            if (currentIndex < sections.length - 1) {
                event.preventDefault()
                scrollToSection(currentIndex + 1)
            }
        } else {
            if (currentIndex > 0) {
                event.preventDefault()
                scrollToSection(currentIndex - 1)
            }
        }
    }

    // =========================
    // MOBILE - TOUCH START
    // =========================

    const handleTouchStart = (event) => {
        if (!event.touches.length) return

        touchStartY = event.touches[0].clientY
    }

    // =========================
    // MOBILE - TOUCH END
    // =========================

    const handleTouchEnd = (event) => {
        const sections = getSections()

        if (!sections.length || isScrolling) return

        if (!event.changedTouches.length) return

        const touchEndY =
            event.changedTouches[0].clientY

        const distance = touchStartY - touchEndY

        // Minimal jarak swipe
        const threshold = 35

        // Swipe terlalu kecil → abaikan
        if (Math.abs(distance) < threshold) {
            return
        }

        const currentIndex = getCurrentIndex()

        // Swipe UP → section berikutnya
        if (distance > 0) {
            if (currentIndex < sections.length - 1) {
                scrollToSection(currentIndex + 1)
            }
        }

        // Swipe DOWN → section sebelumnya
        else {
            if (currentIndex > 0) {
                scrollToSection(currentIndex - 1)
            }
        }
    }

    onMounted(() => {
        // Desktop
        window.addEventListener(
            'wheel',
            handleWheel,
            { passive: false }
        )

        // Mobile
        window.addEventListener(
            'touchstart',
            handleTouchStart,
            { passive: true }
        )

        window.addEventListener(
            'touchend',
            handleTouchEnd,
            { passive: true }
        )
    })

    onUnmounted(() => {
        window.removeEventListener(
            'wheel',
            handleWheel
        )

        window.removeEventListener(
            'touchstart',
            handleTouchStart
        )

        window.removeEventListener(
            'touchend',
            handleTouchEnd
        )

        clearTimeout(scrollTimeout)
    })
}