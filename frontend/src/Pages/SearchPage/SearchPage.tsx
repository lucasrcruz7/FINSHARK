import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company'
import { searchCompanies } from '../../api'
import Navbar from '../../Components/Navbar/Navbar'
import Search from '../../Components/Search/Search'
import ListPorfolio from '../../Components/Portifolio/ListPortfolio/ListPorfolio'
import CardList from '../../Components/CardList/CardList'

type Props = {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("")
      const [portfolioValues, setPortfolioValues] = useState<string[]>([])
      const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
      const [serverError, setServerError] = useState<string | null>(null)
        
      const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)
        if (!value) return setSearchResult([])
        const result = await searchCompanies(value)
        if (typeof result === "string") {
          setServerError(result)
        } else if (Array.isArray(result.data)) {
          setSearchResult(result.data)
        }
      }
    
      const onPortfolioCreate = (e: any) => {
        e.preventDefault()
        const exists = portfolioValues.find((value) => value === e.target[0].value) 
        if(exists)  return 
        const updatedPortifolio = [...portfolioValues, e.target[0].value]
        setPortfolioValues(updatedPortifolio)
      }
    
      const onPortfolioDelete =(e: any) => {
        e.preventDefault()
        const removed = portfolioValues.filter((value) => {
          return value !== e.target[0].value
        })
        setPortfolioValues(removed)
      }
    
      const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        const result = await searchCompanies(search)
    
        if (typeof result === "string") {
          setServerError(result)
        } else if (Array.isArray(result.data)) {
          setSearchResult(result.data)
        }
      }   

  return (
    <div className="App">
      <Search 
        onSearchSubmit = {onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange}
      />

      <ListPorfolio 
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}  
      />
      <CardList 
        searchResults={searchResult} 
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <div>Unablel to connect to API</div>}
      {/* {serverError && <p>{serverError}</p>} */}
    </div>
  )
}

export default SearchPage