import axios from "axios"
import { CompanyProfile, CompanySearch } from "./company"

export const searchCompanies = async (query: string): Promise<{ data: CompanySearch[] } | string> => {
    try {
        const response = await axios.get<CompanySearch[]>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=gys6N7Z1DXxMpJeevkWUZyzjy3I20WCa`
        );
        return { data: response.data };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message)
            return error.message
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occured"
        }
    }
}

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=gys6N7Z1DXxMpJeevkWUZyzjy3I20WCa`
        )
        return data
    } catch (error: any) {
        console.log("error message from API: ", error.message)
    }
}