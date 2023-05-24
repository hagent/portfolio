import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <div>Alexey</div>
        <div className='opacity-50'>I&apos;m a software engineer (but when I need to be I&apos;m not so soft)</div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Next.JS
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Keyword for recruiters - React.js
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            TypeScript
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Types are cool
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Node.js
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            I can backend too
          </p>
        </div>

      </div>
    </main>
  )
}
