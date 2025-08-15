import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/exprt.png"
          alt="Exprt logo"
          width={180}
          height={54}
          priority
        />
        <h1 className="font-bold text-6xl">
          Your Go-to <span className="text-[#01FF70]">Exp</span>ense
          <br/>
          Expe<span className="text-[#01FF70]">rt</span>.
        </h1>
        <p className="text-lg">Sign up to track your spending in multi-currencies simulataneously with <br />sleek, user-friendly UI.</p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#01FF70] text-foreground gap-2 hover:brightness-125 transition duration-300 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
      </main>
    </div>
  );
}
