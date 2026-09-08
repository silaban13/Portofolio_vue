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

    const isTallSection = (section) => {
        return section && section.scrollHeight > window.innerHeight + 10
    }

    const isAtSectionTop = (section) => {
        return window.scrollY <= section.offsetTop + 5
    }

    const isAtSectionBottom = (section) => {
        const bottom = section.offsetTop + section.offsetHeight
        return window.scrollY + window.innerHeight >= bottom - 5
    }

  const handleWheel = (event) => {
    const sections = getSections()
    if (!sections.length) return
    const currentIndex = getCurrentIndex()
    const currentSection = sections[currentIndex]
    if (!currentSection) return
    if (isScrolling) {
        event.preventDefault()
        return
    }

    const isTallSection = currentSection.scrollHeight > window.innerHeight + 10
    const sectionTop = currentSection.offsetTop
    const sectionBottom = sectionTop + currentSection.scrollHeight
    const currentScroll = window.scrollY
    const isAtTop = currentScroll <= sectionTop + 5
    const isAtBottom = currentScroll + window.innerHeight >= sectionBottom - 5
    if (isTallSection) {
        if (event.deltaY > 0) {
            if (!isAtBottom) {
                return
            }

            if (currentIndex < sections.length - 1) {
                event.preventDefault()
                scrollToSection(currentIndex + 1)
            }

            return
        }

        if (event.deltaY < 0) {
            if (!isAtTop) {
                return
            }

            if (currentIndex > 0) {
                event.preventDefault()
                scrollToSection(currentIndex - 1)
            }

            return
        }
    }

    const threshold = 5
    if (Math.abs(event.deltaY) < threshold) {
        return
    }

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

    const handleTouchStart = (event) => {
        if (!event.touches.length) return
        touchStartY = event.touches[0].clientY
    }

    const handleTouchEnd = (event) => {
        const sections = getSections()
        if (!sections.length || isScrolling) return
        if (!event.changedTouches.length) return
        const touchEndY = event.changedTouches[0].clientY
        const distance = touchStartY - touchEndY
        const threshold = 35
        if (Math.abs(distance) < threshold) {
            return
        }

        const currentIndex = getCurrentIndex()
        if (distance > 0) {
            if (currentIndex < sections.length - 1) {
                scrollToSection(currentIndex + 1)
            }
        } else {
            if (currentIndex > 0) {
                scrollToSection(currentIndex - 1)
            }
        }
    }

    onMounted(() => {
        window.addEventListener(
            'wheel',
            handleWheel,
            { passive: false }
        )
        
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