export default function TestimonialCard({ name, text, location }) {
  return (
    <div className="card">
      <p className="text-sm text-slate-700 mb-3">“{text}”</p>
      <p className="text-xs font-medium text-slate-500">
        {name} • {location}
      </p>
    </div>
  );
}
