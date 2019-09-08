import * as React from "react"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"

type Props = Partial<FrameProps> & {
    value: string
    inputType: string
    disabled: boolean
    onChange: (value: string) => void
}

export function Input(props: Partial<Props>) {
    const {
        value: initialValue,
        onChange,
        inputType,
        width,
        height,
        disabled,
    } = props
    const [state, setState] = React.useState({ value: "" })

    // Store the input's last value in a ref
    const input = React.useRef<HTMLInputElement>()

    React.useEffect(() => {
        onChange(state.value)
    }, [state.value])

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        // Sync inputValue ref with initialValue
        input.current.value = initialValue

        setState({
            ...state,
            value: initialValue,
        })
    }, [initialValue])

    return (
        <InputMollie
            type={inputType}
            width={props.width}
            height={props.height}
            ref={input}
            onChange={event => {
                setState({ ...state, value: event.target.value })
            }}
            disabled={disabled}
        />
    )
}

const InputMollie = styled.input`
    display: block;
    width: 100%;
    height: 38px;
    padding: 5px 15px;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    background-color: #fff;
    color: #191919;
    font-size: 15px;
    line-height: 1.42857;
    -webkit-transition: border-color .15s ease-in-out;
    transition: border-color .15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:focus {
        outline: 0;
        border-color: #07f;
        -webkit-transition-duration: 0s;
        transition-duration: 0s;
    }
    &:disabled {
        background: #f2f2f2;
        color: #737373;
        cursor: not-allowed;
    }
`

Input.defaultProps = {
    width: 320,
    height: 38,
    inputType: "text",
    onChange: () => null,
    value: "",
    disabled: false,
}

addPropertyControls(Input, {
    value: { type: ControlType.String },
    inputType: {
        type: ControlType.Enum,
        options: ["text", "password", "email"],
    },
    disabled: { type: ControlType.Boolean },
})
