import { createContext, useState } from "react"

export const AppContext = createContext()

export function AppProvider({ children }) {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <AppContext.Provider value={{ showMenu, setShowMenu }}>
            {children}
        </AppContext.Provider>
    )
}
