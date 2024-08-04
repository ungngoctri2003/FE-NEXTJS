"use client";
import { Container } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
export default function AppFooter() {
  return (
    <>
      <AppBar position="fixed" color="inherit" sx={{ top: "auto", bottom: 0 }}>
        <Container sx={{ display: "flex", gap: 5 }}>
          <Toolbar sx={{ flex: 1 }}>
            <AudioPlayer
              autoPlay
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/ngoctriit.mp3`}
              onPlay={(e) => console.log("onPlay")}
              style={{ boxShadow: "unset", background: "#fff" }}
              // other props here
            />
          </Toolbar>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              minWidth: 100,
            }}
          >
            <div style={{ color: "#ccc" }}>Chesse</div>
            <div style={{ color: "black" }}>Who am I??</div>
          </div>
        </Container>
      </AppBar>
    </>
  );
}
