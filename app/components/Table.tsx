import { useRef } from "react";

function wait(seconds: number) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

export default function Table() {
  let promise: Promise<any> | undefined;
  let promiseResult: any | undefined;
  const waitForData = () => {
    if (promiseResult) return promiseResult;
    if (promise) throw promise;

    promise = fetch(
      "https://jsonplaceholder.typicode.com/todos/" + Math.round(Math.random() * 3) + 1,
    )
      .then((res) => res.json())
      .then((d) => {
        d.random = Math.random();
        promiseResult = d;
        return wait(5);
      });

    throw promise;
  };

  const data = waitForData();
  return (
    <div className="w-full flex justify-center items-center h-screen">
      Table component
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};