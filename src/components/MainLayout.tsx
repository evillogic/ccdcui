'use client';

import React, { useState, useEffect } from 'react';
import Drawer from './Drawer'; // Assuming Drawer can accept animated styles or is a custom component
import Header from './Header';

const animationDuration = 270; // Duration in ms

function useDelayUnmount(isMounted: boolean, delayTime: number) {
    const [shouldRender, setShouldRender] = useState(false);
    let timeoutId: NodeJS.Timeout;

    useEffect(() => {
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        } else if (!isMounted && shouldRender) {
            timeoutId = setTimeout(() => setShouldRender(false), delayTime);
        }
        return () => clearTimeout(timeoutId);
    }, [isMounted, delayTime, shouldRender]);

    return shouldRender;
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const showDrawer = useDelayUnmount(isDrawerOpen, animationDuration);

    const mountedStyle = { animation: `inAnimation ${animationDuration}ms ease-in` };
    const unmountedStyle = {
        animation: `outAnimation ${animationDuration}ms ease-out`,
        animationFillMode: "forwards",
    };

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            {showDrawer && (
                <div style={isDrawerOpen ? mountedStyle : unmountedStyle}>
                    <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(!isDrawerOpen)} />
                </div>
            )}
                <div style={{flexGrow: 1, overflow: 'auto'}}>
                    <Header onCloseDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
                    <main style={{ padding: '20px' }}>{children}</main>
                </div>
        </div>

    );
};

export default MainLayout;
