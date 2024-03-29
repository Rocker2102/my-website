import { FC, Fragment } from 'react';

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
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

import { GitHubIcon } from './SvgIcons';
import { FONTS } from '../shared/appSettings';
import DefaultCodeIcon from '../icons/code.svg';
import type { PROJECT_DATA } from '../shared/projectData';

/**
 * Card image (media) static properties
 */
const cardMediaHeight = 240;
const cardMediaBackground = 'linear-gradient(to bottom right, #e66465, #9198e5)';

const privateRepoMsg = 'Repository currently private';

const handleAnalyticsEvent = (type: 'github' | 'website' | 'wip', label: string): void => {
  let action: string;
  if (type === 'github') {
    action = 'Opened GitHub Repository';
  } else if (type === 'website') {
    action = 'Opened Website';
  } else {
    action = 'Clicked WIP button';
  }

  window.gtag('event', action, {
    label,
    /* eslint-disable-next-line camelcase */
    event_category: type === 'wip' ? 'engagement' : 'navigation'
  });
};

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
            alt="ProjectIcon"
            image={props.data?.coverImg ?? props.data.coverIcon ?? DefaultCodeIcon}
            height={`${cardMediaHeight}px`}
            component="img"
            sx={{
              objectFit: props.data?.coverImg ? 'cover' : 'contain',
              background: props.data?.background ?? cardMediaBackground
            }}
          />
          <CardContent sx={{ textAlign: 'left' }}>
            <Typography gutterBottom variant="h5" fontFamily={FONTS.general}>
              {props.data.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" fontFamily={FONTS.para}>
              {props.data.description.map((text, i) => {
                return (
                  <Fragment key={i}>
                    <span dangerouslySetInnerHTML={{ __html: text }}></span>
                    {i + 1 < props.data.description.length ? <br /> : ''}
                  </Fragment>
                );
              })}
            </Typography>
          </CardContent>
        </Box>

        <CardActions>
          {props.data.githubUrl ? (
            <Tooltip title={props.data.private ? privateRepoMsg : ''} placement="right">
              <Button
                size="large"
                href={props.data.githubUrl}
                color={props.data.private ? 'error' : 'warning'}
                target="_blank"
                startIcon={<GitHubIcon />}
                sx={{ px: 1.5 }}
                onClick={() => handleAnalyticsEvent('github', props.data.title)}
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
              onClick={() => handleAnalyticsEvent('website', props.data.title)}
            >
              Website
            </Button>
          ) : null}

          {props.data.isWIP ? (
            <Button
              size="large"
              color="success"
              sx={{ px: 1.5, marginLeft: 'auto' }}
              startIcon={<QueryBuilderIcon />}
              onClick={() => handleAnalyticsEvent('wip', props.data.title)}
            >
              WIP
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </Zoom>
  );
};

export default ProjectCard;
