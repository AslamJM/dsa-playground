import { create } from "zustand"

type PointerMode = "normal" | "highlight" | "array"

interface PointerState {
    mode: PointerMode
    highlightColor: string
}

type PointerAction = {
    setMode: (mode: PointerMode) => void
    setHighlightColor: (color: string) => void
}

export const usePointerStore = create<PointerState & PointerAction>((set) => ({
    mode: "normal",
    highlightColor: "#fff",
    setMode: (mode) => set(() => ({ mode })),
    setHighlightColor: (col) => set(() => ({ highlightColor: col }))
}))

