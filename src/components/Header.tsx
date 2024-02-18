import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton'; // Use IconButton for better UX

interface HeaderProps {
    onCloseDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCloseDrawer }) => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '8px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
            <IconButton onClick={onCloseDrawer} size="large">
                <CloseIcon />
            </IconButton>
        </header>
    );
};

export default Header;
