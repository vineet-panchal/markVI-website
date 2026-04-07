/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";

function getDescriptionBullets(description: string) {
  const newlineBullets = description
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (newlineBullets.length > 1) {
    return newlineBullets;
  }

  return description
    .split(/\.\s+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => (part.endsWith(".") ? part : `${part}.`));
}

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function CertificationsSection() {
  return (
    <div className="w-full grid gap-6">
      {DATA.certifications.map((certification) => {
        const bullets = getDescriptionBullets(certification.description);
        const cardKey = `${certification.company}-${certification.title}-${certification.start}`;

        return (
          <div key={cardKey} className="w-full border-b-0 grid gap-2">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={certification.logoUrl} alt={certification.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none">{certification.company}</div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {certification.title}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {certification.start} - {certification.end ?? "Present"}
                </span>
              </div>
            </div>
            <ul className="ml-17 list-disc space-y-1 pr-2 text-xs sm:text-sm text-muted-foreground">
              {bullets.map((bullet, index) => (
                <li key={`${certification.company}-${index}`}>{bullet}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}