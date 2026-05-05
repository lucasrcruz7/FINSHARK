import React from 'react'
import { CompanyTenK } from '../../../company'
import { Link } from 'react-router'

type Props = {
    tenK: CompanyTenK
}

const TenKFinderItem = ({ tenK }: Props) => {
    const fillingDate = new Date(tenK.fillingDate).getFullYear()
  return (
    <Link
        reloadDocument
        to={tenK.finalLink}
        type="button"
        className="inline-flex items-center p-4 text-md text-whitebg-lightGreen rounded-md"
    >
        {" "}
         10K - {tenK.symbol} - {fillingDate}{" "}
    </Link>
  )
}

export default TenKFinderItem