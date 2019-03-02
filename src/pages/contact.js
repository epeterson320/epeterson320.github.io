import React from 'react';

export default () => (
  <main>
    <h1>I'd love to get in touch.</h1>
    <form
      action="https://formspree.io/editor@ericp.co"
      method="POST"
    >
      {/* Visible fields */}
      <input name="name" label="Name" autoFocus />
      <input name="_replyto" label="Email" type="email" />
      {/* Subject of email that I will get */}
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

      {/* Honeypot field to deter spambots */}
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
  </main>
);
