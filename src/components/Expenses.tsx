
import { Icon } from "./react icons/ReactIcons";
import { MonthAnalysis } from "./types/types";
import { Box, Text, useTheme } from "@chakra-ui/react"

 const Expenses = ({monthAnalysis}: {monthAnalysis: MonthAnalysis}) => {

    const theme = useTheme()
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
                    
                    >
              {  <Icon 
                    category="Savings" 
                    budget={expense.budget} 
                    totalSpent={expense.totalSpent} 
                    icon={expense.icon} />}
                    
                    <Box marginX="0.5rem" display="flex" flex="1" >
                        <Box display="flex" flexDirection="column">
                            <Text whiteSpace="nowrap" >{expense.category}</Text>
                            <span>{`${Math.floor((expense.totalSpent / expense.budget) * 100)}%`}</span>
                        </Box>
                        <Box 
                            display="flex" 
                            flex="1" 
                            justifyContent="end" 
                            alignItems="start" 
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