import Homepage from "./homepage/Homepage"
import Login from "./login/Login"
import Register from "./register/Register"
import { BrowserRouter, Routes, Route } from "react-router";
export const ThemeContext = createContext('light')

const App = () => {
  const [theme,setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </ThemeContext.Provider>
  )
}

export default App