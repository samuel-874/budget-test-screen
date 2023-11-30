import { useNavigate } from "react-router-dom";
import { BudgetChart, Chat, Home, Profile, Reports } from "./react icons/ReactIcons";
import { Box } from "@chakra-ui/react"


function SideBar() {

    const navigate = useNavigate();



    return (
        <div>
        <Box 
        display={['none','none','flex','flex']} 
        flexDirection="column"
        height="100dvh"
        shadow="base" bg="#FFF" 
        bottom={0} left={0} top={0} 
        width="4rem" padding="0.7rem" py="2rem"
        justifyContent="space-between" 
        alignItems="center" position="fixed">
       <div onClick={() => navigate("/dashboard")}><Home  /></div> 
       <div onClick={() => navigate("/reports")}><Reports /></div> 
       <div onClick={() => navigate("/chats")}><Chat /></div> 
       <div onClick={() => navigate("/")}><BudgetChart /></div> 
       <div onClick={() => navigate("/profile")}><Profile /></div> 
    </Box>
        </div>

    )
}

export default SideBar;