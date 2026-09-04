import { onMounted, onUnmounted } from 'vue'

export function useFullPageScroll() {
    let isScrolling = false
    const getSections = () => {
        return Array.from(
            document.querySelectorAll('.fullpage-section')
        )
    }

    const scrollToSection = (index) => {
        const sections = getSections()
        if (!sections[index]) return
        isScrolling = true
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        setTimeout(() => {
            isScrolling = false
        }, 900)
    }

    const handleWheel = (event) => {
        if (isScrolling) {
            event.preventDefault()
            return
        }

        const sections = getSections()
        if (!sections.length) return
        const currentScroll = window.scrollY
        let currentIndex = 0
        sections.forEach((section, index) => {
            const distance = Math.abs(
                section.offsetTop - currentScroll
            )

            if (
                distance <
                Math.abs(sections[currentIndex].offsetTop - currentScroll)
            ) {
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
    })
}