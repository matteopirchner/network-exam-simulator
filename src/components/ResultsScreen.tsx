import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, TrendingUp, Award, AlertTriangle, BookOpen } from "lucide-react";
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

        {/* Feedback and Recommendations Section */}
        <Card className="p-6 mt-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Performance Feedback & Learning Recommendations
          </h2>
          
          {/* Weak Areas */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Areas Needing Improvement
            </h3>
            <div className="space-y-2">
              {Object.entries(categoryStats)
                .filter(([_, stats]) => (stats.correct / stats.total) * 100 < 70)
                .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
                .map(([category, stats]) => {
                  const percentage = ((stats.correct / stats.total) * 100).toFixed(0);
                  return (
                    <div key={category} className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{category}</span>
                        <Badge variant="destructive">{percentage}% correct</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {getRecommendation(category, Number(percentage))}
                      </p>
                    </div>
                  );
                })}
              {Object.entries(categoryStats).every(([_, stats]) => (stats.correct / stats.total) * 100 >= 70) && (
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-foreground font-medium">Great job! All categories above 70%</p>
                  <p className="text-sm text-muted-foreground mt-1">Continue practicing to maintain your knowledge</p>
                </div>
              )}
            </div>
          </div>

          {/* Study Recommendations */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              What to Study Next
            </h3>
            <div className="grid gap-3">
              {getStudyRecommendations(categoryStats).map((rec, index) => (
                <div key={index} className="p-4 bg-card border border-border rounded-lg">
                  <h4 className="font-medium text-foreground mb-1">{rec.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {rec.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Feedback */}
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">Overall Assessment</h3>
            <p className="text-sm text-foreground">
              {getOverallFeedback(percentage, categoryStats)}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Helper functions for recommendations
function getRecommendation(category: string, percentage: number): string {
  const recommendations: Record<string, string> = {
    "Network Fundamentals": "Review OSI and TCP/IP models, network topologies, and cable types. Focus on understanding how different layers interact.",
    "IP Addressing": "Practice subnetting calculations, VLSM, and CIDR notation. Use subnet calculators to verify your work.",
    "Routing Protocols": "Study OSPF, EIGRP, and BGP configuration. Focus on route advertisement, metrics, and convergence.",
    "Switching": "Review VLANs, trunking, STP, and EtherChannel. Practice switch port configuration commands.",
    "Security": "Focus on ACLs, port security, AAA, and basic security best practices. Understand attack types and mitigation.",
    "Wireless": "Study wireless standards (802.11), security protocols (WPA2/WPA3), and controller vs autonomous APs.",
    "Automation": "Learn REST APIs, JSON/XML, Python basics for network automation, and configuration management tools.",
    "Network Services": "Review DHCP, DNS, NAT, NTP, and SNMP configuration and troubleshooting.",
    "Troubleshooting": "Practice systematic troubleshooting methodology. Use show commands and debug techniques effectively."
  };
  
  return recommendations[category] || "Review the fundamentals and practice configuration scenarios.";
}

function getStudyRecommendations(categoryStats: Record<string, { correct: number; total: number }>): Array<{ title: string; description: string; topics: string[] }> {
  const recommendations = [];
  
  // Priority 1: Categories below 60%
  const criticalAreas = Object.entries(categoryStats)
    .filter(([_, stats]) => (stats.correct / stats.total) * 100 < 60)
    .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total));
  
  if (criticalAreas.length > 0) {
    const [category] = criticalAreas[0];
    recommendations.push({
      title: `🎯 Priority: ${category}`,
      description: "This area needs immediate attention. Focus here first.",
      topics: getTopicsForCategory(category)
    });
  }
  
  // Priority 2: Categories between 60-75%
  const improvementAreas = Object.entries(categoryStats)
    .filter(([_, stats]) => {
      const pct = (stats.correct / stats.total) * 100;
      return pct >= 60 && pct < 75;
    });
  
  if (improvementAreas.length > 0) {
    const [category] = improvementAreas[0];
    recommendations.push({
      title: `📚 Strengthen: ${category}`,
      description: "You have a foundation, but need more practice.",
      topics: getTopicsForCategory(category)
    });
  }
  
  // Always include a general tip
  recommendations.push({
    title: "💡 General Study Tips",
    description: "Best practices for CCNA exam preparation.",
    topics: [
      "Practice packet tracer labs for hands-on experience",
      "Review incorrect answers to understand your mistakes",
      "Create flashcards for command syntax and protocols",
      "Join study groups or forums for discussion",
      "Take regular practice exams to track progress"
    ]
  });
  
  return recommendations;
}

function getTopicsForCategory(category: string): string[] {
  const topics: Record<string, string[]> = {
    "Network Fundamentals": [
      "OSI and TCP/IP model layers and protocols",
      "Network topologies and architectures",
      "Cable types and standards (Ethernet, fiber)",
      "IP addressing basics and binary conversion"
    ],
    "IP Addressing": [
      "Subnetting and VLSM calculations",
      "IPv4 vs IPv6 addressing",
      "CIDR notation and summarization",
      "Private vs public IP addresses"
    ],
    "Routing Protocols": [
      "OSPF configuration and areas",
      "EIGRP metrics and configuration",
      "BGP basics and route selection",
      "Static routing and default routes"
    ],
    "Switching": [
      "VLAN creation and assignment",
      "Trunk ports and 802.1Q",
      "Spanning Tree Protocol (STP)",
      "EtherChannel and link aggregation"
    ],
    "Security": [
      "Access Control Lists (ACLs)",
      "Port security and DHCP snooping",
      "AAA and TACACS+",
      "Common security threats and mitigation"
    ],
    "Wireless": [
      "802.11 standards and frequencies",
      "WPA2/WPA3 and security modes",
      "Wireless LAN controllers",
      "SSID and channel planning"
    ],
    "Automation": [
      "REST API basics and HTTP methods",
      "JSON and XML data formats",
      "Python for network automation",
      "Configuration management tools"
    ],
    "Network Services": [
      "DHCP operation and configuration",
      "DNS resolution and records",
      "NAT types (static, dynamic, PAT)",
      "NTP, SNMP, and Syslog"
    ],
    "Troubleshooting": [
      "Systematic troubleshooting approach",
      "Common show commands",
      "Ping, traceroute, and debug tools",
      "Log analysis and error messages"
    ]
  };
  
  return topics[category] || [
    "Review official Cisco documentation",
    "Practice lab exercises",
    "Study command syntax and examples"
  ];
}

function getOverallFeedback(percentage: number, categoryStats: Record<string, { correct: number; total: number }>): string {
  const weakCategories = Object.entries(categoryStats).filter(([_, stats]) => (stats.correct / stats.total) * 100 < 70).length;
  
  if (percentage >= 85) {
    return `Excellent performance! You're well-prepared for the CCNA exam. ${weakCategories > 0 ? `Focus on ${weakCategories} remaining weak area${weakCategories > 1 ? 's' : ''} to achieve mastery.` : 'Continue practicing to maintain your high level of knowledge.'}`;
  } else if (percentage >= 75) {
    return `Good job! You're on the right track. ${weakCategories > 0 ? `Work on improving ${weakCategories} area${weakCategories > 1 ? 's' : ''} where you scored below 70%.` : 'Keep studying to reach the excellence level.'} Focus on hands-on practice with packet tracer or real equipment.`;
  } else if (percentage >= 60) {
    return `You have a foundation, but need more preparation. ${weakCategories} area${weakCategories > 1 ? 's need' : ' needs'} significant improvement. Review the fundamentals, practice more labs, and retake practice exams regularly to track your progress.`;
  } else {
    return `More study time is needed before taking the actual CCNA exam. Focus on understanding core concepts first, then move to configuration and troubleshooting. Consider taking a structured course or using official Cisco study materials. Don't rush - take time to build a solid foundation.`;
  }
}
