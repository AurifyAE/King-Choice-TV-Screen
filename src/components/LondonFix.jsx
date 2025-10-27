import React, { useEffect, useState } from "react";
import io from "socket.io-client";
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
  CircularProgress,
} from "@mui/material";
import { fetchLondonFix } from "../api/api";

const SOCKET_URL = import.meta.env.VITE_APP_SOCKET_URL || "http://localhost:8000";

const LondonFix = () => {
  const [todayFix, setTodayFix] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initial fetch from API
  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetchLondonFix();
      console.log(res.data)
      if (res.data.success) {
        setTodayFix(res.data.todayFix || res.data.historyFix[0] || null);
      }
    } catch (err) {
      console.error("Error fetching London Fix:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();

    // Connect to socket
    const socket = io(SOCKET_URL, {
      query: { secret: import.meta.env.VITE_APP_SOCKET_SECRET },
      transports: ["websocket"],
      withCredentials: true,
    });

    // Log connection status
    socket.on("connect", () => {
      // console.log("Connected to Socket.IO server");
      // console.log(socket.id);
    });

    socket.on("connect_error", (err) => {
      // console.error("Socket connection error:", err.message);
    });

    // Listen to London Fix updates
    socket.on("londonfix-updated", (data) => {
      // console.log("Received londonfix-updated event:", data);
      // console.log("Real-time update received:", data);
      setTodayFix(data.todayFix || data.londonFix || null);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const getMetal = (metalType) => {
    return todayFix?.metals?.find((m) => m.metalType === metalType);
  };

  const formatPrice = (price) => {
    return price !== null && price !== undefined ? price.toFixed(2).toLocaleString() : "-";
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress sx={{ color: "#C79324" }} />
      </Box>
    );
  }

  const gold = getMetal("Gold");
  const silver = getMetal("Silver");
  const goldChange = gold?.amPrice && gold?.pmPrice 
    ? (gold.pmPrice - gold.amPrice).toFixed(2) 
    : "-";

  return (
    <Box sx={{
      backgroundColor: "transparent",
    }}>
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

              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: "#C79324",
                    fontWeight: "bold",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  }}
                >
                  {gold ? formatPrice(gold.amPrice) : "-"}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: "#C79324",
                    fontWeight: "bold",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  }}
                >
                  {gold ? formatPrice(gold.pmPrice) : "-"}
                </Typography>
              </TableCell>

              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: goldChange !== "-" && parseFloat(goldChange) > 0 ? "#4CAF50" : goldChange !== "-" && parseFloat(goldChange) < 0 ? "#F44336" : "white",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                    fontWeight: "bold",
                  }}
                >
                  {goldChange !== "-" && parseFloat(goldChange) > 0 ? "+" : ""}{goldChange}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>

          {/* Silver Row */}
          <TableBody>
            <TableRow sx={{ backgroundColor: "transparent" }}>
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

              <TableCell sx={{ border: "1px solid #C79324", textAlign: "center", padding: "4px 6px" }}>
                <Typography
                  sx={{
                    color: "#C79324",
                    fontWeight: "bold",
                    fontSize: { xs: "10px", sm: "11px", md: "15px", lg: "1vw" },
                  }}
                >
                  {silver ? formatPrice(silver.noonPrice) : "-"}
                </Typography>
              </TableCell>

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