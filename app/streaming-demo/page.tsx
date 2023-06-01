import { Suspense } from "react";
import { cookies } from 'next/headers';

function wait(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function VerySlowComponent() {
  await wait(10)

  return (
    <div>
      very slow component (10 seconds delay)
    </div>
  );
}

async function SlowComponent() {
  await wait(5)

  return (
    <div>
      slow component
    </div>
  );
}

export default async function Page() {
  const cookiesValues = cookies();
  console.log(cookiesValues)
  await wait(1)

  return (
    <main>
      <div>component top</div>
      {/* @ts-expect-error Server Component */}
      <SlowComponent />
      
      <Suspense fallback="loading...">
        {/* @ts-expect-error Server Component */}
        <VerySlowComponent />
      </Suspense>
    </main>
  );
}
