import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import { formatCurrency } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectPricingProps {
  project: Project;
}

export default function ProjectPricing({ project }: ProjectPricingProps) {
  const { pricing } = project;
  const hasPrices = pricing.minPrice > 0 && pricing.maxPrice > 0;
  return (
    <section className="project-section">
      <Container>
        <div className="project-detail">
          <h2>Price &amp; Availability</h2>
          {hasPrices ? (
            <>
              <p>
                From {formatCurrency(pricing.minPrice, pricing.currency)} to{" "}
                {formatCurrency(pricing.maxPrice, pricing.currency)}
              </p>
              {pricing.pricePerMarla ? (
                <p>
                  Starting from {formatCurrency(pricing.pricePerMarla, pricing.currency)}{" "}
                  per Marla
                </p>
              ) : null}
            </>
          ) : (
            <p>
              Current prices are shared directly with interested investors.
              Contact our investment advisor for the latest details.
            </p>
          )}
          <p className="form__note">
            Last updated: {pricing.lastUpdated}
            {pricing.disclaimer ? ` , ${pricing.disclaimer}` : ""}
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Button href="/contact" variant="gold">
              Request Current Prices
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}