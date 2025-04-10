import { HighlighterIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

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
      <HighlighterIcon />
    </div>
  );
}
