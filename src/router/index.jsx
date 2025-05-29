import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import App from "../App"
import Hero from "../pages/hero"
import About from "../pages/about"
import Contact from "../pages/contact"
import Projects from "../pages/projects"
const Index = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<Hero/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default Index
