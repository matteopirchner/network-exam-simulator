import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, FileText, Award } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">
            CCNA 200-301 Exam Simulator
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Prepare effectively for your Cisco CCNA Certification
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">100-120</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">120</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">70%</div>
              <div className="text-sm text-muted-foreground">To Pass</div>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-lg">Exam Details:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Covers all CCNA topics: Network Fundamentals, IP Connectivity, Security, and Automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Authentic exam format with multiple-choice questions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Questions are randomly shuffled for each exam attempt</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Detailed scoring and explanations provided at the end</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>120-minute time limit with visual warnings at 30 and 10 minutes</span>
              </li>
            </ul>
          </div>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
            <p className="text-sm">
              <strong>Note:</strong> This simulation mirrors the actual CCNA 200-301 exam structure.
              Take your time with each question and read carefully. You cannot go back to previous questions.
            </p>
          </div>

          <Button
            onClick={onStart}
            size="lg"
            className="w-full text-lg h-12"
          >
            Start Exam
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
