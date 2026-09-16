import Button from "@/components/shared/Button/Button";

export default function HeaderCTA() {
  return (
    <div className="nav-cta">
      <Button href="/contact" variant="gold">
        Book a Consultation
      </Button>
    </div>
  );
}