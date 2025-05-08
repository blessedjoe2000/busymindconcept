import React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, message }) => (
  <div>
    <h1>New Contact Message</h1>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
