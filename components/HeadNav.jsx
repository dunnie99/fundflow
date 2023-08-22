import Link from "next/link"

export const HeadNav = () => {
  return (
    <nav
      className="relative flex w-full items-center justify-between bgCol py-2 md:py-10 sm:px-16 px-6"
      data-te-navbar-ref>
      <div className="flex w-full justify-between items-center">
        <div className="">
          <Link href="/" className="text-md sm:text-3xl geostar_font uppercase text-[#fefefe]">
            Fundflow
          </Link>
        </div>

        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false"
          aria-label="Toggle navigation">

          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7">
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>


        <div
          className="!visible mt-2 hidden mono_font text-2xl items-center md:mt-0 md:!flex md:basis-auto"
          id="navbarSupportedContent3"
          data-te-collapse-item>

          <div
            className="list-style-none mr-auto flex flex-col pl-0 md:mt-1 md:flex-row text-white"
            data-te-navbar-nav-ref>

            <div
              className="my-4 pl-2 md:my-0 md:pl-2 md:pr-1"
              data-te-nav-item-ref>
              <Link
                className="md:px-2 "
                aria-current="page"
                href="/governance"
                data-te-nav-link-ref
              >Governance</Link >
            </div>

            <div
              className="mb-4 pl-2 md:mb-0 md:pl-0 md:pr-1"
              data-te-nav-item-ref>
              <Link
                className="p-0 transition duration-200 hover:ease-in-out motion-reduce:transition-none md:px-2"
                href="/docs"
                data-te-nav-link-ref
              >Docs</Link>
            </div>

            <div
              className="mb-4 pl-2 md:mb-0 md:pl-0 md:pr-1"
              data-te-nav-item-ref>
              <Link
                href="/developers"
                className="p-0 transition duration-200 motion-reduce:transition-none md:px-2"
                data-te-nav-link-ref
              >Developers</Link>
            </div>
          </div>
        </div>

        <Link
          href="#"
          className="!visible mt-2 hidden bg-[#CDCFDE] py-4 px-9 rounded-2xl flex-gro basis-[100%] items-center md:mt-0 md:!flex md:basis-auto"
          id="navbarSupportedContent3"
          data-te-collapse-item>

          <div
            className="list-style-none mr-auto flex flex-col pl-0 md:mt-1 md:flex-row"
            data-te-navbar-nav-ref>

            <div
              className="mb-4 pl-2 md:mb-0 md:pl-0 md:pr-1"
              data-te-nav-item-ref>
              <span
                className="p-0 mono_font text-2xl  transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 motion-reduce:transition-none md:px-2"
                data-te-nav-link-ref>Launch Apps</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  )
}