import React from 'react';
import Page from '../components/Page';
import { Title } from '../components/titles';
import SEO from '../components/SEO';

const ContactPage = () => (
  <Page>
    <SEO title="Contact" />
    <Title>I'd love to get in touch.</Title>
    <NetlifyForm name="contact">
      <HiddenInput label="Form Name" name="form-name" value="contact" />
      <LabeledInput type="text" name="name" label="Name" autoFocus />
      <LabeledInput type="email" name="email" label="Email" />
      <LabeledInput
        name="message"
        label="Message"
        tag="textarea"
        style={{ width: '100%' }}
        rows={5}
      />
      <button style={{ display: 'block' }} type="submit">
        Send
      </button>
    </NetlifyForm>
  </Page>
);

const NetlifyForm = ({ name, children }) => (
  <form
    name={name}
    method="POST"
    data-netlify
    data-netlify-honeypot="eric-says-plz-no-bots"
    style={{ fontFamily: 'var(--sans-stack)' }}
  >
    {children}
  </form>
);

const HiddenInput = ({ label, name, value }) => (
  <label style={{ display: 'none' }}>
    {label}
    <input type="hidden" name={name} value={value} />
  </label>
);

const LabeledInput = ({ label, tag: Tag = 'input', ...inputProps }) => (
  <label
    style={{
      display: 'block',
      color: 'darkslategray',
      fontSize: 'var(--fs-neg1)',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    }}
  >
    {label}
    <Tag {...inputProps} />
  </label>
);

export default ContactPage;
