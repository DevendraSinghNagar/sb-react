import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
    let error = useRouteError();
    console.log('Client side error:-');
    console.error(error);

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div>This page doesn't exist!</div>;
        }

        if (error.status === 401) {
            return <div>You aren't authorized to see this</div>;
        }

        if (error.status === 503) {
            return <div>Looks like our API is down</div>;
        }

        if (error.status === 418) {
            return <div>🫖</div>;
        }
    }

    return <div><h1>Oops!</h1><p>Something went wrong</p></div>;
}
