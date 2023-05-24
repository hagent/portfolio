import dynamic from "next/dynamic";
import Image from "next/image";
import Table from "@components/Table";
import { Suspense } from "react";

const SuspenseTable = dynamic(() => import("@components/Table"), {
  ssr: true,
  loading: () => (
    <div className="w-full flex justify-center items-center h-screen">
      ...loading
    </div>
  ),
});

export default function TestMain() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-full flex justify-center items-center h-screen">
            ...loading
          </div>
        }
      >
        <SuspenseTable />
      </Suspense>
    </>
  );
}
