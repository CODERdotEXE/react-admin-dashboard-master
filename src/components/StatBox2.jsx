import { Box,Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="center">
        
      
        
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100],
            marginRight:"10px",}}
            
          >
            {title}
          </Typography>
          {icon} 
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
          
        
        </Box>
        <Box display="flex" justifyContent="center">
        <Button
          href="https://welocaltoast.github.io/one.edu.credit_shop.github.io/" target= "_blank" 
          
          
            sx={{
              backgroundColor: colors.greenAccent[500],
              color: colors.primary[400],
              fontSize: "14px",
              fontWeight: "bold",
              marginTop:"30px",
            }}
          >
            <ShoppingBagTwoToneIcon sx={{ mr: "10px" }} />
           Exchange Credits
          </Button>
        
          </Box>
    </Box>
  );
};

export default StatBox;
