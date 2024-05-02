import { createContext, useState } from 'react';


export const ThemeContext = createContext();


export default ({children}) => {


    const [theme,setTheme] = useState("light")

    const setThemeVal = (val) => {
        setTheme(val)
    }

    const values = {
        theme,
        setThemeVal
    }

    return(
        <ThemeContext.Provider value={values}>
        {children}
      </ThemeContext.Provider>
    )
}