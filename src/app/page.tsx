import MainSlider from "@/components/main.slider";
import { sendRequest } from "@/utils/api";
import { Container } from "@mui/material";
import * as React from "react";

export default async function HomePage() {
  const chill = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  });

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "WORKOUT", limit: 10 },
  });

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "PARTY", limit: 10 },
  });
  return (
    <>
      <Container>
        <MainSlider title={"Top Chill"} data={chill?.data ?? []} />
        <MainSlider title={"Top Workout"} data={workouts?.data ?? []} />
        <MainSlider title={"Top Party"} data={party?.data ?? []} />
      </Container>
    </>
  );
}
