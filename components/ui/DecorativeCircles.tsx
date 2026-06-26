type CirclePosition = "bottom-left-services" | "top-right" | "bottom-left";

const POSITION_CLASSES: Record<CirclePosition, string> = {
  "bottom-left-services":
    "absolute -bottom-32 -left-24 h-[280px] w-[280px] sm:-bottom-40 sm:-left-32 sm:h-[520px] sm:w-[520px]",
  "top-right":
    "absolute -right-16 -top-20 h-[250px] w-[250px] sm:-right-24 sm:-top-32 sm:h-[420px] sm:w-[420px]",
  "bottom-left":
    "absolute -bottom-20 -left-20 h-[275px] w-[275px] sm:-bottom-32 sm:-left-32 sm:h-[460px] sm:w-[460px]",
};

export function DecorativeCircles({ position }: { position: CirclePosition }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      fill="none"
      className={`pointer-events-none select-none text-white/20 ${POSITION_CLASSES[position]}`}
    >
      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="220" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
