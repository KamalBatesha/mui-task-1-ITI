import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";

function Skill({ title, description, Icon,iconColor}) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 450,
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e0e0e0",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardContent sx={{ p: 4, textAlign: "center" }}>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "#e8f5e9",
            mb: 3,
          }}
        >
          <Icon sx={{ fontSize: 36, color: iconColor }} />
        </Box>

        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          {title}{" "}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 3,
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#424242",
          }}
        >
          {description}{" "}
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderColor: "#1976d2",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            px: 4,
            py: 1,
            textTransform: "none",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "white",
              color: "#1976d2",
              borderColor: "#2e7d32",
            },
          }}
        >
          التفاصيل
        </Button>
      </CardContent>
    </Card>
  );
}

export default Skill;
