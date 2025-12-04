import Section from "@/components/Section";

export const metadata = {
  title: "Remote Coding & Access Control | ProGate",
};

export default function RemoteCodingPage() {
  return (
    <Section title="Remote Coding & Access Control">
      <div className="space-y-4 text-slate-700 text-sm">
        <p>
          Lost a remote, added a new tenant or your remote just stopped working? We handle remote
          programming and access control setup for gates and garage doors.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Programming new remotes</li>
          <li>Replacing lost or stolen remotes</li>
          <li>Deleting old remotes from memory</li>
          <li>Setting up one remote for both gate and garage</li>
          <li>Multi-button remote configuration</li>
        </ul>
        <p>
          If possible, keep at least one working remote available when we arrive – it speeds up the
          process.
        </p>
      </div>
    </Section>
  );
}
