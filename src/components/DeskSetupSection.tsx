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
          className="fade-in"
          style={{ animationDelay: "0.3s", marginTop: "0.5rem" }}
        >
          Backend-focused full-stack developer building scalable web
          applications and real-time systems, with hands-on experience in API
          design, real-time data processing, and IoT integration. Focused on
          building efficient, reliable systems and solving practical problems
          through software.
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
