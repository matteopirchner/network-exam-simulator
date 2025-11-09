import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  onAnswerSelect,
}: QuestionCardProps) => {
  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs">
            {question.category}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={cn(
                "w-full text-left p-4 rounded-lg border-2 transition-all",
                "hover:border-primary hover:bg-accent/50",
                selectedAnswer === index
                  ? "border-primary bg-accent text-accent-foreground"
                  : "border-border bg-card"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold",
                    selectedAnswer === index
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border"
                  )}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
