import dynamic from 'next/dynamic';
import Image from 'next/image'
import Table from '@components/Table'
import { Suspense } from 'react'

const SuspenseTable = dynamic(
  () => import("@components/Table"),
  {
    ssr: true, loading: () =>
      <div className="w-full flex justify-center items-center h-screen">
        ...loading
      </div>
  }
);

export default function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test page

      <Suspense fallback={
        <div className="w-full flex justify-center items-center h-screen">
          ...loading
        </div>
      }>
        <SuspenseTable />
      </Suspense>

    </main>
  )
}
