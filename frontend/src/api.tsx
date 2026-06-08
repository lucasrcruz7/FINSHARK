import axios from "axios"
import {
    CompanyBalanceSheet,
    CompanyCashFlow,
    CompanyCompData,
    CompanyIncomeStatement,
    CompanyKeyMetrics,
    CompanyProfile,
    CompanySearch,
    CompanyTenK,
} from "./company"

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://www.alphavantage.co/query"

export const searchCompanies = async (query: string): Promise<{ data: CompanySearch[] } | string> => {
    try {
        const response = await axios.get(
            `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`
        )
        console.log("Alpha Vantage response:", response.data)
        const matches = response.data.bestMatches || []
        const data: CompanySearch[] = matches.map((m: any) => ({
            symbol: m["1. symbol"],
            name: m["2. name"],
            currency: m["8. currency"],
            exchangeShortName: m["4. region"],
            stockExchange: m["3. type"],
        }))
        return { data }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message)
            return error.message
        } else {
            console.log("unexpected error: ", error)
            return "An unexpected error has occured"
        }
    }
}

export const getCompanyProfile = async (query: string) => {
    try {
        const response = await axios.get(
            `${BASE_URL}?function=OVERVIEW&symbol=${query}&apikey=${API_KEY}`
        )
        const d = response.data
        const profile: CompanyProfile = {
            symbol: d.Symbol,
            price: 0,
            beta: parseFloat(d.Beta) || 0,
            volAvg: 0,
            mktCap: parseInt(d.MarketCapitalization) || 0,
            lastDiv: parseFloat(d.DividendPerShare) || 0,
            range: d["52WeekHigh"] && d["52WeekLow"] ? `${d["52WeekLow"]}-${d["52WeekHigh"]}` : "",
            changes: 0,
            companyName: d.Name,
            currency: d.Currency,
            cik: "",
            isin: "",
            exchange: d.Exchange,
            exchangeShortName: d.Exchange,
            industry: d.Industry,
            website: "",
            description: d.Description,
            ceo: "",
            sector: d.Sector,
            counter: "",
            fullTimeEmployees: d.FullTimeEmployees,
            phone: "",
            address: d.Address,
            city: "",
            state: "",
            zip: "",
            dcfDiff: 0,
            dcf: parseFloat(d.AnalystTargetPrice) || 0,
            image: "",
            ipoDate: d.IPODate || "",
            defaultImage: false,
            isEtf: false,
            isActivelyTrading: true,
            isAdr: false,
            isFund: false,
        }
        return { data: [profile] }
    } catch (error: any) {
        console.log("error message from API: ", error.message)
    }
}

