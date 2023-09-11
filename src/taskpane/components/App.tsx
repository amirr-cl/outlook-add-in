import * as React from "react";
import { Stack, Typography } from "@mui/material";

import { Progress } from "./common/Progress";

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export const App: React.FC<AppProps> = (props) => {
  const { title, isOfficeInitialized } = props;

  if (!isOfficeInitialized) {
    return (
      <Progress
        title={title}
        logo={require("./../../../assets/logo-filled.png")}
        message="Please sideload your addin to see app body."
      />
    );
  }

  return (
    <Stack alignItems="center" justifyContent="center" margin={10}>
      <img width="90" height="90" src={require("./../../../assets/logo-filled.png")} alt={title} title={title} />
      <Typography variant="caption"> Welcome</Typography>
    </Stack>
  );
};
