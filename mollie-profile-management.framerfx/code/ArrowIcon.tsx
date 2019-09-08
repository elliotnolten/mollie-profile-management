import * as React from "react"
import { Frame } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function ArrowIcon() {
    return (
        <Frame
            size={6}
            style={{
                background: "transparent",
                top: "50%",
                display: "inline-block",
                borderRight: "2px solid",
                borderBottom: "2px solid",
                transform: "translateY(-50%) rotate(-45deg)",
                color: "#737373",
                fill: "#737373",
            }}
        />
    )
}
