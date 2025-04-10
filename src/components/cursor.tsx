import { type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { usePointerStore } from "../store/pointer";
import { cn } from "../lib/utils";

type Props = {
  Icon: LucideIcon;
};

export default function Cursor({ Icon }: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const { highlightColor } = usePointerStore();
  const { mode } = usePointerStore();

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`
          fixed top-0 left-0 pointer-events-none z-50 
        `}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <Icon className="w-4 h-4" />
      {mode === "highlight" && (
        <div className={cn("w-2 h-2 rounded", highlightColor)} />
      )}
    </div>
  );
}
