
import { useState } from "react";
import { Icon } from "./react icons/ReactIcons";
import { MonthAnalysis } from "./types/types";
import { Box, Text, useTheme } from "@chakra-ui/react"
import AnimatedPercentage from "./react icons/AnimatedPercent";

 const Expenses = ({monthAnalysis}: {monthAnalysis: MonthAnalysis}) => {

    const theme = useTheme();
    const [ count, setCount ] = useState(0);
    
    const formatCurrency = (amount?: number) => {
        const formater = Intl.NumberFormat(
               "en-ng",{
                   style: 'currency',
                   currency:'NGN',
                   minimumFractionDigits:0
               }
           )
   
           return formater.format(amount||0.00)
       }
   


    return (
        <div>

            {monthAnalysis?.monthExpense?.map((expense,i) =>
            <div key={i}>
                <Box 
                    display="flex" 
                    height="5rem" 
                    justifyContent="space-between" 
                    alignItems="center"
                    fontWeight={700}
                    
                    >
              {  <Icon 
                    category="Savings" 
                    budget={expense.budget} 
                    totalSpent={expense.totalSpent} 
                    icon={expense.icon} />}
                    
                    <Box marginX="0.5rem" display="flex" flex="1" >
                        <Box display="flex" flexDirection="column">
                            <Text fontSize={"17px"} whiteSpace="nowrap" >{expense.category}</Text>
                            {/* <Text color="#707480" fontWeight={500} >{`${Math.floor((expense.totalSpent / expense.budget) * 100)}%`}</Text> */}
                            <AnimatedPercentage  color="#707480" fontSize="17px" fontWeight={500} value={Math.floor((expense.totalSpent / expense.budget) * 100)} />
                        </Box>
                        <Box 
                            display="flex" 
                            flex="1" 
                            justifyContent="end" 
                            alignItems="start" 
                            fontSize={"18px"}
                            color={theme.appColors?.black}> 
                            <p >{formatCurrency(expense.totalSpent)}</p>/
                            <Text color={"#C1C4CD"} >{formatCurrency(expense.budget)}</Text>
                        </Box> 
                    </Box>
                </Box>
            </div>)}
        </div>
    )
 }

 export { Expenses as default }