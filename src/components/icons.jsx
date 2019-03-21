import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faRss, faBars } from '@fortawesome/free-solid-svg-icons';

export const BarsIcon = () => <FontAwesomeIcon icon={faBars} size="lg" />;
export const CodePenIcon = () => <FontAwesomeIcon icon={faCodepen} />;
export const EmailIcon = () => <FontAwesomeIcon icon={faEnvelope} />;
export const GitHubIcon = () => <FontAwesomeIcon icon={faGithub} />;
export const RssIcon = () => <FontAwesomeIcon icon={faRss} />;
