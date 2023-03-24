import { useState, useContext, useEffect, createContext} from "react";

const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
    const [theme,setTheme] = useState(localStorage.getItem("theme") !== "dark" ? "light":"dark");

    console.log(theme);

    useEffect(()=>{
        const root = window.document.documentElement;
        const removeOldtheme = theme == "dark" ? "light" : "dark";

        root.classList.remove(removeOldtheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme])
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}