import React, { SyntheticEvent } from 'react'

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string
}

const AddPortilio = ({onPortfolioCreate, symbol}: Props) => {
    return <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button type="submit">Add</button>
    </form>
}

export default AddPortilio