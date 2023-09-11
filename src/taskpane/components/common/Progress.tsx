import * as React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

export interface ProgressProps {
  logo: string;
  title: string;
  message: string;
}

export const Progress: React.FC<ProgressProps> = (props) => {
  const { logo, message, title } = props;

  return (
    <Box>
      <img width="90" height="90" src={logo} alt={title} title={title} />
      <Typography variant="caption">{title}</Typography>
      <Typography variant="subtitle1">{message}</Typography>
      <CircularProgress color="primary" size={80} />
    </Box>
  );
};
