import { FC } from 'react';

import { SvgIconProps } from '@mui/material';
import HomeIcon from '@mui/icons-material/HomeRounded';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import WorkIcon from '@mui/icons-material/WorkOutlineRounded';
import PersonIcon from '@mui/icons-material/PersonOutlineRounded';

/**
 * App route names & paths
 */
export const ROUTES: {
    name: string;
    path: string;
    Icon: FC<SvgIconProps>;
    /**
     * Whether the path is to be matched exactly or not
     * ('exact' property not in use currently, may be removed in the future)
     */
    exact: boolean;
}[] = [
    { name: 'home', path: '/home', exact: false, Icon: HomeIcon },
    { name: 'projects', path: '/projects', exact: true, Icon: WorkIcon },
    { name: 'about', path: '/about', exact: true, Icon: InfoIcon },
    { name: 'contact', path: '/contact', exact: true, Icon: PersonIcon }
];
