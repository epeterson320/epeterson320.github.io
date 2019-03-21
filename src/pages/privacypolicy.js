import React from 'react';
import Page from '../components/Page';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => (
  <Page>
    <SEO title="Occam's Flashlight Privacy Policy" />
    <h1>Occam's Flashlight Privacy Policy</h1>
    <p>
      Occam's Flashlight will not collect any personal information, anonymous or
      otherwise. The app requests permission to use the device's camera in order
      to have access to the LED flash. No information is stored on the device or
      on remote servers.
    </p>
  </Page>
);

export default PrivacyPolicyPage;
