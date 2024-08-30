import type { Story } from "@ladle/react";
import "../output.css";

export const Link: Story = () => {
  return (
    <div className="p-4">
      <div class="flex flex-col gap-y-2">
        <div class="inline-flex flex-wrap gap-2">
          <div>
            <span class="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              Connected
            </span>
          </div>

          <div>
            <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              Attention
            </span>
          </div>

          <div>
            <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-500/10 dark:text-blue-500">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" x2="12" y1="2" y2="6"></line>
                <line x1="12" x2="12" y1="18" y2="22"></line>
                <line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line>
                <line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line>
                <line x1="2" x2="6" y1="12" y2="12"></line>
                <line x1="18" x2="22" y1="12" y2="12"></line>
                <line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line>
                <line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line>
              </svg>
              Loading
            </span>
          </div>

          <div>
            <span class="py-1 px-2 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-500/20 dark:text-neutral-400">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                <line x1="12" x2="12" y1="2" y2="12"></line>
              </svg>
              Disabled
            </span>
          </div>
        </div>

        <div class="inline-flex flex-wrap gap-2">
          <div>
            <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              14.5%
            </span>
          </div>

          <div>
            <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                <polyline points="16 17 22 17 22 11"></polyline>
              </svg>
              2%
            </span>
          </div>

          <div>
            <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md dark:bg-neutral-500/20 dark:text-neutral-400">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              37.3%
            </span>
          </div>

          <div>
            <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md dark:bg-neutral-500/20 dark:text-neutral-400">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                <polyline points="16 17 22 17 22 11"></polyline>
              </svg>
              56%
            </span>
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-800 text-sm py-3 dark:bg-white">
          <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center justify-between">
              <a
                class="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80 dark:text-neutral-800"
                href="#"
              >
                Brand
              </a>
              <div class="sm:hidden">
                <button
                  type="button"
                  class="hs-collapse-toggle relative size-7 flex justify-center items-center gap-2 rounded-lg border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/20 focus:outline-none focus:bg-gray-700/20 text-sm dark:bg-white dark:hover:bg-gray-100 dark:border-gray-200 dark:text-gray-600 dark:focus:bg-gray-100"
                  id="hs-navbar-dark-collapse"
                  aria-expanded="false"
                  aria-controls="hs-navbar-dark"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-navbar-dark"
                >
                  <svg
                    class="hs-collapse-open:hidden shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    class="hs-collapse-open:block hidden shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span class="sr-only">Toggle</span>
                </button>
              </div>
            </div>
            <div
              id="hs-navbar-dark"
              class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
              aria-labelledby="hs-navbar-dark-collapse"
            >
              <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a
                  class="font-medium text-white focus:outline-none dark:text-black"
                  href="#"
                  aria-current="page"
                >
                  Landing
                </a>
                <a
                  class="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  href="#"
                >
                  Account
                </a>
                <a
                  class="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  href="#"
                >
                  Work
                </a>
                <a
                  class="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  href="#"
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </header>

        <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-blue-600 text-sm py-3">
          <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center justify-between">
              <a
                class="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
                href="#"
              >
                Brand
              </a>
              <div class="sm:hidden">
                <button
                  type="button"
                  class="hs-collapse-toggle relative size-7 flex justify-center items-center gap-2 rounded-lg border border-white/20 font-medium bg-blue-600 text-white shadow-sm align-middle hover:bg-white/10 focus:outline-none focus:bg-white/10 text-sm"
                  id="hs-navbar-primary-collapse"
                  aria-expanded="false"
                  aria-controls="hs-navbar-primary"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-navbar-primary"
                >
                  <svg
                    class="hs-collapse-open:hidden shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    class="hs-collapse-open:block hidden shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="hs-navbar-primary"
              class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
              aria-labelledby="hs-navbar-primary-collapse"
            >
              <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a
                  class="font-medium text-white focus:outline-none"
                  href="#"
                  aria-current="page"
                >
                  Landing
                </a>
                <a
                  class="font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
                  href="#"
                >
                  Account
                </a>
                <a
                  class="font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
                  href="#"
                >
                  Work
                </a>
                <a
                  class="font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
                  href="#"
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
