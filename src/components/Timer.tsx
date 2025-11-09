import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimerProps {
  initialMinutes: number;
  onTimeUp: () => void;
}

export const Timer = ({ initialMinutes, onTimeUp }: TimerProps) => {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, onTimeUp]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isWarning = minutes < 30;
  const isCritical = minutes < 10;

  return (
    <Card
      className={cn(
        "p-4 border-2",
        isCritical && "border-destructive bg-destructive/5",
        isWarning && !isCritical && "border-orange-500 bg-orange-50 dark:bg-orange-950/20"
      )}
    >
      <div className="flex items-center gap-3">
        {isCritical ? (
          <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
        ) : (
          <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        )}
        <div className="flex-1">
          <div className="text-xs text-muted-foreground mb-1">Time Remaining</div>
          <div
            className={cn(
              "text-2xl font-bold tabular-nums",
              isCritical && "text-destructive",
              isWarning && !isCritical && "text-orange-600 dark:text-orange-400"
            )}
          >
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </div>
        </div>
      </div>
    </Card>
  );
};
