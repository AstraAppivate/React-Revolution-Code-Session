import React from "react";
import { Box, Typography } from "@mui/material";

const MuiExample = ({text}) => {
    return (
        <Box component="div">
            <Typography sx={{ color: "white" }}>{text.currentCount}</Typography>
        </Box>
    )
}

export default MuiExample;