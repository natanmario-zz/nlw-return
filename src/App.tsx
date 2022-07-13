import { Widget } from "./components/Widget";

export function App() {
  return (
    <div className='flex justify-center h-screen'>
      <img src='/dev.svg' className='md:w-96 w-44' />
      <Widget />
    </div>
  );
}
