import { onMounted, onUnmounted } from 'vue'

export function useFullPageScroll() {
    let isScrolling = false
    let scrollTimeout = null
    const getSections = () => {
        return Array.from(
            document.querySelectorAll('.fullpage-section')
        )
    }

    const scrollToSection = (index) => {
        const sections = getSections()
        if (!sections[index] || isScrolling) return
        isScrolling = true
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
            isScrolling = false
        }, 1700)
    }

    const handleWheel = (event) => {
        const sections = getSections()
        if (!sections.length) return
        if (isScrolling) {
            event.preventDefault()
            return
        }

        if (Math.abs(event.deltaY) < 15) return
        const currentScroll = window.scrollY
        let currentIndex = 0
        sections.forEach((section, index) => {
            const distance = Math.abs(
                section.offsetTop - currentScroll
            )

            const currentDistance = Math.abs(
                sections[currentIndex].offsetTop - currentScroll
            )

            if (distance < currentDistance) {
                currentIndex = index
            }
        })

        if (event.deltaY > 0) {
            if (currentIndex < sections.length - 1) {
                event.preventDefault()
                scrollToSection(currentIndex + 1)
            }
        }

        if (event.deltaY < 0) {
            if (currentIndex > 0) {
                event.preventDefault()
                scrollToSection(currentIndex - 1)
            }
        }
    }

    onMounted(() => {
        window.addEventListener('wheel', handleWheel, {
            passive: false
        })
    })

    onUnmounted(() => {
        window.removeEventListener('wheel', handleWheel)
        clearTimeout(scrollTimeout)
    })
}