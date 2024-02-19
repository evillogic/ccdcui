'use client';

import Drawer from './Drawer'; // Assuming Drawer can accept animated styles or is a custom component
import Header from './Header';

const animationDuration = 270; // Duration in ms

const MainLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
                <div>
                    <Drawer open={true} onClose={() => {}} />
                </div>
                <div style={{flexGrow: 1, overflow: 'auto'}}>
                    <Header onCloseDrawer={() => {}} />
                    <main style={{ padding: '20px' }}>{children}</main>
                </div>
        </div>

    );
};

export default MainLayout;
