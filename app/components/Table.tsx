// we define two variables, one holding data, and one holding a value if the promise
//was resolved
let myData: any = undefined;
let promise: any = undefined;
// our React component which will be rendered inside Suspense boundaries
export default function Table() {
  //our method which will be fired when we call the component
  const waitForData = () => {
    //if data already there, we return it and render is done, if not the Spinner is spinning
    if (myData) return myData;
    // an array to remember already computed values
    if (!promise)
      promise = fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
        { cache: 'no-store' }
      )
        .then((res) => res.json())
        .then((d) => {
          setTimeout(() => {
            myData = d;
          }, 10000)
        });
    // we can also throw a new Promise with rejection like below
    // throw new Promise((undefined,rej)=>rej())
    throw promise;
  };

  const data = waitForData();
  // we fill in what is returned from the typicode API, if no data returned we display
  // a fixed message
  return (
    <div className="w-full flex justify-center items-center h-screen">
      Table component
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};