import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";
import { ResultsScreen } from "@/components/ResultsScreen";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { Timer } from "@/components/Timer";
import { toast } from "sonner";

export interface Answer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Index = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // Randomize questions and select 100-120 questions for the exam (realistic CCNA exam)
  const randomizedQuestions = useMemo(() => {
    const shuffled = shuffleArray(questions);
    const examQuestionCount = Math.floor(Math.random() * 21) + 100; // Random between 100-120
    return shuffled.slice(0, examQuestionCount);
  }, [started]);

  const handleStart = () => {
    setStarted(true);
    // Toast will show the actual number of questions after randomization
    setTimeout(() => {
      toast.success(`Exam started! ${Math.floor(Math.random() * 21) + 100} questions - 120 minutes to complete.`);
    }, 100);
  };

  const handleTimeUp = useCallback(() => {
    toast.error("Time's up! Your exam has been submitted.");
    setShowResults(true);
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const question = randomizedQuestions[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;

    const newAnswer: Answer = {
      questionId: question.id,
      selectedAnswer,
      isCorrect,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestion < randomizedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const progress = ((currentQuestion + 1) / randomizedQuestions.length) * 100;

  if (!started) {
    return <WelcomeScreen onStart={handleStart} totalQuestions={questions.length} />;
  }

  if (showResults) {
    return (
      <ResultsScreen
        answers={answers}
        questions={randomizedQuestions}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Timer initialMinutes={120} onTimeUp={handleTimeUp} />
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">
              CCNA 200-301 Exam Simulator
            </h1>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {randomizedQuestions.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <QuestionCard
          question={randomizedQuestions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
        />

        <div className="mt-6 flex justify-between">
          <Button
            variant="secondary"
            onClick={handleRestart}
            className="w-32"
          >
            Cancel
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="w-32"
          >
            {currentQuestion === randomizedQuestions.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
