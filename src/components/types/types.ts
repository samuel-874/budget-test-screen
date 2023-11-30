
export type MonthExpense ={
    icon: any
    budget: number
    category: string
    totalSpent: number
}

export type MonthAnalysis = {
    tab: string,
    budget: number,
    totalSpent: number,
    monthExpense: MonthExpense[]
}

 
export const InitialValue = {
    tab: "",
    budget: 0,
    totalSpent: 0,
    monthExpense: [
        {category: "0",budget: 0,totalSpent: 0,icon:""},
    ]

}