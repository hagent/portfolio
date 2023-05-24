import { Suspense } from "react";
import TestMain from "@components/TestMain";

export default async function Test() {
  console.log('test page')

  const todo2 = await (await fetch("https://jsonplaceholder.typicode.com/todos/2", {
    cache: "no-store",
  })).json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test page
      <pre>
        {JSON.stringify(todo2, null, 2)}
      </pre>
      <TestMain />
    </main>
  );
}
