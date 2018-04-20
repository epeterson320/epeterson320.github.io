import React from 'react';
import g from 'glamorous';

import { rhythm, scale } from '../utils/typography';

const Input = ({ name, label, type = 'text' }) => (
  <g.Label htmlFor={name} display="block">
    {label}
    <g.Input id={name} type={type} name={name} display="block" width="15em" />
  </g.Label>
);

export default ({ subject, location = '.' }) => (
  <g.Form
    action="https://formspree.io/editor@ericp.co"
    method="POST"
    marginTop={rhythm(2)}
    maxWidth="38em"
  >
    <g.Div {...scale(-0.333)}>
      Send a letter to the editor. I will do my best to respond to thoughtful
      letters in later posts.
    </g.Div>

    {/* Visible fields */}
    <Input name="name" label="Name" />
    <Input name="_replyto" label="Email" type="email" />
    <g.Label htmlFor="message" display="block">
      Message
      <g.Textarea
        id="message"
        name="message"
        cols="8"
        display="block"
        width="100%"
      />
    </g.Label>
    <g.Input
      type="submit"
      value="Send"
      backgroundColor="#00449e"
      color="white"
      border="0"
      marginTop={rhythm(0.333)}
      minWidth="72px"
      minHeight="40px"
      borderRadius="2px"
      boxShadow="0 4px 4px rgba(0,0,0,0.3)"
    />

    {/* Honeypot field to deter spambots */}
    <input type="text" name="_gotcha" style={{ display: 'none' }} />

    {/* Subject of email that I will get */}
    <input type="hidden" name="_subject" value={subject} />

    {/* After submission, the user will be redirected here */}
    <input type="hidden" name="_next" value={`${location}#sentLetter`} />
  </g.Form>
);
