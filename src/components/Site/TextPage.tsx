import React from "react";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { Await, useAsyncValue, useLoaderData } from "react-router-dom";
import { SiteData } from "../../loaders/SiteLoader";

const TextPage = () => {
  const { siteData } = useLoaderData() as any;

  const Spinner = () => {
    return (
      <Box className="flex flex-col justify-center items-center">
        <CircularProgress size={64} />
      </Box>
    );
  };

  const Data = () => {
    const resolvedReviews = useAsyncValue() as SiteData;

    return (
      <Box className="flex flex-col justify-center items-center p-2 text-mintCream">
        <Typography variant="h5" className="w-4/5 p-2 text-center">
          Check in to {resolvedReviews.company} - {resolvedReviews.name}
        </Typography>

        <Box className="absolute bottom-1 w-1/2">
          <Box className="flex flex-col justify-center items-center">
            <Divider variant="middle" sx={{ width: "75%", m: 1 }} />

            <Typography variant="body1" className="p-1 text-center">
              Service provided by YAC.IS
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box className="flex flex-col w-full">
      <React.Suspense fallback={<Spinner />}>
        <Await resolve={siteData}>
          <Data />
        </Await>
      </React.Suspense>
    </Box>
  );
};

export default TextPage;