export const getKeyMetrics = async (query: string) => {
    try {
        const response = await axios.get(
            `${BASE_URL}?function=OVERVIEW&symbol=${query}&apikey=${API_KEY}`
        )
        const d = response.data
        const metrics: CompanyKeyMetrics = {
            revenuePerShareTTM: parseFloat(d.RevenuePerShareTTM) || 0,
            netIncomePerShareTTM: parseFloat(d.EPS) || 0,
            operatingCashFlowPerShareTTM: 0,
            freeCashFlowPerShareTTM: 0,
            cashPerShareTTM: 0,
            bookValuePerShareTTM: parseFloat(d.BookValue) || 0,
            tangibleBookValuePerShareTTM: 0,
            shareholdersEquityPerShareTTM: 0,
            interestDebtPerShareTTM: 0,
            marketCapTTM: parseInt(d.MarketCapitalization) || 0,
            enterpriseValueTTM: parseInt(d.EVToEBITDA) || 0,
            peRatioTTM: parseFloat(d.PERatio) || 0,
            priceToSalesRatioTTM: parseFloat(d.PriceToSalesRatioTTM) || 0,
            pocfratioTTM: 0,
            pfcfRatioTTM: 0,
            pbRatioTTM: parseFloat(d.PriceToBookRatio) || 0,
            ptbRatioTTM: parseFloat(d.PriceToBookRatio) || 0,
            evToSalesTTM: parseFloat(d.EVToRevenue) || 0,
            enterpriseValueOverEBITDATTM: parseFloat(d.EVToEBITDA) || 0,
            evToOperatingCashFlowTTM: 0,
            evToFreeCashFlowTTM: 0,
            earningsYieldTTM: 0,
            freeCashFlowYieldTTM: 0,
            debtToEquityTTM: parseFloat(d.DebtToEquityRatio) || 0,
            debtToAssetsTTM: 0,
            netDebtToEBITDATTM: 0,
            currentRatioTTM: parseFloat(d.CurrentRatio) || 0,
            interestCoverageTTM: 0,
            incomeQualityTTM: 0,
            dividendYieldTTM: parseFloat(d.DividendYield) || 0,
            dividendYieldPercentageTTM: (parseFloat(d.DividendYield) || 0) * 100,
            payoutRatioTTM: parseFloat(d.PayoutRatio) || 0,
            salesGeneralAndAdministrativeToRevenueTTM: 0,
            researchAndDevelopementToRevenueTTM: 0,
            intangiblesToTotalAssetsTTM: 0,
            capexToOperatingCashFlowTTM: 0,
            capexToRevenueTTM: 0,
            capexToDepreciationTTM: 0,
            stockBasedCompensationToRevenueTTM: 0,
            grahamNumberTTM: 0,
            roicTTM: parseFloat(d.ReturnOnInvestedCapitalTTM) || 0,
            returnOnTangibleAssetsTTM: parseFloat(d.ReturnOnAssetsTTM) || 0,
            grahamNetNetTTM: 0,
            workingCapitalTTM: 0,
            tangibleAssetValueTTM: 0,
            netCurrentAssetValueTTM: 0,
            investedCapitalTTM: 0,
            averageReceivablesTTM: 0,
            averagePayablesTTM: 0,
            averageInventoryTTM: 0,
            daysSalesOutstandingTTM: 0,
            daysPayablesOutstandingTTM: 0,
            daysOfInventoryOnHandTTM: 0,
            receivablesTurnoverTTM: 0,
            payablesTurnoverTTM: 0,
            inventoryTurnoverTTM: parseFloat(d.InventoryTurnover) || 0,
            roeTTM: parseFloat(d.ReturnOnEquityTTM) || 0,
            capexPerShareTTM: 0,
            dividendPerShareTTM: parseFloat(d.DividendPerShare) || 0,
            debtToMarketCapTTM: 0,
        }
        return { data: [metrics] }
    } catch (error: any) {
        console.log("error message from API: ", error.message)
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const response = await axios.get(
            `${BASE_URL}?function=INCOME_STATEMENT&symbol=${query}&apikey=${API_KEY}`
        )
        const reports = response.data.annualReports || []
        const data: CompanyIncomeStatement[] = reports.map((r: any) => ({
            date: r.fiscalDateEnding,
            symbol: query,
            reportedCurrency: r.reportedCurrency,
            cik: "",
            fillingDate: r.fiscalDateEnding,
            acceptedDate: r.fiscalDateEnding,
            calendarYear: r.fiscalDateEnding?.split("-")[0],
            period: "FY",
            revenue: parseInt(r.totalRevenue) || 0,
            costOfRevenue: parseInt(r.costOfRevenue) || 0,
            grossProfit: parseInt(r.grossProfit) || 0,
            grossProfitRatio: parseInt(r.grossProfit) / (parseInt(r.totalRevenue) || 1),
            researchAndDevelopmentExpenses: parseInt(r.researchAndDevelopment) || 0,
            generalAndAdministrativeExpenses: 0,
            sellingAndMarketingExpenses: 0,
            sellingGeneralAndAdministrativeExpenses: parseInt(r.sellingGeneralAndAdministrative) || 0,
            otherExpenses: parseInt(r.otherNonOperatingIncome) || 0,
            operatingExpenses: parseInt(r.totalOperatingExpenses) || 0,
            costAndExpenses: parseInt(r.totalOperatingExpenses) || 0,
            interestIncome: parseInt(r.interestIncome) || 0,
            interestExpense: parseInt(r.interestExpense) || 0,
            depreciationAndAmortization: parseInt(r.depreciationAndAmortization) || 0,
            ebitda: parseInt(r.ebitda) || 0,
            ebitdaratio: 0,
            operatingIncome: parseInt(r.operatingIncome) || 0,
            operatingIncomeRatio: parseInt(r.operatingIncome) / (parseInt(r.totalRevenue) || 1),
            totalOtherIncomeExpensesNet: parseInt(r.totalOtherIncomeExpensesNet) || 0,
            incomeBeforeTax: parseInt(r.incomeBeforeTax) || 0,
            incomeBeforeTaxRatio: parseInt(r.incomeBeforeTax) / (parseInt(r.totalRevenue) || 1),
            incomeTaxExpense: parseInt(r.incomeTaxExpense) || 0,
            netIncome: parseInt(r.netIncome) || 0,
            netIncomeRatio: parseInt(r.netIncome) / (parseInt(r.totalRevenue) || 1),
            eps: parseFloat(r.eps) || 0,
            epsdiluted: parseFloat(r.epsDiluted) || 0,
            weightedAverageShsOut: parseInt(r.commonStockSharesOutstanding) || 0,
            weightedAverageShsOutDil: parseInt(r.commonStockSharesOutstanding) || 0,
            link: "",
            finalLink: "",
        }))
        return { data }
    } catch (error: any) {
        console.log("error message from API: ", error.message)
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
        const response = await axios.get(
            `${BASE_URL}?function=BALANCE_SHEET&symbol=${query}&apikey=${API_KEY}`
        )
        const reports = response.data.annualReports || []
        const data: CompanyBalanceSheet[] = reports.map((r: any) => ({
            date: r.fiscalDateEnding,
            symbol: query,
            reportedCurrency: r.reportedCurrency,
            cik: "",
            fillingDate: r.fiscalDateEnding,
            acceptedDate: r.fiscalDateEnding,
            calendarYear: r.fiscalDateEnding?.split("-")[0],
            period: "FY",
            cashAndCashEquivalents: parseInt(r.cashAndCashEquivalentsAtCarryingValue) || 0,
            shortTermInvestments: parseInt(r.shortTermInvestments) || 0,
            cashAndShortTermInvestments: parseInt(r.cashAndShortTermInvestments) || 0,
            netReceivables: parseInt(r.currentNetReceivables) || 0,
            inventory: parseInt(r.inventory) || 0,
            otherCurrentAssets: parseInt(r.otherCurrentAssets) || 0,
            totalCurrentAssets: parseInt(r.totalCurrentAssets) || 0,
            propertyPlantEquipmentNet: parseInt(r.propertyPlantEquipmentNet) || 0,
            goodwill: parseInt(r.goodwill) || 0,
            intangibleAssets: parseInt(r.intangibleAssets) || 0,
            goodwillAndIntangibleAssets: (parseInt(r.goodwill) || 0) + (parseInt(r.intangibleAssets) || 0),
            longTermInvestments: parseInt(r.longTermInvestments) || 0,
            taxAssets: parseInt(r.deferredIncomeTax) || 0,
            otherNonCurrentAssets: parseInt(r.otherNonCurrentAssets) || 0,
            totalNonCurrentAssets: parseInt(r.totalNonCurrentAssets) || 0,
            otherAssets: 0,
            totalAssets: parseInt(r.totalAssets) || 0,
            accountPayables: parseInt(r.currentAccountsPayable) || 0,
            shortTermDebt: parseInt(r.shortTermDebt) || 0,
            taxPayables: 0,
            deferredRevenue: parseInt(r.deferredRevenue) || 0,
            otherCurrentLiabilities: parseInt(r.otherCurrentLiabilities) || 0,
            totalCurrentLiabilities: parseInt(r.totalCurrentLiabilities) || 0,
            longTermDebt: parseInt(r.longTermDebt) || 0,
            deferredRevenueNonCurrent: parseInt(r.deferredRevenueNonCurrent) || 0,
            deferredTaxLiabilitiesNonCurrent: parseInt(r.deferredTaxLiabilitiesNonCurrent) || 0,
            otherNonCurrentLiabilities: parseInt(r.otherNonCurrentLiabilities) || 0,
            totalNonCurrentLiabilities: parseInt(r.totalNonCurrentLiabilities) || 0,
            otherLiabilities: parseInt(r.otherNonCurrentLiabilities) || 0,
            capitalLeaseObligations: parseInt(r.capitalLeaseObligations) || 0,
            totalLiabilities: parseInt(r.totalLiabilities) || 0,
            preferredStock: parseInt(r.preferredStockTotalEquity) || 0,
            commonStock: parseInt(r.commonStock) || 0,
            retainedEarnings: parseInt(r.retainedEarnings) || 0,
            accumulatedOtherComprehensiveIncomeLoss: parseInt(r.accumulatedOtherComprehensiveIncomeLoss) || 0,
            othertotalStockholdersEquity: 0,
            totalStockholdersEquity: parseInt(r.totalShareholderEquity) || 0,
            totalEquity: parseInt(r.totalShareholderEquity) || 0,
            totalLiabilitiesAndStockholdersEquity: parseInt(r.totalAssets) || 0,
            minorityInterest: parseInt(r.minorityInterest) || 0,
            totalLiabilitiesAndTotalEquity: parseInt(r.totalAssets) || 0,
            totalInvestments: (parseInt(r.shortTermInvestments) || 0) + (parseInt(r.longTermInvestments) || 0),
            totalDebt: (parseInt(r.shortTermDebt) || 0) + (parseInt(r.longTermDebt) || 0),
            netDebt: (parseInt(r.shortTermDebt) || 0) + (parseInt(r.longTermDebt) || 0) - (parseInt(r.cashAndCashEquivalentsAtCarryingValue) || 0),
            link: "",
            finalLink: "",
        }))
        return { data }
    } catch (error: any) {
        console.log("error message from API: ", error.message)
    }
}

