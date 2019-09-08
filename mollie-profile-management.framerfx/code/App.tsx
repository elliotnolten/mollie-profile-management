import { Override, Data } from "framer"

const state = Data({
    selectedRole: "",
    firstName: "",
    lastName: "",
    email: "",
    toggleUser: false,
    newUserOpacity: 0.8,
    toastBottom: -64,
    toastOpacity: 0,
    statusPendingScale: 1,
    statusPendingOpacity: 1,
})

export function MenuItem(): Override {
    return {
        whileTap: {
            background: "#07F",
        },
        whileHover: {
            background: "#262626",
        },
    }
}

export function RoleOption(props): Override {
    return {
        onTap() {
            state.selectedRole = props.name
        },
    }
}

export function RadioMedewerker(props): Override {
    return {
        checked: state.selectedRole === "Medewerker",
    }
}

export function RadioDeveloper(props): Override {
    return {
        checked: state.selectedRole === "Developer",
    }
}

export function RadioBeheerder(props): Override {
    return {
        checked: state.selectedRole === "Beheerder",
    }
}

export const InputFirstName: Override = () => {
    return {
        onChange: (value: string) => {
            state.firstName = value
        },
    }
}

export const InputLastName: Override = () => {
    return {
        onChange: (value: string) => {
            state.lastName = value
        },
    }
}

export const InputEmail: Override = () => {
    return {
        onChange: (value: string) => {
            state.email = value
        },
    }
}

export function NewUserName(props): Override {
    return {
        text: `${state.firstName} ${state.lastName}`,
    }
}

export function NewUserEmail(props): Override {
    return {
        text: state.email,
    }
}

export function NewUserType(props): Override {
    return {
        text: state.selectedRole,
    }
}

export function SubmitNewUser(props): Override {
    return {
        onTap() {
            state.toggleUser = true
        },
    }
}

export function NewUserContainer(props): Override {
    return {
        visible: state.toggleUser,
    }
}

export function NewUser(props): Override {
    return {
        visible: state.toggleUser,
        animate: { opacity: state.newUserOpacity },
        transition: { delay: 2 },
    }
}

// Confirmation Page for New User
export function NewUserInputFirstName(props): Override {
    return {
        value: state.firstName,
    }
}

export function NewUserInputLastName(props): Override {
    return {
        value: state.lastName,
    }
}

export function NewUserInputEmail(props): Override {
    return {
        value: state.email,
    }
}

export function NewUserSubmit(props): Override {
    return {
        onTap() {
            state.toastBottom = 20
            state.toastOpacity = 1
            state.statusPendingScale = 0.8
            state.statusPendingOpacity = 0
            state.newUserTop = 0
            state.newUserOpacity = 1
        },
    }
}

// Admin Dashboard
export function Toast(props): Override {
    return {
        animate: { bottom: state.toastBottom, opacity: state.toastOpacity },
        transition: { delay: 2 },
    }
}

// New User Success
export function StatusPending(props): Override {
    return {
        animate: {
            scale: state.statusPendingScale,
            opacity: state.statusPendingOpacity,
        },
        transition: { delay: 2 },
    }
}
