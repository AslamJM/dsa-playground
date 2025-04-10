import { HighlighterIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { usePointerStore } from "../../store/pointer";
import { cn } from "../../lib/utils";
import { useState } from "react";
import { Toggle } from "../ui/toggle";

export default function HighlightSelector() {
  const [open, setOpen] = useState(false);

  const { mode, setMode, highlightColor, setHighlightColor } =
    usePointerStore();
  const toggleMode = () => {
    if (mode === "highlight") {
      setMode("normal");
    } else {
      setMode("highlight");
    }
  };

  const colors = [
    "bg-yellow-300",
    "bg-lime-300",
    "bg-sky-300",
    "bg-pink-300",
    "bg-orange-300",
    "bg-white",
  ];

  const changeColor = (color: string) => {
    setHighlightColor(color);
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-1">
      <Toggle pressed={mode === "highlight"} onClick={toggleMode}>
        <HighlighterIcon className="h-6 w-6" />
      </Toggle>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          className={cn(
            "w-[30px] h-[30px] border-[1px] border-slate-700 rounded",
            `${highlightColor}`
          )}
        ></PopoverTrigger>
        <PopoverContent>
          <div className="flex gap-2">
            {colors.map((c) => (
              <div
                key={c}
                className={cn(`cursor-pointer rounded w-[30px] h-[30px]`, c)}
                onClick={() => changeColor(c)}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
