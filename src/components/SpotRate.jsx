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
      return <ArrowUpwardIcon sx={{ fontSize: "1rem", marginLeft: "4px" }} />;
    } else if (change === "down") {
      return <ArrowDownwardIcon sx={{ fontSize: "1rem", marginLeft: "4px" }} />;
    }
    return null;
  };

  const renderCompactSpotSection = (metal, data, isPrimary = false) => (
    <Box
      sx={{
        background: "rgba(209, 164, 79, 0.05)",
        border: "2px solid #C79324",
        borderRadius: "12px",
        padding: "16px",
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px rgba(209, 164, 79, 0.2)",
        },
      }}
    >
      {/* Metal Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <Typography
          sx={{
            color: "#C79324",
            fontSize: isPrimary ? "1.1rem" : "1rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {metal}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "0.75rem",
            fontWeight: "500",
          }}
        >
          USD/OZ
        </Typography>
      </Box>

      {/* BID ASK Row */}
      <Grid container spacing={1} sx={{ marginBottom: "12px" }}>
        {/* BID */}
        <Grid item xs={6}>
          <Box
            sx={{
              background: getBackgroundColor(data.bidChanged),
              borderRadius: "8px",
              padding: "8px",
              textAlign: "center",
              border: "1px solid rgba(209, 164, 79, 0.3)",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.65rem",
                fontWeight: "600",
                marginBottom: "2px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              BID
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: isPrimary ? "1.4rem" : "1.2rem",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                {data.bid}
              </Typography>
              {getChangeIcon(data.bidChanged)}
            </Box>
          </Box>
        </Grid>

        {/* ASK */}
        <Grid item xs={6}>
          <Box
            sx={{
              background: getBackgroundColor(data.bidChanged),
              borderRadius: "8px",
              padding: "8px",
              textAlign: "center",
              border: "1px solid rgba(209, 164, 79, 0.3)",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.65rem",
                fontWeight: "600",
                marginBottom: "2px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              ASK
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: isPrimary ? "1.4rem" : "1.2rem",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                {data.ask}
              </Typography>
              {getChangeIcon(data.bidChanged)}
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* HIGH LOW Row */}
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Box
            sx={{
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              borderRadius: "6px",
              padding: "6px 8px",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(34, 197, 94, 0.9)",
                fontSize: "0.6rem",
                fontWeight: "600",
                marginBottom: "1px",
                textTransform: "uppercase",
              }}
            >
              HIGH
            </Typography>
            <Typography
              sx={{
                color: "#22c55e",
                fontSize: "0.85rem",
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
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: "6px",
              padding: "6px 8px",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(239, 68, 68, 0.9)",
                fontSize: "0.6rem",
                fontWeight: "600",
                marginBottom: "1px",
                textTransform: "uppercase",
              }}
            >
              LOW
            </Typography>
            <Typography
              sx={{
                color: "#ef4444",
                fontSize: "0.85rem",
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
      {/* Header */}
      {/* <Box
        sx={{
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "1.8vw",
            background: "#000",
            width: "100%",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          SPOT RATE
        </Typography>
      </Box> */}

      {/* Compact Spot Rates Grid */}
      <Grid container spacing={2} sx={{ maxWidth: "800px"}}>
        <Grid item xs={12} sm={6}>
          {renderCompactSpotSection("GOLD", goldData, true)}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderCompactSpotSection("SILVER", silverData, false)}
        </Grid>
      </Grid>

      {/* Market Status Indicator */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "16px",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#22c55e",
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": {
                boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.7)",
              },
              "70%": {
                boxShadow: "0 0 0 10px rgba(34, 197, 94, 0)",
              },
              "100%": {
                boxShadow: "0 0 0 0 rgba(34, 197, 94, 0)",
              },
            },
          }}
        />
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "0.75rem",
            fontWeight: "500",
            fontStyle: "italic",
          }}
        >
          Live Market Data • Updated: {new Date().toLocaleTimeString()}
        </Typography>
      </Box> */}
    </Box>
  );
};

export default SpotRate;