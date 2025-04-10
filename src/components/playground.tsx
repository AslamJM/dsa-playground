import { useState } from "react";
import { usePointerStore } from "../store/pointer";
import ArrayComp from "./array";

export default function PlayGround() {
  const [arrs, setArrs] = useState<number[]>([]);

  const { mode } = usePointerStore();

  const drawArrays = () => {
    if (mode === "array") {
      setArrs((prev) => [...prev, 6]);
    }
  };

  return (
    <div className="min-h-screen p-8 space-y-2" onClick={drawArrays}>
      {arrs.map((ar, index) => (
        <ArrayComp key={`ar-${index}`} length={ar} />
      ))}
    </div>
  );
}