export const getCashFlowStatement = async (query: string) => {
    try {
        const response = await axios.get(
            `${BASE_URL}?function=CASH_FLOW&symbol=${query}&apikey=${API_KEY}`
        )
        const reports = response.data.annualReports || []
        const data: CompanyCashFlow[] = reports.map((r: any) => ({
            date: r.fiscalDateEnding,
            symbol: query,
            reportedCurrency: r.reportedCurrency,
            cik: "",
            fillingDate: r.fiscalDateEnding,
            acceptedDate: r.fiscalDateEnding,
            calendarYear: r.fiscalDateEnding?.split("-")[0],
            period: "FY",
            netIncome: parseInt(r.netIncome) || 0,
            depreciationAndAmortization: parseInt(r.depreciationDepletionAndAmortization) || 0,
            deferredIncomeTax: parseInt(r.deferredIncomeTax) || 0,
            stockBasedCompensation: parseInt(r.stockBasedCompensation) || 0,
            changeInWorkingCapital: parseInt(r.changeInWorkingCapital) || 0,
            accountsReceivables: parseInt(r.changeInReceivables) || 0,
            inventory: parseInt(r.changeInInventory) || 0,
            accountsPayables: 0,
            otherWorkingCapital: parseInt(r.otherWorkingCapital) || 0,
            otherNonCashItems: parseInt(r.otherNonCashItems) || 0,
            netCashProvidedByOperatingActivities: parseInt(r.operatingCashflow) || 0,
            investmentsInPropertyPlantAndEquipment: parseInt(r.capitalExpenditures) || 0,
            acquisitionsNet: parseInt(r.acquisitionsNet) || 0,
            purchasesOfInvestments: parseInt(r.purchaseOfInvestments) || 0,
            salesMaturitiesOfInvestments: parseInt(r.saleAndMaturityOfInvestments) || 0,
            otherInvestingActivites: parseInt(r.otherInvestingActivites) || 0,
            netCashUsedForInvestingActivites: parseInt(r.cashflowFromInvestment) || 0,
            debtRepayment: parseInt(r.proceedsFromRepaymentsOfShortTermDebt) || 0,
            commonStockIssued: parseInt(r.proceedsFromIssuanceOfCommonStock) || 0,
            commonStockRepurchased: parseInt(r.paymentsForRepurchaseOfCommonStock) || 0,
            dividendsPaid: parseInt(r.dividendPayout) || 0,
            otherFinancingActivites: parseInt(r.otherFinancingActivites) || 0,
            netCashUsedProvidedByFinancingActivities: parseInt(r.cashflowFromFinancing) || 0,
            effectOfForexChangesOnCash: parseInt(r.effectOfForexChangesOnCash) || 0,
            netChangeInCash: parseInt(r.netChangeInCash) || 0,
            cashAtEndOfPeriod: parseInt(r.cashAtEndOfPeriod) || 0,
            cashAtBeginningOfPeriod: parseInt(r.cashAtBeginningOfPeriod) || 0,
            operatingCashFlow: parseInt(r.operatingCashflow) || 0,
            capitalExpenditure: parseInt(r.capitalExpenditures) || 0,
            freeCashFlow: parseInt(r.operatingCashflow) - (parseInt(r.capitalExpenditures) || 0),
            link: "",
            finalLink: "",
        }))
        return { data }
    } catch (error: any) {
        console.log("error message from API: ", error.message)
    }
}

export const getCompData = async (query: string) => {
    const compData: CompanyCompData = { symbol: query, peersList: [] }
    return { data: [compData] }
}

export const getTenK = async (query: string) => {
    const data: CompanyTenK[] = []
    return { data }
}
