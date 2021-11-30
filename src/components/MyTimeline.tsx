import { FC } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/EventOutlined';
import { useTheme, Palette, PaletteColor } from '@mui/material/styles';

import { FONTS } from '../shared/appSettings';
import { TIMELINE_INFO } from '../shared/aboutData';

const MyTimeline: FC = () => {
    const theme = useTheme();

    return (
        <Timeline position="alternate">
            {TIMELINE_INFO.map((entry, i) => {
                return (
                    <TimelineItem key={i}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                            fontFamily={FONTS.para}
                        >
                            {`${entry.date}${entry.place ? ', ' + entry.place : ''}`}
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: theme.palette.secondary.main }} />
                            <TimelineDot color="warning">
                                {entry.Icon ? <entry.Icon /> : <EventIcon />}
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: theme.palette.secondary.main }} />
                        </TimelineSeparator>

                        <TimelineContent sx={{ py: entry.description ? '12px' : '16px', px: 2 }}>
                            <Typography
                                variant="h6"
                                color={
                                    (
                                        theme.palette[
                                            (entry?.titleColor ?? 'primary') as keyof Palette
                                        ] as PaletteColor
                                    ).main
                                }
                                component="span"
                                fontFamily={FONTS.title}
                            >
                                {entry.title}
                            </Typography>
                            <Typography color="text.primary" fontFamily={FONTS.para}>
                                {entry?.description}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
};

export default MyTimeline;
