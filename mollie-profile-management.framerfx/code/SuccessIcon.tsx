import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function SuccessIcon(props) {
    return (
        <svg viewBox="0 0 10 9">
            <path
                fill={props.color}
                d="M.912 4.19L0 5.38l4.07 3.117L9.084.82 7.828 0l-4.13 6.323z"
            />
        </svg>
    )
}

addPropertyControls(SuccessIcon, {
    color: { type: ControlType.Color },
})
