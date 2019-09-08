import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"

export function Radio(props) {
    const [check, setCheck] = React.useState(props.checked)

    React.useEffect(() => {
        setCheck(props.checked)
    }, [props.checked])

    return (
        <Frame
            width={props.width}
            height={props.height}
            onTap={() => {
                setCheck(!check)
            }}
            background="transparent"
        >
            <RadioButton>
                <input type="radio" defaultChecked={check} />
                <span />
            </RadioButton>
        </Frame>
    )
}

addPropertyControls(Radio, {
    Checked: {
        type: ControlType.Boolean,
        title: "Checked",
        defaultValue: false,
    },
})

Radio.defaultProps = {
    width: 14,
    height: 14,
    checked: false,
}
const RadioButton = styled.div`
    margin-top: 2px;
    margin-left: 0px;
    display: block;
    input:checked + span:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    input {
        position: absolute!important;
        clip: rect(1px,1px,1px,1px);
        padding: 0!important;
        border: 0!important;
        height: 1px!important;
        width: 1px!important;
        overflow: hidden;
    }
    span {
        position: relative;
        display: block;
        width: 14px;
        height: 14px;
        margin-bottom: 0;
        background: #fff;
        border: 1px solid #b3b3b3;
        border-radius: 50%;
        vertical-align: middle;
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        &:after {
            content: "";
            opacity: 0;
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;
            background: #07f;
            border-radius: 50%;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            -webkit-transition: all .1s ease-out;
            transition: all .1s ease-out;
        }
    }
`
