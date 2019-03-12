import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

export const GitHubIcon = () => <FontAwesomeIcon icon={faGithub} />;
export const CodePenIcon = () => <FontAwesomeIcon icon={faCodepen} />;
export const RssIcon = () => <FontAwesomeIcon icon={faRss} />;
export const EmailIcon = () => <FontAwesomeIcon icon={faEnvelope} />;
