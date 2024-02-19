import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import TeamsIcon from '@mui/icons-material/Group';
import PayloadIcon from '@mui/icons-material/Publish';
import AttackIcon from '@mui/icons-material/FlashOn';
import ServiceIcon from '@mui/icons-material/Build';
import ScoreboardIcon from '@mui/icons-material/Score';
import ReportIcon from '@mui/icons-material/Assessment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import NoteIcon from '@mui/icons-material/Note';
import ComputerIcon from '@mui/icons-material/Computer';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: 320, // Increased width
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 320, // Increased width
        boxSizing: 'border-box',
    },
}));

const navGroups = [
    {
        label: 'Operations',
        items: [
            { label: 'Teams', Icon: TeamsIcon, path: '/teams' }, // Assuming a route for viewing teams
            { label: 'Services', Icon: ServiceIcon, path: '/services' }, // Assuming a route for viewing services
            { label: 'Hosts', Icon: ComputerIcon, path: '/hosts' }, // Assuming a route for viewing hosts
        ],
    },
    {
        label: 'Analysis',
        items: [
            { label: 'Scoreboard', Icon: ScoreboardIcon, path: '/scoreboard' }, // Assuming a route for the scoreboard
            { label: 'Report', Icon: ReportIcon, path: '/report' }, // Assuming a route for viewing reports
            { label: 'Notes', Icon: NoteIcon, path: '/notes' }, // Assuming a route for viewing notes
        ],
    },
    {
        label: 'Tasks',
        items: [
            { label: 'Scheduled Jobs', Icon: ScheduleIcon, path: '/schedule' }, // Assuming a route for scheduled jobs
            { label: 'Mass Payload', Icon: PayloadIcon, path: '/mass-payload' }, // Assuming a route for mass payload operations
            { label: 'Payloads', Icon: PayloadIcon, path: '/payloads' }, // Assuming a route for managing payloads
            { label: 'Mass Attack', Icon: AttackIcon, path: '/mass-attack' }, // Assuming a route for mass attack operations
            { label: 'Attacks', Icon: AttackIcon, path: '/attacks' }, // Assuming a route for managing attacks
            { label: 'Generate List', Icon: FormatListBulletedIcon, path: '/list' },
        ],
    },
];

interface DrawerProps {
    open: boolean;
    onClose: () => void;
}

const DrawerComponent: React.FC<DrawerProps> = ({ open, onClose }) => {
    return (
        <StyledDrawer
            variant="persistent"
            open={open}
            onClose={onClose}
        >
            <div style={{ padding: '16px', fontWeight: 'bold' }}>Red Team UI</div>
            <Divider />
            <List>
                {navGroups.map((group) => (
                    <React.Fragment key={group.label}>
                        <ListItemButton sx={{ py: 2, backgroundColor: 'rgba(0, 0, 0, 0.04)' }}>
                            <ListItemText primary={group.label} primaryTypographyProps={{ fontWeight: 'medium' }} />
                        </ListItemButton>
                        {group.items.map((item) => (
                            <Link key={item.label} href={item.path} passHref>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <item.Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </Link>
                        ))}
                        {group !== navGroups[navGroups.length - 1] && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </StyledDrawer>
    );
};

export default DrawerComponent;