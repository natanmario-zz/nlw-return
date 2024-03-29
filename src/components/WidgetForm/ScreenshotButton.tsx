import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotToke: (sreenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotToke,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotToke(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    console.log(screenshot);

    return (
      <button
        type='button'
        onClick={() => onScreenshotToke(null)}
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end
        text-zinc-400 hover:text-zinc-100 transition-colors'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: "cover",
          backgroundPosition: "65%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Trash weight='fill' />
      </button>
    );
  }

  return (
    <button
      type='button'
      onClick={handleTakeScreenshot}
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className='w-6 h-6 text-zinc-100' />
      )}
    </button>
  );
}
