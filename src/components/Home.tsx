import * as React from 'react';

import Grow from '@mui/material/Grow';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import ContentBox from './ContentBox';
import { styled } from '@mui/material/styles';
import { CONTACT_POINTS } from '../shared/contactData';

interface CustomLinkProps extends LinkProps {
    activeColor?: string;
}

const CustomLink: React.FC<CustomLinkProps> = props => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const Tmp = styled(Link)(({ theme }) => ({
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
            color: props.activeColor ?? '#fff',
            transform: 'scale(1.3)'
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

const Home: React.FC = () => {
    return (
        <Grow in={true} timeout={150}>
            <ContentBox>
                <Typography
                    variant="h5"
                    fontWeight={500}
                    color="text.primary"
                    fontFamily="LexendDeca"
                    align="left"
                >
                    Hiii 👋, I&apos;m
                </Typography>
                <Typography
                    variant="h2"
                    color="text.primary"
                    fontWeight={500}
                    fontFamily="LexendDeca"
                >
                    Ankush Yadav
                </Typography>
                <Typography
                    variant="h4"
                    color="primary"
                    mt={2.5}
                    mb={4}
                    fontFamily="LexendDeca Light"
                >
                    Student &amp; Full-Stack Web Developer
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
                                href={href}
                                target="_blank"
                                activeColor={activeColor}
                            >
                                <Icon fontSize="large" />
                            </CustomLink>
                        ) : null
                    )}
                </Stack>
            </ContentBox>
        </Grow>
    );
};

export default Home;
