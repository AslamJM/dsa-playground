import { usePointerStore } from "../../store/pointer";
import { Toggle } from "../ui/toggle";
import { Square } from "lucide-react";

export default function ArraySelector() {
  const { mode, setMode } = usePointerStore();
  const toggleSelector = () => {
    setMode("array");
  };
  return (
    <Toggle pressed={mode === "array"} onPressedChange={toggleSelector}>
      <Square className="h-4 w-4" />
    </Toggle>
  );
}
