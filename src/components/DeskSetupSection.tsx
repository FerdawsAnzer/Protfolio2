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
      <h2>My Desk Setup</h2>
      {desks.map((desk) => (
        <DeskCard key={desk.id} desk={desk} />
      ))}
    </section>
  );
}
