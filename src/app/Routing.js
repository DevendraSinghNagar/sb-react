import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Form from './pages/Form';
import NotFound from './pages/NotFound';


function Routing() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: '/form',
                    element: <Form />
                },
                {
                    path: '*',
                    element: <NotFound />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Layout />}>
        //             <Route index element={<Home />} />
        //             <Route path="form" element={<Form />} />
        //             <Route path="*" element={<NotFound />} />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
    )
}

export default Routing;