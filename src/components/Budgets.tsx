import { useEffect, useState } from "react";
import {  Ham, Progress } from "./react icons/ReactIcons";
import Expenses from "./Expenses";
import { InitialValue, MonthAnalysis } from "./types/types";
import { Heading, Box, Text, TabList, Tabs, Tab, useTheme } from '@chakra-ui/react'
import { budgets } from "./store";


 const  Budget = () => {

    const [ currentTab, setCurrentTab ] = useState("THIS_MONTH");
    const [ currentMonthAnalysis, setMonthAnalysis ] = useState<MonthAnalysis>(InitialValue)

    const theme = useTheme();
    const months: MonthAnalysis[] = budgets

    const tabs = [
        {label:"Last Month",value:"LAST_MONTH"},
        {label:"This Month",value:"THIS_MONTH"},
    ]

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




    useEffect(() => {
       const month =  months.find( month => month.tab === currentTab);
       setMonthAnalysis(month|| InitialValue)
    },[currentTab])


    

    return (
        <Box 
            marginX="auto" 
            paddingY="1rem">

            <Heading
               as="h1" 
               marginY={"1rem"} 
               fontSize={"28px"} 
               fontWeight={700} 
               lineHeight={"36px"} 
               letterSpacing={"-0.05rem"}>
                Budget
            </Heading>
            
            <Box 
                display="flex" 
                justifyContent={{ md: "center" }}  
                alignItems="center"
                >
                <Text 
                    height="20px"
                    display="flex" 
                    justifyContent="center" 
                    fontSize="15px" 
                    width="20px" 
                    rounded="50%" 
                    bg={theme.appColors?.lightBlue} 
                    color={theme.appColors.blue}
                    fontWeight="bold">&#8358;</Text> 

                <Text 
                    color="#707480" 
                    fontSize="14px" 
                    margin="0 0.6rem" 
                    fontWeight="400" 
                    lineHeight={0} 
                    letterSpacing="-0.07px"  
                    className="budget">Monthly Budget</Text>

            </Box>

            <Box 
                width="90dvw" 
                height={{ base: "60px", md: "130px" }} 
                flexShrink={0} borderRadius="10px"
                 margin="12px auto" 
                 padding={{ base: "10px", md: "20px"}} 
                 display="flex" maxW={"600px"} 
                 shadow="md" className="budget-board"> 
              <Text 
                color={theme.appColors?.black} 
                fontSize="28px" display="flex" 
                alignItems="center" fontWeight="700" 
                lineHeight="36px" letterSpacing="-1.4px" >
                { formatCurrency(currentMonthAnalysis?.budget) }</Text>
            </Box>

            {/* TAB */}
            <Box marginY="2.5rem">
                <Box 
                  display="flex" 
                  justifyContent="space-between"> 

                  <Box 
                    w="70%"
                    display="flex"
                    justifyContent="space-around"
                    flexWrap="wrap">
                        <Tabs index={tabs.findIndex( tab => tab.value === currentTab)}>
                            <TabList>
                               {tabs.map((tab,i) => 
                                  <Tab 
                                    key={i}
                                    onClick={() => setCurrentTab(tab.value)}
                                    fontSize="18px"
                                    cursor="pointer"
                                    color={tab.value === currentTab ? 
                                            theme.appColors?.blue : theme.appColors?.gray }
                                    _selected={{ borderBottom: "2px solid",}}>
                                            {tab.label}
                                  </Tab>  
                                )}
                                </TabList>
                        </Tabs>
                  </Box> 
                  <Box w="30%" display="flex" justifyContent="end"><Ham /></Box>
                </Box>

                <Box marginY="0.5rem">

                <Box marginY="2.5rem" >
                <div>
                    <Box 
                       position="relative" 
                       display="flex"
                       justifyContent="center" 
                       alignItems="center" 
                       height="200px" 
                       width="200px" 
                       marginY="1.25rem" 
                       borderWidth="10px" 
                       borderColor={theme.appColors?.lightBlue}
                       marginX="auto" 
                       borderRadius="50%" >
                        
                        <Progress color={theme.appColors?.blue} 
                            progress={Math.floor((currentMonthAnalysis.totalSpent / currentMonthAnalysis.budget) * 100)} />
                        <Text 
                            color={theme.appColors?.blue} 
                            fontSize="30px">
                            { `${Math.floor((currentMonthAnalysis.totalSpent / currentMonthAnalysis.budget) * 100)}%` }</Text>
                    </Box>
                </div>
                <Box textAlign="center" >
                    <Text 
                    fontSize="12px" 
                    color={theme.appColors?.gray}
                    marginY="0.5rem">
                        Amount spent so far</Text>
                    <Box 
                        display="flex" 
                        justifyContent="center" 
                        alignItems="center" 
                        color={theme.appColors.lightBlue} > 
                        <Text color={theme.appColors.blue}>
                            { formatCurrency(currentMonthAnalysis?.totalSpent)
                             }
                        </Text>
                        /
                        <p>{ formatCurrency(currentMonthAnalysis?.budget) }</p>
                    </Box> 
                </Box>
                </Box>

                <div>
                    <Text marginY="0.7rem" fontSize="20px">Category Breakdown</Text>
                     { currentMonthAnalysis &&  <Expenses monthAnalysis={currentMonthAnalysis} />}
                </div>
                </Box>
            </Box>
        </Box>
    )
}

export default Budget;