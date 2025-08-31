import { Lock } from "lucide-react";

export default function GradientIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" strokeWidth={2}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#5856D6" />
        </linearGradient>
      </defs>
      <Lock stroke="url(#grad1)" strokeWidth={2} />
    </svg>
  );
}
