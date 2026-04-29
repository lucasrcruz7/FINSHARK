import axios from "axios"
import { CompanySearch } from "../company"

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string): Promise<SearchResponse | string> => {
    try {
        const response = await axios.get<SearchResponse>(
            `https://api.twelvedata.com/price?symbol=AAPL&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data;
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