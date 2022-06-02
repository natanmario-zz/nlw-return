import { CheckCircle } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onClickNewFeedback: () => void;
}

export function FeedbackSucessStep({
  onClickNewFeedback,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className='flex flex-col items-center pt-6 pb-10 w-[304px]'>
        <CheckCircle size={60} />
        <span className='text-xl mt-2'>Agradecemos seu feedback!</span>

        <button
          onClick={onClickNewFeedback}
          className='py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent
            text-sm leading-6 hover:bg-zinc-700 transition-colors
            focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none '
        >
          Novo feedback
        </button>
      </div>
    </>
  );
}
