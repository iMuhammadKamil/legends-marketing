"use client";

import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <p>Thank you! A specialist will reach out shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" required />
      </label>
      <label>
        What are you looking for?
        <select name="type">
          <option value="investment">Investment</option>
          <option value="home">Home</option>
          <option value="commercial">Commercial</option>
        </select>
      </label>
      <label>
        Budget
        <select name="budget">
          <option value="">Select budget</option>
          <option value="under-2m">Under PKR 2M</option>
          <option value="2m-5m">PKR 2M - 5M</option>
          <option value="5m-10m">PKR 5M - 10M</option>
          <option value="10m-plus">PKR 10M+</option>
        </select>
      </label>
      <label>
        Preferred Location
        <select name="location">
          <option value="islamabad">Islamabad</option>
          <option value="rawalpindi">Rawalpindi</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Timeline
        <select name="timeline">
          <option value="immediate">Immediate</option>
          <option value="3-months">3 Months</option>
          <option value="6-months">6 Months</option>
          <option value="researching">Researching</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}