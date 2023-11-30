import { FoodAndDrink, Saving } from "./react icons/ReactIcons";
import { MonthAnalysis } from "./types/types";


export const budgets: MonthAnalysis[] = [
    {
        tab: "THIS_MONTH",
        budget: 120_000,
        totalSpent: 50_000,
        monthExpense: [
            {category: "Food and Drink",budget: 42_000,totalSpent: 20_000,icon:FoodAndDrink},
            {category: "Savings",budget: 24_000,totalSpent: 10_000,icon: Saving},
        ]
    },
    {
        tab: "LAST_MONTH",
        budget: 120_000,
        totalSpent: 98_000,
        monthExpense: [
            {category: "Rent",budget: 54_000,totalSpent: 54_000,icon: Saving},
            {category: "Food and Drink",budget: 42_000,totalSpent: 20_000,icon:FoodAndDrink},
            {category: "Savings",budget: 24_000,totalSpent: 24_000,icon: Saving},
        ]
    }

]