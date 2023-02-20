import { Skeleton } from "@mui/material";
import React, { FC } from "react";

interface SkeletonProps {
  marginTop: string;
  height: string;
}

export const SkeletonCard: FC<SkeletonProps> = ({ marginTop, height }) => {
  return (
    <Skeleton
      sx={{ bgcolor: "#dde1e5", marginTop: marginTop }}
      variant="rounded"
      animation="wave"
      width="100%"
      height={height}
    />
  );
};
