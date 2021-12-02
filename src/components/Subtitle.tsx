import { FC } from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';

import { FONTS } from '../shared/appSettings';

const Subtitle: FC<TypographyProps> = props => (
    <Typography variant="h5" color="text.primary" fontFamily={FONTS.para} {...props}>
        {props.children}
    </Typography>
);

export default Subtitle;
