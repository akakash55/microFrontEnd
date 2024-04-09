import React from 'react';
//react-router-dom/cjs/react-router-dom.min
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
// import { mount } from 'marketing/MarketingApp';  //we want to keep coupling (nearly non-zero) between container and marketing simple and generic so that is why we are not directly importing ReactComponent but we are exporting mount function, say in future we want to use different framework for Marketing or Container so if we are exporting and importing React Component then we will need to make changes to other also jaise ki agar marketing different framework mein banaye toh container mein bhi change karna hoga and vice versa
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co', // when we are building in production so what this will do is generate all the classes with the prefix 'ma'
});


export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
};