import { useEffect, useState } from "react"

export const useMouseDrag = () => {
    const [startX, setStartX] = useState<number | null>(null)
    const [dragX, setDragX] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            setStartX(e.clientX)
            setIsDragging(true)
        }
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging && startX !== null) {
                setDragX(e.clientX - startX)
            }
        }

        const handleMouseUp = () => {
            setIsDragging(false)
            setStartX(null)
        }

        window.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mousedown", handleMouseDown)

        return () => {
            window.removeEventListener("mouseup", handleMouseUp)
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mousedown", handleMouseDown)
        }
    }, [isDragging, startX])

    return { dragX, startX, isDragging }
}