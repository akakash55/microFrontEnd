import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react'; //we want to keep coupling (nearly non-zero) between container and marketing simple and generic so that is why we are not directly importing ReactComponent but we are exporting mount function, say in future we want to use different framework for Marketing or Container so if we are exporting and importing React Component then we will need to make changes to other also jaise ki agar marketing different framework mein banaye toh container mein bhi change karna hoga and vice versa
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, { // along with the current reference we are passing a function to communicate the endpoint changes
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            onSignIn,
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />;
};