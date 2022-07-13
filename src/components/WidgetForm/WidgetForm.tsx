import { BugBeetle, Lightbulb, ChatText } from "phosphor-react";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const FeedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      lg: <BugBeetle className='ml-2' size={50} />,
      sm: <BugBeetle size={30} />,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      lg: <Lightbulb size={50} />,
      sm: <Lightbulb size={30} />,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      lg: <ChatText size={50} />,
      sm: <ChatText size={30} />,
      alt: "Imagem de um balão de escrita",
    },
  },
};

export type FeedbackType = keyof typeof FeedBackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleFeedbackRestart() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSucessStep onClickNewFeedback={handleFeedbackRestart} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              feedbackType={feedbackType}
              onRestartFeedback={handleFeedbackRestart}
            />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ❤️ por{" "}
        <a
          className='underline underline-offset-2'
          href='https://github.com/natanmario'
          target='_blank'
        >
          Natan Mário
        </a>
      </footer>
    </div>
  );
}
