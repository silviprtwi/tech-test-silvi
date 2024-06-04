import { Route, Routes, BrowserRouter } from "react-router-dom"
import DefaultLanding from "./DefaultLanding"
import LandingPage from "./LandingPage"

function App() {
  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route element={<DefaultLanding />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
