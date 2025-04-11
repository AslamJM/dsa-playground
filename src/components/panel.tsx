import { MousePointer } from "lucide-react";
import { usePointerStore } from "../store/pointer";
import HighlightSelector from "./panel/highlight-selector";
import { Toggle } from "./ui/toggle";
import { cn } from "../lib/utils";
import ArraySelector from "./panel/array-selector";

export default function Panel() {
  const { setMode, mode } = usePointerStore();

  return (
    <div className="space-y-4 px-4 pt-6 w-[300px] fixed ml-2 mt-2 h-[500px] shadow-sm border-2 border-slate-600 rounded">
      <h3>Panel</h3>
      <div>
        <h4>Data Structures</h4>
        <ArraySelector />
      </div>
      <div>
        <h4>Pointers</h4>
        <Toggle
          pressed={mode === "normal"}
          onPressedChange={() => setMode("normal")}
          className={cn(mode !== "normal" && "cursor-none")}
        >
          <MousePointer className="w-6 h-6" />
        </Toggle>
      </div>
      <div>
        <h4>Highlighter</h4>
        <HighlightSelector />
      </div>
    </div>
  );
}
