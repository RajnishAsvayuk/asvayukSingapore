"use client";

import Script from "next/script";

const SeoSchema = ({ schemas = [] }) => {
  if (!schemas.length) return null;

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
};

export default SeoSchema;