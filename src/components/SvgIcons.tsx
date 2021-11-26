import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import { ReactComponent as AtSVG } from '../icons/at.svg';
import { ReactComponent as GitHubSVG } from '../icons/github.svg';
import { ReactComponent as TwitterSVG } from '../icons/twitter.svg';
import { ReactComponent as FacebookSVG } from '../icons/facebook.svg';
import { ReactComponent as LinkedInSVG } from '../icons/linkedin.svg';
import { ReactComponent as TelegramSVG } from '../icons/telegram.svg';
import { ReactComponent as WhatsAppSVG } from '../icons/whatsapp.svg';

export const AtIcon = (props: SvgIconProps): JSX.Element => {
    return (
        <SvgIcon {...props}>
            <AtSVG />
        </SvgIcon>
    );
};
export const GitHubIcon = (props: SvgIconProps): JSX.Element => {
    return (
        <SvgIcon {...props}>
            <GitHubSVG />
        </SvgIcon>
    );
};

export const FacebookIcon = (props: SvgIconProps): JSX.Element => {
    return (
        <SvgIcon {...props}>
            <FacebookSVG />
        </SvgIcon>
    );
};

export const LinkedInIcon = (props: SvgIconProps): JSX.Element => {
    return (
        <SvgIcon {...props}>
            <LinkedInSVG />
        </SvgIcon>
    );
};

export const TelegramIcon = (props: SvgIconProps): JSX.Element => {
    return (
        <SvgIcon {...props}>
            <TelegramSVG />
        </SvgIcon>
    );
};

export const TwitterIcon = (props: SvgIconProps): JSX.Element => {
    return (
        <SvgIcon {...props}>
            <TwitterSVG />
        </SvgIcon>
    );
};

export const WhatsAppIcon = (props: SvgIconProps): JSX.Element => {
    return (
        <SvgIcon {...props}>
            <WhatsAppSVG />
        </SvgIcon>
    );
};

export default {
    AtIcon,
    GitHubIcon,
    FacebookIcon,
    LinkedInIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon
};
