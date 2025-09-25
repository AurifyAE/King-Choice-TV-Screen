import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useSpotRate } from "../context/SpotRateContext";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const SpotRate = () => {
  const { goldData, silverData } = useSpotRate();

  const getBackgroundColor = (change) => {
    if (change === "up") {
      return "linear-gradient(135deg, #22c55e, #16a34a)";
    } else if (change === "down") {
      return "linear-gradient(135deg, #ef4444, #dc2626)";
    }
    return "linear-gradient(135deg, #374151, #1f2937)";
  };

  const getChangeIcon = (change) => {
    if (change === "up") {
      return <ArrowUpwardIcon sx={{ fontSize: "0.6rem", marginLeft: "2px" }} />;
    } else if (change === "down") {
      return <ArrowDownwardIcon sx={{ fontSize: "0.6rem", marginLeft: "2px" }} />;
    }
    return null;
  };

  const renderCompactSpotSection = (metal, data, isPrimary = false) => (
    <Box
      sx={{
        background: "rgba(209, 164, 79, 0.05)",
        border: "1px solid #C79324",
        borderRadius: "6px",
        padding: "8px",
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 4px 15px rgba(209, 164, 79, 0.1)",
        },
      }}
    >
      {/* Metal Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <Typography
          sx={{
            color: "#C79324",
            fontSize: isPrimary ? "1.1rem" : "1rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {metal}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "0.9rem",
            fontWeight: "500",
          }}
        >
          USD/OZ
        </Typography>
      </Box>

      {/* BID ASK Row */}
      <Grid container spacing={0.5} sx={{ marginBottom: "6px" }}>
        {/* BID */}
        <Grid item xs={6}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {/* Vertical BID text */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: "1",
                }}
              >
                BID
              </Typography>
            </Box>
            {/* BID value box */}
            <Box
              sx={{
                background: getBackgroundColor(data.bidChanged),
                borderRadius: "4px",
                padding: "6px 8px",
                textAlign: "center",
                border: "1px solid rgba(209, 164, 79, 0.3)",
                flex: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: isPrimary ? "1.2rem" : "1.3rem",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                  }}
                >
                  {data.bid}
                </Typography>
                {getChangeIcon(data.bidChanged)}
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* ASK */}
        <Grid item xs={6}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {/* Vertical ASK text */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: "1",
                }}
              >
                ASK
              </Typography>
            </Box>
            {/* ASK value box */}
            <Box
              sx={{
                background: getBackgroundColor(data.bidChanged),
                borderRadius: "4px",
                padding: "6px 8px",
                textAlign: "center",
                border: "1px solid rgba(209, 164, 79, 0.3)",
                flex: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: isPrimary ? "1.2rem" : "1.3rem",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                  }}
                >
                  {data.ask}
                </Typography>
                {getChangeIcon(data.bidChanged)}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* HIGH LOW Row */}
      <Grid container spacing={0.5}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              borderRadius: "3px",
              padding: "3px 4px",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(34, 197, 94, 0.9)",
                fontSize: "0.9rem",
                fontWeight: "600",
                marginBottom: "0px",
                textTransform: "uppercase",
              }}
            >
              HIGH
            </Typography>
            <Typography
              sx={{
                color: "#22c55e",
                fontSize: "0.9rem",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              {data.high}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: "3px",
              padding: "3px 4px",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(239, 68, 68, 0.9)",
                fontSize: "0.9rem",
                fontWeight: "600",
                marginBottom: "0px",
                textTransform: "uppercase",
              }}
            >
              LOW
            </Typography>
            <Typography
              sx={{
                color: "#ef4444",
                fontSize: "0.9rem",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              {data.low}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        marginTop: "0px",
      }}
    >
      {/* Compact Spot Rates Grid */}
      <Grid container spacing={1} sx={{ maxWidth: "600px" }}>
        <Grid item xs={12} sm={6}>
          {renderCompactSpotSection("GOLD", goldData, true)}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderCompactSpotSection("SILVER", silverData, false)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpotRate;