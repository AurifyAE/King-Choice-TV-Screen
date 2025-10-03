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
      amPrice: 3877.5,
      pmPrice: 3878.1,
    },
    silver: {
      noonPrice: 47.395,
    }
  };

  // Helper function to format price values
  const formatPrice = (price) => {
    return price.toFixed(2).toLocaleString();
  };

  return (
    <Box sx={{
      backgroundColor: "transparent",
      // marginTop: "15px",
    }}>
      {/* London Fix Table */}
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          borderRadius: "5px",
          border: "1px solid #D1A44F",
          boxShadow: "none",
          width: { xs: '100%', sm: '100%', md: '600px', lg: '700px' },
        }}
      >
        <Table size="small">
          {/* Table Head for Gold */}
          <TableHead>
            <TableRow sx={{ backgroundColor: "#000000" }}>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  width: "25%",
                  padding: "4px 6px",
                }}
              >
                METAL
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  width: "25%",
                  padding: "4px 6px",
                }}
              >
                AM FIXING
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  width: "25%",
                  padding: "4px 6px",
                }}
              >
                PM FIXING
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  width: "25%",
                  padding: "4px 6px",
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
                  fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  padding: "4px 6px",
                }}
              >
                GOLD
              </TableCell>

              {/* AM Fixing */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: "#C79324",
                    fontWeight: "bold",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  }}
                >
                  {formatPrice(fixingData.gold.amPrice)}
                </Typography>
              </TableCell>

              {/* PM Fixing */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: "#C79324",
                    fontWeight: "bold",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  }}
                >
                  {formatPrice(fixingData.gold.pmPrice)}
                </Typography>
              </TableCell>

              {/* Change */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: fixingData.gold.pmPrice > fixingData.gold.amPrice ? "#4CAF50" : "#F44336",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
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
                  fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  textAlign: "center",
                  border: "1px solid #C79324",
                  padding: "4px 6px",
                }}
              >
                SILVER
              </TableCell>

              {/* Noon Fixing Price */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: "#C79324",
                    fontWeight: "bold",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  }}
                >
                  {formatPrice(fixingData.silver.noonPrice)}
                </Typography>
              </TableCell>

              {/* Empty cell to maintain table structure */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                    fontWeight: "bold",
                  }}
                >
                  -
                </Typography>
              </TableCell>

              {/* Empty cell for change column */}
              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
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
