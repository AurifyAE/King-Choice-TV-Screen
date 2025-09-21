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
import { useSpotRate } from "../context/SpotRateContext";

const LondonFix = () => {
  const { goldData, silverData } = useSpotRate();

  // Mock London Fix data - in a real app, this would come from an API
  const londonFixData = [
    {
      metal: "GOLD",
      amPrice: parseFloat(goldData.bid) || 2650.50,
      pmPrice: parseFloat(goldData.ask) || 2655.75,
      unit: "USD/OZ",
      change: {
        am: { value: 15.25, isPositive: true },
        pm: { value: 8.75, isPositive: true }
      }
    },
    {
      metal: "SILVER",
      amPrice: parseFloat(silverData.bid) || 31.45,
      pmPrice: parseFloat(silverData.ask) || 31.62,
      unit: "USD/OZ",
      change: {
        am: { value: 0.85, isPositive: true },
        pm: { value: 0.42, isPositive: false }
      }
    }
  ];

  // Helper function to format price values
  const formatPrice = (price) => {
    return price.toFixed(2).toLocaleString();
  };

  // Helper function to format change values
  const formatChange = (change) => {
    const sign = change.isPositive ? "+" : "-";
    return `${sign}${Math.abs(change.value).toFixed(2)}`;
  };

  return (
    <Box sx={{
      backgroundColor: "transparent",
      marginTop: "20px",
    }}>
      {/* London Fix Header */}
      {/* <Box
        sx={{
          textAlign: "center",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "1.8vw",
            background: "linear-gradient(to right, #D1A44F 0%, #000000 100%)",
            width: "100%",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          LONDON FIX
        </Typography>
      </Box> */}

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
          {/* Table Head */}
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#000000",
              }}
            >
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "1.4vw" },
                  textAlign: "left",
                  border: "1px solid #C79324",
                  backgroundColor: "transparent",
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
                  backgroundColor: "transparent",
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
                  backgroundColor: "transparent",
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
                  backgroundColor: "transparent",
                  width: "25%",
                }}
              >
                CHANGE
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {londonFixData.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: "transparent",
                  '&:hover': {
                    backgroundColor: "rgba(209, 164, 79, 0.05)",
                  },
                }}
              >
                {/* Metal Name */}
                <TableCell
                  sx={{
                    color: "#D1A44F",
                    fontWeight: "bold",
                    fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "1.5vw" },
                    textAlign: "left",
                    border: "1px solid #C79324",
                    backgroundColor: "transparent",
                    padding: "10px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#C79324",
                        fontWeight: "bold",
                        fontSize: "inherit",
                      }}
                    >
                      {item.metal}
                    </Typography>
                    {/* <Typography
                      sx={{
                        color: "white",
                        fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "1.0vw" },
                        marginTop: "4px",
                      }}
                    >
                      {item.unit}
                    </Typography> */}
                  </Box>
                </TableCell>

                {/* AM Fixing Price */}
                <TableCell
                  sx={{
                    border: "1px solid #C79324",
                    backgroundColor: "transparent",
                    padding: "10x",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#C79324",
                        fontWeight: "bold",
                        fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "1.6vw" },
                      }}
                    >
                      {formatPrice(item.amPrice)}
                    </Typography>
                    {/* <Typography
                      sx={{
                        color: item.change.am.isPositive ? "#4CAF50" : "#F44336",
                        fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "1.0vw" },
                        fontWeight: "bold",
                        marginTop: "4px",
                      }}
                    >
                      {formatChange(item.change.am)}
                    </Typography> */}
                  </Box>
                </TableCell>

                {/* PM Fixing Price */}
                <TableCell
                  sx={{
                    border: "1px solid #C79324",
                    backgroundColor: "transparent",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#C79324",
                        fontWeight: "bold",
                        fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "1.6vw" },
                      }}
                    >
                      {formatPrice(item.pmPrice)}
                    </Typography>
                    {/* <Typography
                      sx={{
                        color: item.change.pm.isPositive ? "#4CAF50" : "#F44336",
                        fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "1.0vw" },
                        fontWeight: "bold",
                        marginTop: "4px",
                      }}
                    >
                      {formatChange(item.change.pm)}
                    </Typography> */}
                  </Box>
                </TableCell>

                {/* Overall Change */}
                <TableCell
                  sx={{
                    border: "1px solid #C79324",
                    backgroundColor: "transparent",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    {/* <Typography
                      sx={{
                        color: "white",
                        fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "1.2vw" },
                        marginBottom: "4px",
                      }}
                    >
                      AM vs PM
                    </Typography> */}
                    <Typography
                      sx={{
                        color: item.pmPrice > item.amPrice ? "#4CAF50" : "#F44336",
                        fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "1.4vw" },
                        fontWeight: "bold",
                      }}
                    >
                      {item.pmPrice > item.amPrice ? "+" : ""}{(item.pmPrice - item.amPrice).toFixed(2)}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LondonFix;