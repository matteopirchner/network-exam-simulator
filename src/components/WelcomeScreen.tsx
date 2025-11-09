import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">
            CCNA 200-301 Prüfungssimulator
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Bereite dich optimal auf die Cisco CCNA Zertifizierung vor
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-lg">Prüfungsdetails:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>120 Fragen zu allen CCNA-Themen</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Deckung aller Prüfungsbereiche: Netzwerkgrundlagen, IP-Konnektivität, Sicherheit, Automatisierung</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Authentisches Prüfungsformat mit Multiple-Choice-Fragen</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Detaillierte Auswertung und Erklärungen am Ende</span>
              </li>
            </ul>
          </div>

          <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
            <p className="text-sm">
              <strong>Hinweis:</strong> Diese Simulation entspricht dem Aufbau der echten CCNA 200-301 Prüfung.
              Nimm dir Zeit für jede Frage und lies sie aufmerksam durch.
            </p>
          </div>

          <Button
            onClick={onStart}
            size="lg"
            className="w-full text-lg h-12"
          >
            Prüfung starten
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
