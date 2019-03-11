import React from 'react';
import Page from '../components/Page';
import { Title } from '../components/titles';

const ContactPage = () => (
  <Page>
    <Title>I'd love to get in touch.</Title>
    <NetlifyForm name="contact">
      <HiddenInput label="Form Name" name="form-name" value="contact" />
      <LabeledInput type="text" name="name" label="Name" autoFocus />
      <LabeledInput type="email" name="email" label="Email" />
      <LabeledInput name="message" label="Message" tag="textarea" className="w-full" />
      <PrimaryButton type="submit">Send</PrimaryButton>
    </NetlifyForm>
  </Page>
);

const NetlifyForm = ({ name, children }) => (
  <form
    name={name}
    method="POST"
    data-netlify
    data-netlify-honeypot="eric-says-plz-no-bots"
    className="font-sans max-w-md w-full mx-auto"
  >
    {children}
  </form>
);

const HiddenInput = ({ label, name, value }) => (
  <label className="hidden">{label}<input type="hidden" name={name} value={value} /></label>
);

const LabeledInput = ({ label, className = '', tag: Tag = 'input', ...inputProps }) => (
  <label className="block text-grey-darker text-sm font-bold mb-2">
    {label}
    <Tag
      className={`block shadow appearance-none border rounded py-2 px-3 mt-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline ${className}`}
      {...inputProps}
    />
  </label>
);

const PrimaryButton = ({ children, type }) => (
  <button
    className="block bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type={type}
  >
    {children}
  </button>
);

export default ContactPage;
