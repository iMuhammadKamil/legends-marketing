"use client";

import { useState } from "react";

interface PaymentPlanRequestProps {
  projectSlug?: string;
}

export default function PaymentPlanRequest({
  projectSlug,
}: PaymentPlanRequestProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <p>Thank you! Your payment plan will be shared on WhatsApp.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {projectSlug && (
        <input type="hidden" name="projectSlug" value={projectSlug} />
      )}
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Phone / WhatsApp
        <input type="tel" name="phone" required />
      </label>
      <label>
        Project
        <input type="text" name="project" value={projectSlug ?? ""} readOnly />
      </label>
      <button type="submit">Get Payment Plan</button>
    </form>
  );
}