import { MousePointer } from "lucide-react";
import { usePointerStore } from "../store/pointer";
import HighlightSelector from "./panel/highlight-selector";
import { Toggle } from "./ui/toggle";

export default function Panel() {
  const { setMode, mode } = usePointerStore();

  return (
    <div className="space-y-4 px-4 pt-6">
      <h3>Panel</h3>
      <Toggle
        pressed={mode === "normal"}
        onPressedChange={() => setMode("normal")}
      >
        <MousePointer className="w-6 h-6" />
      </Toggle>
      <HighlightSelector />
    </div>
  );
}
