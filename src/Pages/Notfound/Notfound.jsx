import { Box, Typography, useTheme, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ErrorOutlineIcon
          sx={{ fontSize: 90, color: theme.palette.error.main }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
          Oops! Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{ mt: 1, color: theme.palette.text.secondary }}
        >
          There is no design yet.
          <br />
          Please try again later..
        </Typography>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{ mt: 4, px: 4, py: 1.2, fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          Go Dashboard
        </Button>
      </motion.div>
    </Box>
  );
};

export default Notfound;
