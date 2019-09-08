import * as React from "react"
import { Frame } from "framer"

export function PlusCircleIcon(props) {
    return (
        <Frame size={props.size} background="#07F" radius={9}>
            <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                style={{ position: "absolute", top: 5, left: 5 }}
            >
                <path
                    d="M5 3V.997C5 .453 4.552 0 4 0c-.556 0-1 .446-1 .997V3H.997C.453 3 0 3.448 0 4c0 .556.446 1 .997 1H3v2.003C3 7.547 3.448 8 4 8c.556 0 1-.446 1-.997V5h2.003C7.547 5 8 4.552 8 4c0-.556-.446-1-.997-1H5z"
                    fillRule="evenodd"
                    fill="white"
                ></path>
            </svg>
        </Frame>
    )
}

PlusCircleIcon.defaultProps = {
    size: 18,
}
