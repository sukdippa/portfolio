import Link from "next/link";

const Navbar = () => {
  return (
    <div className="min-h-full">
        <nav>
          <div className="max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="ml-4 flex items-baseline space-x-4">
                  <Link href="/" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)]" aria-current="page">Home</Link>
                  <Link href="/work" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)]">
                    Work
                  </Link>
                  <Link href="/gallery" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)]">
                    Gallery
                  </Link>
                  <Link href="/about" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)]">
                    About
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