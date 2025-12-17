"use client";

export default function Section({ title, children, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {title && <h2 className="section-title text-[#7692FF] font-mono text-3xl font-extrabold">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
