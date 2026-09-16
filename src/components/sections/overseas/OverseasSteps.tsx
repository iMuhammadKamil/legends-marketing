import Container from "@/components/shared/Container/Container";

const steps = [
  "Research and shortlist projects",
  "Connect with your overseas advisor",
  "Complete documentation",
  "Make your payment",
  "Receive booking confirmation",
  "After-sales coordination",
];

export default function OverseasSteps() {
  return (
    <section className="overseas-steps">
      <Container>
        <h2>Remote Booking Process</h2>
        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span> {step}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}