import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import type { DeskSetup } from "src/Types/DeskSetup";
import { getDeskSetups } from "src/api/getDeskSetup";
import { DeskCard } from "src/components/DeskCard";

export function DeskSetupSection() {
  const [desks, setDesks] = useState<DeskSetup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDeskSetups().then((data) => {
      setDesks(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading desk setup...</p>;

  return (
    <section>
      <Fade duration={1500} delay={600} triggerOnce>
        <h2
          className="fade-in font-bold"
          style={{
            animationDelay: "0.3s",
            marginTop: "0.5rem",
            fontWeight: 600,
          }}
        >
          Software Engineering graduate building practical software, real-time
          systems, and AI-powered applications.
        </h2>
        <br />
        <h2>
          I work across full-stack development, backend systems, IoT, and
          real-time data processing, with a focus on building reliable software
          and connecting different parts of a system together.
        </h2>
      </Fade>
      <Fade duration={1500} delay={700} triggerOnce>
        <h2
          className="fade-in"
          style={{ animationDelay: "0.3s", marginTop: "1rem" }}
        ></h2>
      </Fade>
      <Fade duration={1500} delay={1000} triggerOnce>
        {desks.map((desk) => (
          <DeskCard key={desk.id} desk={desk} />
        ))}
      </Fade>
    </section>
  );
}
