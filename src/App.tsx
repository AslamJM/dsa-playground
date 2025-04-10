import { SquareIcon, HighlighterIcon } from "lucide-react";
import Cursor from "./components/cursor";
import Panel from "./components/panel";
import PlayGround from "./components/playground";
import { cn } from "./lib/utils";
import { usePointerStore } from "./store/pointer";

function App() {
  const { mode } = usePointerStore();
  return (
    <div className={cn("flex", mode !== "normal" && "hide-cursor")}>
      {mode === "highlight" && <Cursor Icon={HighlighterIcon} />}
      {mode === "array" && <Cursor Icon={SquareIcon} />}
      <div className="w-[300px]">
        <Panel />
      </div>
      <PlayGround />
    </div>
  );
}

export default App;
