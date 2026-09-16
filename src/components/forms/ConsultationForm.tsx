"use client";

import { useState } from "react";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <p>Thank you! Your consultation request has been received.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Phone / WhatsApp
        <input type="tel" name="phone" required />
      </label>
      <label>
        Preferred Date
        <input type="date" name="date" />
      </label>
      <label>
        Preferred Time
        <input type="time" name="time" />
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
      <button type="submit">Request Consultation</button>
    </form>
  );
}