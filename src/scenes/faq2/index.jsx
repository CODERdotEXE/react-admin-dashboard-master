import { Box, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

const FAQ2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="RESOURCES" subtitle="All the required resources for ongoing semister" />

      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ARCHITECTURE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box display="flex" justifyContent="space-between">
          <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <DescriptionOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD NOTES
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <MenuBookOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD BOOKS
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 15px",
                  borderRadius:"4px"}}
                >
                  <HistoryOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD P.Y.Q
            </Button>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          STATISTICS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box display="flex" justifyContent="space-between">
          <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <DescriptionOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD NOTES
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <MenuBookOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD BOOKS
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 15px",
                  borderRadius:"4px"}}
                >
                  <HistoryOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD P.Y.Q
            </Button>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ALGORITHMS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box display="flex" justifyContent="space-between">
          <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <DescriptionOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD NOTES
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <MenuBookOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD BOOKS
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 15px",
                  borderRadius:"4px"}}
                >
                  <HistoryOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD P.Y.Q
            </Button>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          NETWORKS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box display="flex" justifyContent="space-between">
          <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <DescriptionOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD NOTES
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <MenuBookOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD BOOKS
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 15px",
                  borderRadius:"4px"}}
                >
                  <HistoryOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD P.Y.Q
            </Button>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          MATHEMATICS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box display="flex" justifyContent="space-between">
          <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <DescriptionOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD NOTES
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <MenuBookOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD BOOKS
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 15px",
                  borderRadius:"4px"}}
                >
                  <HistoryOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD P.Y.Q
            </Button>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ARTIFICIAL INTELIGENCE & MACHINE LEARNING
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box display="flex" justifyContent="space-between">
          <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <DescriptionOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD NOTES
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <MenuBookOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD BOOKS
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 15px",
                  borderRadius:"4px"}}
                >
                  <HistoryOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD P.Y.Q
            </Button>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          DATA STRUCTURES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box display="flex" justifyContent="space-between">
          <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <DescriptionOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD NOTES
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <MenuBookOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD BOOKS
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 15px",
                  borderRadius:"4px"}}
                >
                  <HistoryOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD P.Y.Q
            </Button>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          OPERATING SYSTEMS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box display="flex" justifyContent="space-between">
          <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <DescriptionOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD NOTES
            </Button>
            <Button
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 10px",
                  borderRadius:"4px"}}
                >
                  <MenuBookOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD BOOKS
            </Button>
            <Button 
                href="https://docs.google.com/document/d/1NE2d5QEPMjrhANvh3l0l2kmEbPCdEMOTAixaEZYj3VI/edit?usp=sharing" target= "_blank"
                  sx={{backgroundColor:colors.greenAccent[500],
                    color:colors.primary[400],fontSize: "14px",
                    fontWeight: "bold",
                  p:"5px 15px",
                  borderRadius:"4px"}}
                >
                  <HistoryOutlinedIcon sx={{ mr: "10px" }} />
                  DOWNLOAD P.Y.Q
            </Button>
        </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ2;