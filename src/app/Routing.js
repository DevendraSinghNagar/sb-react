import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import News from './pages/News';
import NewsFxWithInfiniteScroll from './pages/NewsFxWithInfiniteScroll';
import ErrorBoundary from './shared/ErrorBoundary';
import Login from './pages/Login';


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
                    path: '/news',
                    element: <News />
                },
                {
                    path: '/news-inf',
                    element: <NewsFxWithInfiniteScroll />,
                    errorElement: <ErrorBoundary />
                },
                {
                    path: '/login',
                    element: <Login />
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