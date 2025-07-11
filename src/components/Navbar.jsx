import Link from "next/link";

const Navbar = () => {
  return (
    <div className="min-h-full">
        <nav className="bg-white">
          <div className="max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img className="size-8" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"></img>
                </div>
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="rounded-md bg-gray-200 px-3 py-2 text-sm text-black hover:bg-gray-300" aria-current="page">Home</Link>
                  <Link href="/projects" className="rounded-md px-3 py-2 text-sm text-black hover:bg-gray-100">
                    Projects
                  </Link>
                  <Link href="/design" className="rounded-md px-3 py-2 text-sm text-black hover:bg-gray-100">
                    Design
                  </Link>
                  <Link href="/orb" className="rounded-md px-3 py-2 text-sm text-black hover:bg-gray-100">
                    Orb
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;