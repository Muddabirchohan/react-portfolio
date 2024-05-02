import logo from './logo.svg';
import './App.css';
import MainSection from './components/MainSection/MainSection';
import About from './components/About/About';
import Story from './components/Story/Story';
import { ThemeContext } from './context/theme-context';
import { useContext, useState } from 'react';


function App() {

  const themeProvider = useContext(ThemeContext);

  const {theme} = themeProvider

  const changeTheme = (e) => {

    const {checked} = e.target

    themeProvider.setThemeVal(!checked ? "light" : "dark")
  }

  return (


    // <ThemeContext.Provider value={{ theme, setTheme }}>
  // <div className={`theme-${theme}`}>
    <div className="App">
      {/* <MainSection theme={theme} changeTheme={changeTheme}/> */}

      {/* <About theme={theme}/>
      <Story/> */}
    </div>
  // </div>
// </ThemeContext.Provider>

  );
}

export default App;
