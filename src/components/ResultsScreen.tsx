import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, TrendingUp, Award, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { Answer } from "@/pages/Index";
import type { Question } from "@/data/questions";
import { cn } from "@/lib/utils";

interface ResultsScreenProps {
  answers: Answer[];
  questions: Question[];
  onRestart: () => void;
}

export const ResultsScreen = ({
  answers,
  questions,
  onRestart,
}: ResultsScreenProps) => {
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const totalAnswered = answers.length;
  const totalQuestions = questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 70;

  // Calculate category statistics
  const categoryStats = questions.reduce((acc, question) => {
    const answer = answers.find((a) => a.questionId === question.id);
    if (!acc[question.category]) {
      acc[question.category] = { correct: 0, total: 0, answered: 0 };
    }
    acc[question.category].total++;
    if (answer) {
      acc[question.category].answered++;
      if (answer.isCorrect) {
        acc[question.category].correct++;
      }
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number; answered: number }>);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <Card className="mb-8 border-2">
          <CardHeader className="text-center pb-4">
            <div
              className={cn(
                "mx-auto mb-4 h-20 w-20 rounded-full flex items-center justify-center",
                passed ? "bg-success/10" : "bg-destructive/10"
              )}
            >
              {passed ? (
                <Award className="h-10 w-10 text-success" />
              ) : (
                <XCircle className="h-10 w-10 text-destructive" />
              )}
            </div>
            <CardTitle className="text-3xl font-bold mb-2">
              {passed ? "Passed!" : "Not Passed"}
            </CardTitle>
            <p className="text-muted-foreground">
              You answered {correctCount} out of {totalQuestions} questions correctly
            </p>
            {totalAnswered < totalQuestions && (
              <div className="mt-2 flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm">
                  {totalQuestions - totalAnswered} questions were not answered
                </span>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">
                  {percentage}%
                </div>
                <Progress value={percentage} className="h-3 mb-4" />
                <p className="text-sm text-muted-foreground">
                  {passed
                    ? "You achieved the required passing score of 70%"
                    : "You need at least 70% to pass"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Performance by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(categoryStats)
                .sort((a, b) => b[1].total - a[1].total)
                .map(([category, stats]) => {
                  const categoryPercentage = stats.answered > 0
                    ? Math.round((stats.correct / stats.answered) * 100)
                    : 0;
                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{category}</span>
                        <span className="text-sm text-muted-foreground">
                          {stats.correct}/{stats.answered} answered ({categoryPercentage}%)
                        </span>
                      </div>
                      <Progress value={categoryPercentage} className="h-2" />
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Detailed Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {questions.map((question, index) => {
                const answer = answers.find((a) => a.questionId === question.id);
                const isCorrect = answer?.isCorrect || false;
                const wasAnswered = answer !== undefined;

                return (
                  <div
                    key={question.id}
                    className="border-b border-border pb-6 last:border-0"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      {!wasAnswered ? (
                        <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                      ) : isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {question.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Question {index + 1}
                          </span>
                          {!wasAnswered && (
                            <Badge variant="outline" className="text-xs border-orange-500 text-orange-600">
                              Not Answered
                            </Badge>
                          )}
                        </div>
                        <p className="font-medium mb-3">{question.question}</p>

                        <div className="space-y-2 mb-3">
                          {question.options.map((option, optionIndex) => {
                            const isSelected =
                              answer?.selectedAnswer === optionIndex;
                            const isCorrectOption =
                              question.correctAnswer === optionIndex;

                            return (
                              <div
                                key={optionIndex}
                                className={cn(
                                  "p-3 rounded-lg border",
                                  isCorrectOption && "border-success bg-success/10",
                                  isSelected &&
                                    !isCorrectOption &&
                                    "border-destructive bg-destructive/10",
                                  !isSelected &&
                                    !isCorrectOption &&
                                    "border-border bg-muted/30"
                                )}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-sm">
                                    {String.fromCharCode(65 + optionIndex)}.
                                  </span>
                                  <span className="text-sm">{option}</span>
                                  {isCorrectOption && (
                                    <Badge
                                      variant="outline"
                                      className="ml-auto text-xs border-success text-success"
                                    >
                                      Correct Answer
                                    </Badge>
                                  )}
                                  {isSelected && !isCorrectOption && (
                                    <Badge
                                      variant="outline"
                                      className="ml-auto text-xs border-destructive text-destructive"
                                    >
                                      Your Answer
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="bg-accent/30 p-3 rounded-lg">
                          <p className="text-sm">
                            <strong>Explanation:</strong> {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button onClick={onRestart} size="lg" className="w-64">
            Start New Exam
          </Button>
        </div>
      </div>
    </div>
  );
};
