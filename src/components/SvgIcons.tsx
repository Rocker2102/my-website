import React from 'react';

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import { ReactComponent as AtSVG } from '../icons/at.svg';
import { ReactComponent as GitHubSVG } from '../icons/github.svg';
import { ReactComponent as TwitterSVG } from '../icons/twitter.svg';
import { ReactComponent as FacebookSVG } from '../icons/facebook.svg';
import { ReactComponent as LinkedInSVG } from '../icons/linkedin.svg';
import { ReactComponent as TelegramSVG } from '../icons/telegram.svg';
import { ReactComponent as WhatsAppSVG } from '../icons/whatsapp.svg';

export const AtIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <AtSVG />
        </SvgIcon>
    );
};
export const GitHubIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <GitHubSVG />
        </SvgIcon>
    );
};

export const FacebookIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <FacebookSVG />
        </SvgIcon>
    );
};

export const LinkedInIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <LinkedInSVG />
        </SvgIcon>
    );
};

export const TelegramIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <TelegramSVG />
        </SvgIcon>
    );
};

export const TwitterIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <TwitterSVG />
        </SvgIcon>
    );
};

export const WhatsAppIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
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
