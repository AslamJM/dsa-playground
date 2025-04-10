import { useState } from "react";
import { cn } from "../lib/utils";
import { usePointerStore } from "../store/pointer";
import { colors } from "../constants/colors";

type Props = {
  index: number;
};

export default function ArrayBox({ index }: Props) {
  const [highlight, setHighlight] = useState(colors.highlightDefault);
  const { mode, highlightColor } = usePointerStore();

  const changeHighLightColor = () => {
    if (mode !== "highlight") return;
    if (highlightColor === highlight) {
      setHighlight(colors.highlightDefault);
    } else {
      setHighlight(highlightColor);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        className={cn(
          "border-none ring-0 focus:ring-0 focus:outline-none w-[30px] text-[11px] text-center",
          mode !== "normal" && "pointer-events-none"
        )}
      />
      <div
        onClick={changeHighLightColor}
        className={cn(
          "border-[1px]  w-[40px] h-[40px] border-slate-800  flex items-center justify-center",
          index !== 1 && "border-l-0",
          `${highlight}`
        )}
      >
        <input
          type="text"
          className={cn(
            "border-none ring-0 focus:ring-0 focus:outline-none w-[30px] text-center",
            mode !== "normal" && "pointer-events-none"
          )}
        />
      </div>
    </div>
  );
}
