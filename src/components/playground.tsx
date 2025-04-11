import { useEffect, useState } from "react";
import { usePointerStore } from "../store/pointer";
import ArrayComp from "./array";
import { useMouseDrag } from "../lib/use-mouse-drag";

export default function PlayGround() {
  const [arrs, setArrs] = useState<number[]>([]);

  const { mode } = usePointerStore();
  const { dragX, isDragging } = useMouseDrag();

  useEffect(() => {
    const drawArrays = () => {
      if (!isDragging) {
        if (arrs.length === 0) {
          setArrs([0]);
        } else if (arrs[arrs.length - 1] !== 0) {
          setArrs((prev) => [...prev, 0]);
        }
      } else {
        const length = Math.floor(dragX / 40);
        const last = arrs[arrs.length - 1];
        if (length !== last) {
          setArrs([...arrs.slice(0, -1), length]);
        }
      }
    };

    if (mode === "array") {
      drawArrays();
    }
  }, [dragX, mode, isDragging]);

  return (
    <div className="min-h-screen p-8 space-y-2">
      <p>{dragX}px</p>
      {arrs.map((ar, index) => (
        <ArrayComp key={`ar-${index}`} length={ar} />
      ))}
    </div>
  );
}
