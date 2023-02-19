import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PixIcon from '@mui/icons-material/Pix';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import StatBox from "../../components/StatBox";
import StatBox1 from "../../components/StatBox1";
import StatBox2 from "../../components/StatBox2";
import ProgressCircle from "../../components/ProgressCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import LoupeOutlinedIcon from '@mui/icons-material/LoupeOutlined';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Box>
          
          <Button
    
          href="/faq2" target="_blank"

            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
          <LocalLibraryTwoToneIcon sx={{ mr: "10px" }} />
           Resources
          </Button>
        </Box>
        <Box>
          
          <Button
          href="https://qclone.pages.dev/" target= "_blank" 
          
            
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginLeft: "15px",
            }}
          >
          <ForumOutlinedIcon sx={{ mr: "10px" }} />
           Forum
          </Button>
        </Box>

        <Box>
          <Button
          href="https://drive.google.com/file/d/1RY90K4DnclgPPraLsjCmtDIrPRcJbChM/view?usp=sharing" target= "_blank" 
          
            
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginLeft: "15px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
           Result
          </Button>
        </Box>
        </Box>
      </Box>
  
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="111"
            subtitle="Completed Tasks"
            progress="0.85"
            increase="85%"
            
            icon={
              <AssignmentTurnedInIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="19"
            subtitle="Pending Tasks"
            progress="0.15"
            increase="+15% left"
            icon={
              <PendingActionsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox1
            title="A+"
            subtitle="CT Assesment"
            icon={
              <AssessmentIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox2
            title="140"
            subtitle="Study Credits"
           
            icon={
              <PixIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Track Progress
              </Typography>
              
            </Box>
           
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          
          marginBottom="20px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Notices
            </Typography>
          </Box>
          <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} 
        sx={{backgroundColor: "#1F2A40"}}
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            Class Cancelled
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
        sx={{backgroundColor: "#1F2A40"}}
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            Republic Day Celebration
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
        sx={{backgroundColor: "#1F2A40"}}
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            Group Discussion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
        sx={{backgroundColor: "#1F2A40"}}
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            Extra Class
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
        sx={{backgroundColor: "#1F2A40"}}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Hackathon
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
       
        </Box>

        {/* ROW 3 */}
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          marginBottom="20px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
          >
          <Typography variant="h5" fontWeight="600">
            Attendance
          </Typography>
          <Button
          href="https://docs.google.com/spreadsheets/d/14y2udVcTodo9HZAbtsu7HalCV5f4i-Yl1sYO21PcUFM/edit?usp=sharing" target="_blank"
                sx={{backgroundColor:colors.greenAccent[500],
                  color:colors.primary[400],
                  fontWeight: "bold",
                p:"5px 10px",
                borderRadius:"4px"}}
              >
                <LoupeOutlinedIcon sx={{ mr: "10px" }} />
                LEARN MORE
              </Button>
              </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              179
            </Typography>
            <Typography>Lectures attended</Typography>
          </Box>
        </Box>
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          marginBottom="20px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Submissions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Button
              href="https://drive.google.com/file/d/1RY90K4DnclgPPraLsjCmtDIrPRcJbChM/view?usp=sharing" target= "_blank"
                sx={{backgroundColor:colors.greenAccent[500],
                  color:colors.grey[100],fontSize: "14px",
                  fontWeight: "bold",
                p:"5px 10px",
                borderRadius:"4px"}}
              >
                VIEW
              </Button>
            </Box>
          ))}
        </Box>
        
        
      </Box>
    </Box>
  );
};

export default Dashboard;
