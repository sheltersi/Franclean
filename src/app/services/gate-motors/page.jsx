import Section from "@/components/Section";

export const metadata = {
  title: "Gate Motors & Automation | ProGate",
};

export default function GateMotorsPage() {
  return (
    <Section title="Gate Motors & Automation">
      <div className="space-y-4 text-slate-700 text-sm">
        <p>
          We install, repair and upgrade sliding and swing gate motors for homes and small
          businesses. We work with popular brands like Centurion and ET Nice.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>New motor installations</li>
          <li>Motor repairs and fault finding</li>
          <li>Upgrading manual gates to automatic</li>
          <li>Backup battery installation</li>
          <li>Solar gate motor options</li>
          <li>Anti-theft motor cages</li>
          <li>Safety checks and settings</li>
        </ul>
        <p>
          Not sure what you need? Send us a photo of your gate and motor, and we’ll advise on the best
          solution.
        </p>
      </div>
    </Section>
  );
}
