import { FC } from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';

import { FONTS } from '../shared/appSettings';

const Title: FC<TypographyProps> = props => (
  <Typography variant="h2" color="primary" fontWeight={500} fontFamily={FONTS.title} {...props}>
    {props.children}
  </Typography>
);

export default Title;
