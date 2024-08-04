"use client";

import WaveTrack from "@/components/track/page";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function DeltailPage({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("audio");

  console.log(">> Check prop: ", search);
  return (
    <>
      <Container>
        <WaveTrack />
      </Container>
    </>
  );
}
