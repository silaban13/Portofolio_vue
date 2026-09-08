<template>
  <footer
    id="footer"
    class="relative overflow-hidden border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-[#0d0f16]"
>
    <!-- Decorative blur -->
    <div
      class="absolute -top-24 left-1/2 h-48 w-48
             -translate-x-1/2 rounded-full
             bg-blue-500/10 blur-3xl"
    ></div>

    <div
      class="relative mx-auto w-full
             px-6 py-10
             sm:px-10 sm:py-12
             md:px-24
             lg:px-28
             xl:px-36"
    >

      <!-- Top Footer -->
      <div
        class="flex flex-col items-center
               gap-7
               border-b border-gray-200 pb-8
               dark:border-gray-800
               md:flex-row md:justify-between"
      >

        <!-- Logo / Description -->
        <div class="text-center md:text-left">
          <h2
            class="text-2xl font-black tracking-tight
                   text-gray-900 dark:text-white"
          >
            Mariono <span class="text-blue-600">Silaban</span>
          </h2>

          <p
            class="mt-1 text-sm
                   text-gray-500 dark:text-gray-400"
          >
            Front-End Developer
          </p>
        </div>


        <!-- Navigation -->
        <nav
          class="flex flex-wrap
                 justify-center
                 gap-x-6 gap-y-3
                 text-sm font-medium"
        >
          <a
            href="/#home"
            class="text-gray-600 transition hover:text-blue-600
                   dark:text-gray-400 dark:hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="/#about"
            class="text-gray-600 transition hover:text-blue-600
                   dark:text-gray-400 dark:hover:text-blue-400"
          >
            About
          </a>

          <a
            href="/#skills"
            class="text-gray-600 transition hover:text-blue-600
                   dark:text-gray-400 dark:hover:text-blue-400"
          >
            Skills
          </a>

          <a
            href="/#contact"
            class="text-gray-600 transition hover:text-blue-600
                   dark:text-gray-400 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </nav>


        <!-- Social -->
        <div class="flex items-center gap-3">

          <!-- GitHub -->
          <a
            href="https://github.com/silaban13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="flex h-10 w-10 items-center justify-center
                   rounded-full border border-gray-200 bg-white
                   text-gray-600 transition-all duration-300
                   hover:-translate-y-1 hover:border-blue-600
                   hover:bg-blue-600 hover:text-white
                   dark:border-gray-700 dark:bg-gray-900
                   dark:text-gray-400"
          >
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166
                6.839 9.489.5.092.682-.217.682-.483
                0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342
                -3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466
                -.908-.621.069-.608.069-.608 1.004.071
                1.532 1.032 1.532 1.032.892 1.529 2.341
                1.087 2.91.831.091-.647.349-1.087.636-1.338
                -2.22-.253-4.555-1.11-4.555-4.943
                0-1.091.39-1.984 1.029-2.683
                -.103-.253-.446-1.27.098-2.647
                0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112
                6.844a9.56 9.56 0 012.504.337c1.909-1.294
                2.748-1.025 2.748-1.025.546 1.377.203
                2.394.1 2.647.64.699 1.028 1.592
                1.028 2.683 0 3.842-2.339 4.687-4.566
                4.935.359.309.678.919.678 1.852
                0 1.336-.012 2.415-.012 2.744
                0 .268.18.579.688.481A10.001 10.001
                0 0022 12c0-5.523-4.477-10-10-10z"
                clip-rule="evenodd"
              />
            </svg>
          </a>


          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/mariono-silaban-a0587a26a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="flex h-10 w-10 items-center justify-center
                   rounded-full border border-gray-200 bg-white
                   text-gray-600 transition-all duration-300
                   hover:-translate-y-1 hover:border-blue-600
                   hover:bg-blue-600 hover:text-white
                   dark:border-gray-700 dark:bg-gray-900
                   dark:text-gray-400"
          >
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
                -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
                c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37
                4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0
                110-4.123 2.062 2.062 0 010 4.123zM7.119
                20.452H3.555V9h3.564v11.452z"
              />
            </svg>
          </a>


          <!-- Email -->
          <a
            href="mailto:silabanmariono91@gmail.com"
            aria-label="Email"
            class="flex h-10 w-10 items-center justify-center
                   rounded-full border border-gray-200 bg-white
                   text-gray-600 transition-all duration-300
                   hover:-translate-y-1 hover:border-blue-600
                   hover:bg-blue-600 hover:text-white
                   dark:border-gray-700 dark:bg-gray-900
                   dark:text-gray-400"
          >
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5
                0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5
                2.5 0 013 16.5v-9z"
              />

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.5 7l8.5 6 8.5-6"
              />
            </svg>
          </a>

        </div>
      </div>


      <!-- Copyright -->
      <div
        class="flex justify-center
               pt-6 text-center text-sm
               text-gray-500 dark:text-gray-500"
      >
        <p>
          © {{ new Date().getFullYear() }}
          <span
            class="font-medium text-gray-700 dark:text-gray-300"
          >
            Mariono Silaban
          </span>
          . All rights reserved.
        </p>
      </div>

    </div>
  </footer>
</template>