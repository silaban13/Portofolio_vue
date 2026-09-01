import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer = null

  onMounted(() => {
    const elements = document.querySelectorAll('[data-scroll-animation]')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15
      }
    )

    elements.forEach((element) => {
      observer.observe(element)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}