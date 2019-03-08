import React from 'react';
import Page from '../components/Page';
import { Title } from '../components/titles';

const ContactPage = () => (
  <Page>
    <Title>I'd love to get in touch.</Title>
    <form
      action="https://formspree.io/editor@ericp.co"
      method="POST"
    >
      <input name="name" label="Name" autoFocus />
      <input name="_replyto" label="Email" type="email" />
      <input name="_subject" label="Subject" />
      <label htmlFor="message" display="block">
        Message
        <textarea
          id="message"
          name="message"
          cols="8"
          display="block"
          width="100%"
        />
      </label>
      <input
        type="submit"
        value="Send"
        backgroundColor="#00449e"
        color="white"
        border="0"
        minWidth="72px"
        minHeight="40px"
        borderRadius="2px"
        boxShadow="0 4px 4px rgba(0,0,0,0.3)"
      />

      {/* Invisible honeypot field to deter spambots */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      {/* After submission, the user will be redirected here */}
      {/* <input
        *   type="hidden"
        *   name="_next"
        *   value={`${location}#sentLetter`}
        * />
        */
      }
    </form>
  </Page>
);

export default ContactPage;
