import React from "react";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { Await, useAsyncValue, useLoaderData } from "react-router-dom";
import QRCode from "react-qr-code";
import { SiteData } from "../../loaders/SiteLoader";

const QrPage = () => {
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
    const address = `${window.location.origin}/checkin/${resolvedReviews.id}`;

    return (
      <Box className="flex flex-col justify-center items-center p-2">
        <Box className="flex flex-col justify-center items-center w-3/5 bg-white p-4 m-4 border-2">
          <QRCode
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={address}
          />
        </Box>

        <Divider variant="middle" sx={{ width: "75%", m: 1 }} />

        <Typography variant="h6" className="w-4/5 p-2 text-center">
          {address}
        </Typography>
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

export default QrPage;
