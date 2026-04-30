import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import Search from './Components/Search/Search';
import { CompanySearch } from '../company';
import { searchCompanies } from './api';
import CardList from './Components/CardList/CardList';

function App() {

  const [search, setSearch] = useState<string>("")
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>("")
    
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault()
    const updatedPortifolio = [...portfolioValues, e.target[0].value]
    setPortfolioValues(updatedPortifolio)
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const result = await searchCompanies(search)

    if (typeof result === "string") {
      setServerError(result)
    } else if (result && Array.isArray(result.data)) {
      setSearchResult(result.data)
    }
    console.log(searchResult)
  }   
  return (
    <div className="App">
      <Search 
        onSearchSubmit = {onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange}
      />
      <CardList 
        searchResults={searchResult} 
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <div>Unablel to connect to API</div>}
      {/* {serverError && <p>{serverError}</p>} */}
    </div>
  );
}

export default App;
