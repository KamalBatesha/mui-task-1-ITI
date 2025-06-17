import { Avatar, Badge, Box, Button, Container, Stack, styled, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Skill from "./components/skill/Skill";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BrushIcon from '@mui/icons-material/Brush';
import TerminalIcon from '@mui/icons-material/Terminal';

function App() {
  const StyledBafge = styled(Badge)(({ theme }) => ({
    "&:after": {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  }));

  return (
    <Box component={"main"} sx={{direction:"rtl"}}>
      <NavBar />

    <Box sx={{background: "linear-gradient(132deg,rgba(3, 107, 252, 1) 0%, rgba(112, 0, 204, 1) 100%)",padding:"50px",}}>
      <Container>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Box width={"50%"}>
                <Typography variant="h3" color="white">مرحبا انا</Typography>
                <Typography sx={{mt:"20px"}} component={"h1"} variant="h3" color="#f5c610">كمال بطيشة</Typography>
                <Typography sx={{mt:"20px"}} variant="h5" color="white">مطور واجهات مستخدم و مصمم تجارب تفاعليه و متخصص في انشاء تطبيقات ويب حديثه باستخدام احدث التقنيات</Typography>
                <Button endIcon={<ArrowBackIcon sx={{marginRight:"10px"}} />} variant="contained"   sx={{mt:"20px",backgroundColor:"#3f50b5",color:"white"}}>اعرف المذيد</Button>
              </Box>
          <Box  >
            <Badge
              badgeContent={"مطور ويب"}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  top: "100%", 
                  left: "50%", 
                  transform: "translateX(-50%) translateY(-50%)", 
                  whiteSpace: "nowrap",
                  fontSize:"20px",
                  color:"#000",
                  backgroundColor:"#f5c610",
                  padding:"10px"
                },
              }}
              >
              <Avatar sx={{ width: "200px", height: "200px" , backgroundColor: "lightgray",border: "4px solid white"}}>
                <PersonIcon sx={{ fontSize: 100 , color: "gray"}} />
              </Avatar>
            </Badge>
          </Box>
        </Stack>
      </Container>
    </Box>
    <Box visibility={"header"} component={"header"} sx={{textAlign:"center",padding:"20px"}}>
      <Typography component={"h2"} variant="h4">مهاراتي و خبراتي</Typography>
      <Typography component={"h3"} variant="p" sx={{mt:"20px",color:"gray",fontSize:"20px"}}>مجموعه من المهارات و الخبرات التي اتمتع بها في مجال تطوير الويب</Typography>
    </Box>
    <Stack direction={"row"} sx={{justifyContent:"space-between",padding:"20px"}}>
      <Skill iconColor="#0980e3" Icon={TerminalIcon}  title={"تطوير React"} description={"تطوير في تطبيقات react باستخدام مكتبات مثل material ui و react bootstrap"} />
      <Skill iconColor="#5503c4" Icon={BrushIcon} title="تصميم واجهات" description={"تصميم واجهات مستخدم و متخصص في انشاء تطبيقات ويب حديثه باستخدام احدث التقنيات"}/>
      <Skill iconColor="#06a014" Icon={PhoneIphoneIcon} title="تطبيقات متجاوبه" description={"تطوير في تطبيقات متجاوبه باستخدام احدث التقنيات"}/>
    </Stack>
              </Box>
  );
}

export default App;

