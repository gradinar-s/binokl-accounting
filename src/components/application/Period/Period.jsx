import React, { useState } from 'react'
import AccountingCell from '../AccountingCell/AccountingCell'
import './style.css'

const Period = () => {
   const [creditSum, setCreditSum] = useState([])
   const [debitSum, setDebitSum] = useState([])

   const getCommonSum = array => array.reduce((acc, current) => acc + current)

   return (
      <div className="period">
         <div className="accounting-sheet">
            <div className="date">
               <div>01.09 - 07.09</div>
            </div>
            <div className="financial-operations">
               <div className="credit">
                  <AccountingCell type="credit" />
                  <AccountingCell type="credit" />
                  <AccountingCell type="credit" />
                  <AccountingCell type="credit" />
               </div>
               <div className="debit">
                  <AccountingCell type="debit" />
                  <AccountingCell type="debit" />
                  <AccountingCell type="debit" />
                  <AccountingCell type="debit" />
               </div>
            </div>
         </div>

         <div className="summary">
            <div className="summary-item">
               <div>Чистая прибыль за {'{period}'}</div>
               {/* <div>{credit - debit}</div> */}
            </div>
            {/* <div className="summary-item">
          <div>Общая сумма на счету</div>
          <div>{credit}</div>
       </div> */}
         </div>
      </div>
   )
}

export default Period
