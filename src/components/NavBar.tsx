import { useNavigate } from "react-router-dom";
import { BudgetChart, Chat, Home, Profile, Reports } from "./react icons/ReactIcons";
import { Box } from "@chakra-ui/react"

function NavBar() {
    const navigate = useNavigate()
    return (
        <Box 
            display={['flex','flex','none','none']} 
            shadow="base" bg="#FFF" 
            bottom={0} left={0} right={0} 
            height="4rem" padding="0.7rem"
            justifyContent="space-between" 
            alignItems="center" position="fixed">
           <div onClick={() => navigate("/dashboard")}><Home  /></div> 
           <div onClick={() => navigate("/reports")}><Reports /></div> 
           <div onClick={() => navigate("/chats")}><Chat /></div> 
           <div onClick={() => navigate("/")}><BudgetChart /></div> 
           <div onClick={() => navigate("/profile")}><Profile /></div> 
        </Box>
    )
}




export default NavBar;
