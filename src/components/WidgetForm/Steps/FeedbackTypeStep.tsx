import { CloseButton } from "../../CloseButton";
import { FeedbackType, FeedBackTypes } from "../WidgetForm";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className='flex py-8 gap-2 w-full justify-center items-center'>
        {Object.entries(FeedBackTypes).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
          >
            <span>{value.image.lg}</span>
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
