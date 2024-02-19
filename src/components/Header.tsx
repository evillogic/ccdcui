import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link'; // Rename to avoid conflict with Next's Link
import NextLink from 'next/link'; // Import Next's Link
import { useRouter, usePathname } from 'next/navigation';

interface HeaderProps {
    onCloseDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCloseDrawer }) => {
    const router = useRouter();
    const location = usePathname();

    const pathnames = location ? location.split('/').filter((x) => x) : [];

    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '8px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
            <Breadcrumbs separator="/" aria-label="breadcrumb" style={{ marginLeft: '16px' }}>
                <NextLink href="/" passHref>
                    ~
                </NextLink>
                {pathnames.map((pathname, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <NextLink key={pathname} href={routeTo} passHref>
                            {isLast ? pathname : pathname.toLowerCase()}
                        </NextLink>
                    );
                })}
            </Breadcrumbs>
        </header>
    );
};

export default Header;
