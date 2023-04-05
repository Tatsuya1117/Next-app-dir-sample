import React from "react";

export function Article({ params }: { params: { slug: string } }) {
  return (
    <>
      <div>
        <h1>詳細</h1>
        <p>スラッグ: {params.slug}</p>
      </div>
    </>
  );
}
