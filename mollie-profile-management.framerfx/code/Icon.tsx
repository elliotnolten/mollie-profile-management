import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Icon(props) {
    return (
        <Frame
            width={props.width}
            height={props.height}
            background="transparent"
        >
            <SVG name={props.name} />
        </Frame>
    )
}

function SVG(props) {
    if (props.name === "start") {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M8.05 1.526a2 2 0 0 1 2.9 0l6.446 6.785C18 8.948 17.549 10 16.67 10H2.329C1.451 10 1 8.948 1.604 8.311L8.05 1.526z"
                    fill="#9E9E9E"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 11H3v7a1 1 0 0 0 1 1h3v-3.5a2.5 2.5 0 0 1 5 0V19h3a1 1 0 0 0 1-1v-7z"
                    fill="#fff"
                ></path>
                <path
                    d="M8 15.5a1.5 1.5 0 0 1 3 0V19H8v-3.5z"
                    fill="#9E9E9E"
                ></path>
                <path
                    d="M13 2.5a1.5 1.5 0 0 1 3 0v3.356l-3-3.172V2.5z"
                    fill="#fff"
                ></path>
            </svg>
        )
    }
    if (props.name === "transacties") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <g fill="#fff">
                    <path
                        clipRule="evenodd"
                        d="M5.5 4a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 0 0 0-3zm0 10a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3z"
                        fillOpacity=".6"
                        fillRule="evenodd"
                    ></path>
                    <rect height="5" rx="2.5" width="16" x="2" y="8"></rect>
                </g>
            </svg>
        )
    }
    if (props.name === "bestellingen") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
                    <path d="M4 2a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a1 1 0 0 0-1-1h-1.056a.944.944 0 0 0-.944.944.944.944 0 0 1-.944.945H6.944A.944.944 0 0 1 6 2.944.944.944 0 0 0 5.056 2zm11 4H5v11h10z"></path>
                    <path
                        d="M9 1a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2zm5 6H6v9h8z"
                        fillOpacity=".6"
                    ></path>
                </g>
            </svg>
        )
    }
    if (props.name === "statistieken") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <clipPath id="icon-statistics-a">
                    <path d="M0 0h20v20H0z"></path>
                </clipPath>
                <g
                    clipPath="url(#icon-statistics-a)"
                    clipRule="evenodd"
                    fill="#fff"
                    fillRule="evenodd"
                >
                    <path
                        d="M3 11.176V16.5a1.5 1.5 0 0 0 3 0v-7-.012l-.215-.257-1.763 1.479A2.09 2.09 0 0 1 3 11.176zm5 .378V16.5a1.5 1.5 0 0 0 3 0v-5.903l-.779.654A2.1 2.1 0 0 1 8 11.554zm5.014-2.263c-.01.068-.014.138-.014.209v7a1.5 1.5 0 0 0 3 0v-5.857c-.785.299-1.74.133-2.363-.61z"
                        fillOpacity=".6"
                    ></path>
                    <path d="M10.715 2.273l5.767-.45a1.1 1.1 0 0 1 1.15 1.371l-1.445 5.601a1.1 1.1 0 0 1-1.908.432l-1.453-1.732-3.371 2.828a1.1 1.1 0 0 1-1.55-.135L5.785 7.66 3.256 9.782a1.1 1.1 0 0 1-1.414-1.685l3.371-2.829a1.1 1.1 0 0 1 1.55.136l2.12 2.527 2.529-2.121-1.454-1.733a1.1 1.1 0 0 1 .757-1.804z"></path>
                </g>
            </svg>
        )
    }
    if (props.name === "administratie") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <g fill="#fff">
                    <path d="M2 4a1 1 0 0 1 1-1h5a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-.56-.56A2 2 0 0 0 7.172 17H3a1 1 0 0 1-1-1z"></path>
                    <path
                        d="M19 4a1 1 0 0 0-1-1h-5a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l.56-.56A2 2 0 0 1 13.828 17H18a1 1 0 0 0 1-1z"
                        fillOpacity=".6"
                    ></path>
                </g>
            </svg>
        )
    }
    if (props.name === "developers") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <g fill="#fff">
                    <path
                        clipRule="evenodd"
                        d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 7.869v4.263c0 1.597 1.78 2.55 3.11 1.664l3.197-2.132a2 2 0 0 0 0-3.328L7.109 8.204C5.78 7.318 4 8.271 4 9.87z"
                        fillOpacity=".6"
                        fillRule="evenodd"
                    ></path>
                    <path d="M5 9.869v4.263a1 1 0 0 0 1.555.831l3.197-2.13a1 1 0 0 0 0-1.665L6.555 9.036A1 1 0 0 0 5 9.87z"></path>
                </g>
            </svg>
        )
    }
    if (props.name === "notificaties") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <clipPath id="icon-notifications-a">
                    <path d="M0 0h20v20H0z"></path>
                </clipPath>
                <g clipPath="url(#icon-notifications-a)" fill="#fff">
                    <path
                        d="M5.725 17.548a.5.5 0 0 1 .354-.612L9.943 15.9a.5.5 0 0 1 .612.354 2.5 2.5 0 1 1-4.83 1.294z"
                        fillOpacity=".6"
                    ></path>
                    <path
                        clipRule="evenodd"
                        d="M6.802 2.248A1 1 0 1 0 6.285.316a1 1 0 0 0 .517 1.932zm.742.836a5.5 5.5 0 0 0-3.89 6.737l.44 1.642-.6 1.962c-.459 1.502.914 2.923 2.43 2.517l9.45-2.532c1.518-.407 1.996-2.324.847-3.395l-1.501-1.4-.44-1.641a5.5 5.5 0 0 0-6.736-3.89z"
                        fillRule="evenodd"
                    ></path>
                </g>
            </svg>
        )
    }
    if (props.name === "instellingen") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
                    <path
                        d="M10.83 6a2.996 2.996 0 0 0 0-2H17a1 1 0 1 1 0 2zM5.17 6H3a1 1 0 0 1 0-2h2.17a2.995 2.995 0 0 0 0 2zm5.66 10a2.997 2.997 0 0 0 0-2H17a1 1 0 1 1 0 2zm-5.66 0H3a1 1 0 1 1 0-2h2.17a2.995 2.995 0 0 0 0 2zM15 10c0 .35-.06.687-.17 1H17a1 1 0 1 0 0-2h-2.17c.11.313.17.65.17 1zM3 11h6.17a2.995 2.995 0 0 1 0-2H3a1 1 0 0 0 0 2z"
                        fillOpacity=".6"
                    ></path>
                    <path d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm2-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                </g>
            </svg>
        )
    }
    if (props.name === "betaalverzoek") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <g fill="#fff">
                    <path
                        clipRule="evenodd"
                        d="M8 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3V9a2 2 0 0 0-2-2H8zM4 8h3v3a2 2 0 0 0 2 2h3v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z"
                        fillOpacity=".6"
                        fillRule="evenodd"
                    ></path>
                    <path d="M8 8h3a1 1 0 0 1 1 1v3H9a1 1 0 0 1-1-1z"></path>
                </g>
            </svg>
        )
    }
    if (props.name === "ecurring") {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20">
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M11 2H8v1a2 2 0 1 1-4 0V2a2 2 0 0 0-2 2v2h15V4a2 2 0 0 0-2-2v1a2 2 0 1 1-4 0V2z"
                        fill="#FFF"
                    ></path>
                    <rect
                        fill="#A3A3A3"
                        fillRule="nonzero"
                        x="5"
                        y="1"
                        width="2"
                        height="3"
                        rx="1"
                    ></rect>
                    <rect
                        fill="#A3A3A3"
                        fillRule="nonzero"
                        x="12"
                        y="1"
                        width="2"
                        height="3"
                        rx="1"
                    ></rect>
                    <path
                        d="M2 7h15v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z"
                        fillOpacity=".9"
                        fill="#6B6B6B"
                        fillRule="nonzero"
                    ></path>
                    <rect
                        fill="#A3A3A3"
                        fillRule="nonzero"
                        x="8"
                        y="9"
                        width="3"
                        height="3"
                        rx="1.5"
                    ></rect>
                    <rect
                        fill="#A3A3A3"
                        fillRule="nonzero"
                        x="8"
                        y="13"
                        width="3"
                        height="3"
                        rx="1.5"
                    ></rect>
                    <rect
                        fill="#A3A3A3"
                        fillRule="nonzero"
                        x="4"
                        y="9"
                        width="3"
                        height="3"
                        rx="1.5"
                    ></rect>
                    <rect
                        fill="#A3A3A3"
                        fillRule="nonzero"
                        x="12"
                        y="9"
                        width="3"
                        height="3"
                        rx="1.5"
                    ></rect>
                    <rect
                        fill="#A3A3A3"
                        fillRule="nonzero"
                        x="4"
                        y="13"
                        width="3"
                        height="3"
                        rx="1.5"
                    ></rect>
                    <rect
                        fill="#A3A3A3"
                        fillRule="nonzero"
                        x="12"
                        y="13"
                        width="3"
                        height="3"
                        rx="1.5"
                    ></rect>
                </g>
            </svg>
        )
    }

    if (props.name === "help") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
                    <path
                        d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
                        fillOpacity=".6"
                    ></path>
                    <path d="M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-.693-5.599c-.122.298-.182.697-.182 1.198H10.5l.021-.328c.04-.35.195-.657.467-.918l.435-.414c.34-.329.579-.628.715-.897.136-.272.204-.56.204-.864 0-.67-.21-1.187-.629-1.553-.419-.368-1.008-.553-1.767-.553-.752 0-1.346.194-1.783.58-.433.387-.653.922-.66 1.606H9.06c.007-.286.09-.51.247-.671.161-.165.374-.247.64-.247.558 0 .837.302.837.908 0 .2-.053.392-.161.574-.107.18-.324.414-.65.704-.322.286-.544.578-.666.875zm-.097 2.256a.781.781 0 0 0-.241.591c0 .236.079.431.236.586.161.153.372.23.634.23.261 0 .47-.077.628-.23a.775.775 0 0 0 .242-.586.773.773 0 0 0-.247-.59c-.161-.158-.369-.237-.623-.237s-.464.079-.629.236z"></path>
                </g>
            </svg>
        )
    }

    if (props.name === "chat") {
        return (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
                    <path
                        d="M11.423 8.57A5.98 5.98 0 0 0 12 6c0-.7-.12-1.373-.34-1.998a7.5 7.5 0 1 1-3.57 14.18L4 19l.818-4.09a7.464 7.464 0 0 1-.816-3.25A5.99 5.99 0 0 0 6 12a5.98 5.98 0 0 0 2.57-.577l3.804.951z"
                        fillOpacity=".6"
                    ></path>
                    <path d="M10.362 8.446a5 5 0 1 0-1.915 1.915L11 11z"></path>
                </g>
            </svg>
        )
    }
}

Icon.defaultProps = {
    width: 20,
    height: 20,
    name: "start",
}

addPropertyControls(Icon, {
    name: { type: ControlType.String, title: "Name" },
})
