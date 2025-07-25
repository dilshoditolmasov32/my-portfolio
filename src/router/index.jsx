import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import App from "../App"
import Hero from "../pages/hero/Hero"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Projects from "../pages/projects"
const Index = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="/" element={<Hero/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default Index
