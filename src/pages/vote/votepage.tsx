import React from "react";
import { Timer } from "../../components/timer";
import { Vote } from "../../components/vote";
import { StatusContents } from "../../components/status";

export const VotePage: React.FC = () => {
  return (
    <>
      <StatusContents />
      <Timer />
      <Vote />
    </>
  );
};
