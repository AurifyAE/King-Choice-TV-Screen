import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Paper,
} from "@mui/material";

const LondonFix = () => {
  // Static fixing data - edit these values directly in code
  const fixingData = {
    gold: {
      amPrice: 3657.85,
      pmPrice: 3663.15,
    },
    silver: {
      noonPrice: 42.235,
    }
  };

  // Helper function to format price values
  const formatPrice = (price) => {
    return price.toFixed(2).toLocaleString();
  };

  return (
    <Box sx={{
      backgroundColor: "transparent",
      marginTop: "30px",
    }}>
      {/* London Fix Table */}
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          border: "1px solid #D1A44F",
          boxShadow: "none",
        }}
      >
        <Table>
          {/* Table Head for Gold */}
          <TableHead>
            <TableRow sx={{ backgroundColor: "#000000" }}>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "1.4vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  width: "25%",
                }}
              >
                METAL
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "1.4vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  width: "25%",
                }}
              >
                AM FIXING
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "1.4vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  width: "25%",
                }}
              >
                PM FIXING
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "1.4vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  width: "25%",
                }}
              >
                CHANGE
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Gold Row */}
          <TableBody>
            <TableRow sx={{ backgroundColor: "transparent" }}>
              {/* Gold Metal */}
              <TableCell
                sx={{
                  color: "#D1A44F",
                  fontWeight: "bold",
                  fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "1.5vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  padding: "10px",
                }}
              >
                GOLD
              </TableCell>

              {/* AM Fixing */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "10px" }}>
                <Typography
                  sx={{
                    color: "#C79324",
                    fontWeight: "bold",
                    fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "1.6vw" },
                  }}
                >
                  {formatPrice(fixingData.gold.amPrice)}
                </Typography>
              </TableCell>

              {/* PM Fixing */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "10px" }}>
                <Typography
                  sx={{
                    color: "#C79324",
                    fontWeight: "bold",
                    fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "1.6vw" },
                  }}
                >
                  {formatPrice(fixingData.gold.pmPrice)}
                </Typography>
              </TableCell>

              {/* Change */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "10px" }}>
                <Typography
                  sx={{
                    color: fixingData.gold.pmPrice > fixingData.gold.amPrice ? "#4CAF50" : "#F44336",
                    fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "1.4vw" },
                    fontWeight: "bold",
                  }}
                >
                  {fixingData.gold.pmPrice > fixingData.gold.amPrice ? "+" : ""}{(fixingData.gold.pmPrice - fixingData.gold.amPrice).toFixed(2)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>

          {/* Silver Row */}
          <TableBody>
            <TableRow sx={{ backgroundColor: "transparent" }}>
              {/* Silver Metal */}
              <TableCell
                sx={{
                  color: "#D1A44F",
                  fontWeight: "bold",
                  fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "1.5vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  padding: "10px",
                }}
              >
                SILVER
              </TableCell>

              {/* Noon Fixing Price */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "10px" }}>
                <Typography
                  sx={{
                    color: "#C79324",
                    fontWeight: "bold",
                    fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "1.6vw" },
                  }}
                >
                  {formatPrice(fixingData.silver.noonPrice)}
                </Typography>
              </TableCell>

              {/* Empty cell to maintain table structure */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "10px" }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "1.4vw" },
                    fontWeight: "bold",
                  }}
                >
                  -
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LondonFix;