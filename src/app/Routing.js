import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorBoundary from './shared/ErrorBoundary';
import NewsDetail from './pages/NewsDetail';
import ClassCompWithPagination from './pages/ClassCompWithPagination';
import FunctionCompWithInfiniteScroll from './pages/FunctionCompWithInfiniteScroll';
import { ReduxCounter } from './features/counter/ReduxCounterApp';


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
                    path: '/class-comp-pag',
                    element: <ClassCompWithPagination />
                },
                {
                    path: '/fx-comp-scroll',
                    element: <FunctionCompWithInfiniteScroll />,
                    errorElement: <ErrorBoundary />
                },
                {
                    path: '/news/:newsId',
                    element: <NewsDetail />,
                    errorElement: <ErrorBoundary />
                },
                {
                    path: '/redux',
                    element: <ReduxCounter />
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