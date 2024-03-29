import { FC } from 'react';

import Grow from '@mui/material/Grow';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Link, { LinkProps } from '@mui/material/Link';

import ContentBox from './ContentBox';
import { ROUTES } from '../shared/routeData';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { FONTS } from '../shared/appSettings';
import { CONTACT_POINTS } from '../shared/contactData';

interface CustomLinkProps extends LinkProps {
  activeColor?: string;
}

const CustomLink: FC<CustomLinkProps> = props => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const Tmp = styled(Link)(({ theme }) => ({
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    filter: 'blur(0.75px)',
    '&:hover': {
      color: props.activeColor ?? '#fff',
      transform: 'scale(1.3)',
      filter: 'blur(0px)'
    },
    '&:focus': {
      color: props.activeColor ?? '#fff'
    }
  }));

  /**
   * Remove activeColor from props because React doesn't recognise it
   */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const { activeColor, ...newProps } = props;

  return <Tmp {...newProps}>{props.children}</Tmp>;
};

const Home: FC = () => {
  const history = useHistory();

  return (
    <Grow in={true} timeout={150}>
      <ContentBox>
        <Typography
          variant="h5"
          fontWeight={500}
          color="text.primary"
          fontFamily={FONTS.general}
          align="left"
          pl={{ xs: 1, sm: 0 }}
        >
          Hiii 👋, I&apos;m
        </Typography>
        <Typography
          variant="h2"
          color="text.primary"
          fontWeight={500}
          fontFamily={FONTS.general}
          onClick={() =>
            history.push(
              (ROUTES.find(route => route.name === 'about') as (typeof ROUTES)[number]).path
            )
          }
          sx={{
            cursor: 'pointer',
            filter: 'blur(0.75px)'
          }}
        >
          Ankush Yadav
        </Typography>
        <Typography variant="h4" color="primary" mt={2.5} mb={4} fontFamily={FONTS.para}>
          Software Engineer
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          pt={5}
          justifyContent="center"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
        >
          {CONTACT_POINTS.map(({ name, href, activeColor, Icon, showOnHome }) =>
            showOnHome ? (
              <CustomLink
                key={name}
                rel="noopener"
                href={href}
                target="_blank"
                activeColor={activeColor}
              >
                <Icon fontSize="large" />
              </CustomLink>
            ) : null
          )}

          <CustomLink
            onClick={() =>
              history.push(
                (ROUTES.find(route => route.name === 'connect') as (typeof ROUTES)[number]).path
              )
            }
          >
            <AddIcon fontSize="large" />
          </CustomLink>
        </Stack>
      </ContentBox>
    </Grow>
  );
};

export default Home;
