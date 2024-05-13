import LayoutApp from "@/Layouts/LayoutApp"
import Home from "@/pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

export default function Routes() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LayoutApp/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={ router }/>
    )
}
