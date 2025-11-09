import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";
import { ResultsScreen } from "@/components/ResultsScreen";
import { WelcomeScreen } from "@/components/WelcomeScreen";

export interface Answer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

const Index = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const question = questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;

    const newAnswer: Answer = {
      questionId: question.id,
      selectedAnswer,
      isCorrect,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
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

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!started) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (showResults) {
    return (
      <ResultsScreen
        answers={answers}
        questions={questions}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">
              CCNA 200-301 Prüfungssimulator
            </h1>
            <div className="text-sm text-muted-foreground">
              Frage {currentQuestion + 1} von {questions.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <QuestionCard
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
        />

        <div className="mt-6 flex justify-between">
          <Button
            variant="secondary"
            onClick={handleRestart}
            className="w-32"
          >
            Abbrechen
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="w-32"
          >
            {currentQuestion === questions.length - 1 ? "Beenden" : "Weiter"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
