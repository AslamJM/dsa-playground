import ArrayComp from "./components/array";
import Cursor from "./components/cursor";
import Panel from "./components/panel";
import { cn } from "./lib/utils";
import { usePointerStore } from "./store/pointer";

function App() {
  const { mode } = usePointerStore();
  return (
    <div className={cn("flex", mode === "highlight" && "hide-cursor")}>
      {mode === "highlight" && <Cursor />}
      <div className="w-[300px]">
        <Panel />
      </div>
      <div className="flex items-center justify-center">
        <ArrayComp length={6} />
      </div>
    </div>
  );
}

export default App;
