import axios from "axios"
import { CompanySearch } from "../company"

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string): Promise<SearchResponse | string> => {
    try {
        const response = await axios.get<SearchResponse>(
            `https://finnhub.io/api/v1/search?q=apple&token=d7pmgphr01qosaap5dugd7pmgphr01qosaap5dv0`
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