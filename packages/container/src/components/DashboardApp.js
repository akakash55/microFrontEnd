import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react'; //we want to keep coupling (nearly non-zero) between container and marketing simple and generic so that is why we are not directly importing ReactComponent but we are exporting mount function, say in future we want to use different framework for Marketing or Container so if we are exporting and importing React Component then we will need to make changes to other also jaise ki agar marketing different framework mein banaye toh container mein bhi change karna hoga and vice versa


export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
};