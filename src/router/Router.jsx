import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children : [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
])

export default router;