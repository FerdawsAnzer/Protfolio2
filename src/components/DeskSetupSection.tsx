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
      <Fade>
        <h2 className="fade-in">
          I’m a software engineering student passionate about building modern,
          user-focused web applications.
        </h2>
        <h2>
          I love creating interactive, intuitive interfaces that solve
          real-world problems.
        </h2>
        <h2 className="fade-in" style={{ animationDelay: "0.3s" }}>
          This is my study desk — the space where I design interfaces, write
          code, and turn ideas into real projects.
        </h2>
      </Fade>
      {desks.map((desk) => (
        <DeskCard key={desk.id} desk={desk} />
      ))}
    </section>
  );
}
