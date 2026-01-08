const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-20 h-20",
};

const Bubble = ({ className = "", size = "md", delay = 0, duration = 8 }) => {
  return (
    <div
      className={`absolute rounded-full bg-sky-400/30 backdrop-blur-sm ${sizeClasses[size]} ${className}`}
      style={{
        animation: `bubble-rise ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

export default Bubble;
