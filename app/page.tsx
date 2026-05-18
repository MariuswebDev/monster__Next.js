"use client";

import { useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };
  return (
    <div>
      <main className="p-10">
        <h1>Button Component Test</h1>

        <div className="flex gap-2.5 mt-5">
          <Button variant="primary" size="sm">
            Small Primary
          </Button>

          <Button variant="secondary" size="md">
            Medium Secondary
          </Button>

          <Button variant="danger" size="lg">
            Large Danger
          </Button>

          <Button
            variant="secondary"
            isLoading={isLoading}
            onClick={handleClick}
          >
            Click to Load
          </Button>
        </div>
      </main>
      <Card
        title={"Card Display"}
        description="This is a card component"
        variant="elevated"
      />
    </div>
  );
}
