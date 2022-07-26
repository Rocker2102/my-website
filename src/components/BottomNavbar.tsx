import { useState, FC, SyntheticEvent } from 'react';

import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { ROUTES } from '../shared/routeData';
import { useHistory } from 'react-router-dom';

interface BottomNavbarProps {
  currentPath: string;
}

const BottomNavbar: FC<BottomNavbarProps> = ({ currentPath }) => {
  const history = useHistory();
  const [path, setPath] = useState(currentPath);

  /* Used to keep bottomnavbar in sync with current path */
  currentPath !== path ? setPath(currentPath) : false;

  const handleChange = (event: SyntheticEvent, newPath: string) => {
    setPath(newPath);
    newPath !== currentPath ? history.push(newPath) : false;
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: 'block', md: 'none' }
      }}
      elevation={3}
    >
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
