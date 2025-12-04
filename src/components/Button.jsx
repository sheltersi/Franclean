import Link from "next/link";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base = "btn";
  const style = variant === "outline" ? "btn-outline" : "btn-primary";
  const fullClass = `${base} ${style} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={fullClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={fullClass} {...props}>
      {children}
    </button>
  );
}
