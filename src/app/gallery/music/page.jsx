import SetNavbarColor from '@/components/SetNavbarColor';

export default function Music () {
  return (
    <div>
      <SetNavbarColor color="white" bgColor="[#ffffff00]" />
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src="/music/pyre-cover.png"
          alt="Lighter of Pyres artwork"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-[30rem] flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-white mb-12">Music</h1>
        </div>
      </div>
      <main>
        <div className="py-24 gap-12">
          <p>
            Music section under construction.
          </p>
        </div>
      </main>
    </div>
  );
}
