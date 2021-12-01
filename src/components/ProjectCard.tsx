import { FC } from 'react';

import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card, { CardProps } from '@mui/material/Card';
import LanguageIcon from '@mui/icons-material/LanguageOutlined';

import { GitHubIcon } from './SvgIcons';
import { FONTS } from '../shared/appSettings';
import DefaultCodeIcon from '../icons/code.svg';
import type { PROJECT_DATA } from '../shared/projectData';

interface ProjectCardProps {
    data: PROJECT_DATA;
    muiProps?: CardProps;
    animationDelay: number;
}

const ProjectCard: FC<ProjectCardProps> = props => {
    /* Limit animationDelay to 5000 ms */
    props.animationDelay > 5000 ? (props.animationDelay = 5000) : false;

    return (
        <Zoom in={true} style={{ transitionDelay: `${props.animationDelay}ms` }}>
            <Card
                elevation={6}
                {...props.muiProps}
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Box>
                    <CardMedia
                        alt="DefaultIcon"
                        height="180"
                        image={DefaultCodeIcon}
                        component="img"
                        sx={{ objectFit: 'contain', backgroundColor: '#FAEBD7' }}
                    />
                    <CardContent sx={{ textAlign: 'left' }}>
                        <Typography gutterBottom variant="h5" fontFamily={FONTS.general}>
                            {props.data.title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" fontFamily={FONTS.para}>
                            {props.data.description.map((text, i) => {
                                return (
                                    <>
                                        <span dangerouslySetInnerHTML={{ __html: text }}></span>
                                        {i + 1 < props.data.description.length ? <br /> : ''}
                                    </>
                                );
                            })}
                        </Typography>
                    </CardContent>
                </Box>
                <CardActions>
                    {props.data.githubUrl ? (
                        <Tooltip
                            title={props.data.private ? 'Private Repository' : ''}
                            placement="right"
                        >
                            <Button
                                size="large"
                                href={props.data.githubUrl}
                                color={props.data.private ? 'error' : 'warning'}
                                target="_blank"
                                startIcon={<GitHubIcon />}
                                sx={{ px: 1.5 }}
                            >
                                Repository
                            </Button>
                        </Tooltip>
                    ) : null}
                    {props.data.website ? (
                        <Button
                            size="large"
                            href={props.data.website}
                            color="warning"
                            target="_blank"
                            startIcon={<LanguageIcon />}
                            sx={{ px: 1.5 }}
                        >
                            Website
                        </Button>
                    ) : null}
                </CardActions>
            </Card>
        </Zoom>
    );
};

export default ProjectCard;