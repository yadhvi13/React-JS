// import { useState } from 'react'
// import { ThemeProvider } from './contexts/Theme'
// import { useEffect } from 'react'
// import ThemeBtn from './components/ThemeBtn'
// import Card from './components/Card'

// function App() {
// const [themeMode, setThemeMode] = useState("light")

// const lightTheme = () => {
//   setThemeMode("light")
// }
// const darkTheme = () => {
//   setThemeMode("dark")
// }



// useEffect(() => {
//     document.documentElement.classList.remove("light", "dark");
//     document.documentElement.classList.add(themeMode);
//   }, [themeMode]);

// return (
// <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
//   <div className="flex flex-wrap min-h-screen items-center">
//   <div className="w-full">
//     <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//                         {/* theme button */}
//        <ThemeBtn/>                 
//     </div>

//     <div className="w-full max-w-sm mx-auto">
//                        {/* card */}
//         <Card/>               
//     </div>
//   </div>
//   </div>
// </ThemeProvider>
//   )
// }

// export default App


import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => setThemeMode("light")
  const darkTheme = () => setThemeMode("dark")

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-500">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
