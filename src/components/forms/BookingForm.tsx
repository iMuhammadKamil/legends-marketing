"use client";

import { useState } from "react";

interface BookingFormProps {
  projectSlug?: string;
}

export default function BookingForm({ projectSlug }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <p>Thank you! Our team will contact you to complete the booking.</p>;
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
        Phone
        <input type="tel" name="phone" required />
      </label>
      <label>
        Plot Size
        <input type="text" name="plotSize" placeholder="e.g. 5 Marla" />
      </label>
      <label>
        Payment Plan
        <input type="text" name="plan" placeholder="e.g. 3-Year Plan" />
      </label>
      <label>
        Preferred Block / Sector
        <input type="text" name="block" />
      </label>
      <button type="submit">Submit Booking Request</button>
    </form>
  );
}