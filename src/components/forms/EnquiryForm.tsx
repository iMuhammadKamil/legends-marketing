"use client";

import { useState } from "react";

interface EnquiryFormProps {
  projectSlug: string;
}

export default function EnquiryForm({ projectSlug }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <p>Thank you! Your enquiry has been received.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="projectSlug" value={projectSlug} />
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" required />
      </label>
      <label>
        Investment Budget
        <select name="budget">
          <option value="">Select budget</option>
          <option value="under-2m">Under PKR 2M</option>
          <option value="2m-5m">PKR 2M - 5M</option>
          <option value="5m-10m">PKR 5M - 10M</option>
          <option value="10m-plus">PKR 10M+</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={3} />
      </label>
      <button type="submit">Submit Enquiry</button>
    </form>
  );
}