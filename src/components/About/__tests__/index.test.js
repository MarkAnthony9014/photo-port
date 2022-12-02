import React from 'react';
// render function is Jest creating a simulated DOM in Node.js environment to approximate the DOM. The cleanup function
// is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests
// that could corrupt test results. 
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//this will ensure that after each test, we won't have any leftover memory data that could give us false results. 
afterEach(cleanup);

//then we'll use the describe function to declare the component we're testing. 
describe('About component', () => {
    //renders about test
    //First test
    it('renders', () => {
        render(<About />);
    });

    //Second Test
})

