import { create } from "zustand";
import { PlayElement, PlayElementType } from "../lib/types";

interface PlayGroundState {
    elements: PlayElement[]
}

type PlaygroundActions = {
    addElement: (type: PlayElementType, x: number, y: number) => void
    removeElement: (id: string) => void
    moveElement: (id: string, x: number, y: number) => void
}

export const usePGstore = create<PlayGroundState & PlaygroundActions>((set, get) => ({
    elements: [],
    addElement: (type, x, y) => {
        const elems = get().elements
        const elemOfTypes = elems.filter(e => e.type === type).length
        const id = type + (elemOfTypes + 1).toString()
        elems.push({
            id,
            x,
            y,
            type
        })

        return set(() => ({ elements: elems }))
    },

    removeElement: (id) => {
        const elems = get().elements
        return set(() => ({ elements: elems.filter(e => e.id !== id) }))
    },

    moveElement: (id, x, y) => {
        const elems = get().elements
        return set(() => ({
            elements: elems.map(e => e.id === id ? { ...e, x, y } : e)
        }))
    }
}))