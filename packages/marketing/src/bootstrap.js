import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// mount function to start the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });

    if (onNavigate) {
        history.listen(onNavigate); // whenever an end point(url) change happens in container then history will listen it through the onNavigate function that is passed from container i.e whenever a url or path changes we want to automatically call the onNavigate function so whenever a user clicks on a link we want to update the memoryHistory and memoryHistory will automatically call the callback
    }

    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        },
    };
};


// if we are in development and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() }); // we when we are in isolation then we are using browserHistory
    }
}


// we are running through container and we should export the mount function
export { mount };