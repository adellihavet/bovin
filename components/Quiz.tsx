
import React, { useState } from 'react';
import { CheckCircle2, XCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { QuizQuestion, QuizLabels } from '../types';

interface QuizProps {
  data: { title: string; questions: QuizQuestion[] };
  onComplete: () => void;
  onScore: (score: number) => void;
  labels: QuizLabels;
}

const Quiz: React.FC<QuizProps> = ({ data, onComplete, onScore, labels }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
  const [localScore, setLocalScore] = useState(0);

  const currentQ = data.questions[currentQIndex];
  const isLastQuestion = currentQIndex === data.questions.length - 1;

  const handleSelect = (id: string) => {
    if (isAnswered) return;
    setSelectedOption(id);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    
    const option = currentQ.options.find(o => o.id === selectedOption);
    const isCorrect = option?.isCorrect || false;

    setIsAnswered(true);
    setFeedback({
      isCorrect,
      text: currentQ.explanation
    });

    if (isCorrect) setLocalScore(prev => prev + 1);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onScore(localScore);
      onComplete();
    } else {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setFeedback(null);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
          <h3 className="text-xl font-heading font-bold text-academic-accent flex items-center gap-3">
            <Lightbulb size={24} />
            {data.title}
          </h3>
          <span className="text-slate-500 text-sm font-mono bg-black/20 px-3 py-1 rounded-full">
            {labels.question} {currentQIndex + 1} / {data.questions.length}
          </span>
        </div>

        {/* Question */}
        <h4 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-relaxed">
          {currentQ.text}
        </h4>

        {/* Options */}
        <div className="space-y-4">
          {currentQ.options.map((opt) => {
            let baseClass = "w-full p-5 rounded-xl border-2 transition-all duration-300 flex items-center justify-between group relative overflow-hidden ";
            
            if (isAnswered) {
              if (opt.isCorrect) baseClass += "border-green-500 bg-green-900/20 text-green-100";
              else if (selectedOption === opt.id) baseClass += "border-red-500 bg-red-900/20 text-red-100";
              else baseClass += "border-white/5 opacity-40";
            } else {
              if (selectedOption === opt.id) baseClass += "border-academic-primary bg-academic-primary/10 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]";
              else baseClass += "border-white/10 hover:border-white/30 hover:bg-white/5 text-slate-300";
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={isAnswered}
                className={baseClass}
              >
                <span className="text-lg font-medium relative z-10 mx-2">{opt.text}</span>
                {isAnswered && opt.isCorrect && <CheckCircle2 className="text-green-400 relative z-10" />}
                {isAnswered && !opt.isCorrect && selectedOption === opt.id && <XCircle className="text-red-400 relative z-10" />}
              </button>
            );
          })}
        </div>

        {/* Feedback & Next */}
        {isAnswered && (
          <div className="mt-10 animate-slide-up">
            <div className={`p-6 rounded-2xl mb-8 ${feedback?.isCorrect ? 'bg-green-950/40 border border-green-500/30' : 'bg-red-950/40 border border-red-500/30'}`}>
              <p className="text-slate-200 leading-relaxed text-lg">
                <strong className={`block mb-2 text-xl ${feedback?.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {feedback?.isCorrect ? labels.excellentAnalysis : labels.incorrectAssessment}
                </strong>
                {feedback?.text}
              </p>
            </div>
            
            <button
              onClick={handleNext}
              className="w-full py-4 bg-gradient-to-r from-academic-primary to-blue-600 hover:to-blue-500 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3"
            >
              {isLastQuestion ? labels.completeSelection : labels.nextQuestion}
              <ArrowRight className="rtl:rotate-180" />
            </button>
          </div>
        )}

        {!isAnswered && (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="mt-10 w-full py-4 bg-slate-800 border border-white/10 rounded-xl font-bold text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 hover:text-white transition-all"
          >
            {labels.confirmSelection}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
