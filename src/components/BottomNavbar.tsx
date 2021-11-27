import * as React from 'react';

import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { ROUTES } from '../shared/utils';
import { useHistory } from 'react-router-dom';

const BottomNavbar: React.FC = () => {
    const history = useHistory();
    const [path, setPath] = React.useState(window.location.pathname);

    const handleChange = (event: React.SyntheticEvent, newPath: string) => {
        setPath(newPath);
        history.push(newPath);
    };

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation value={path} onChange={handleChange}>
                {ROUTES.map(({ name, path, Icon }) => (
                    <BottomNavigationAction
                        key={name}
                        label={name}
                        value={path}
                        icon={<Icon />}
                        sx={{
                            textTransform: 'capitalize'
                        }}
                    />
                ))}
            </BottomNavigation>
        </Paper>
    );
};

export default BottomNavbar;
