import React, { useState } from 'react'
import './style.css'

const AccountingCell = ({ type }) => {
   const [isEditMode, setEditMode] = useState(false)
   const [value, setValue] = useState('')

   return (
      <div
         className={`cell cell-${type} ${isEditMode || value ? '' : 'financial-operations-empty'}`}
         onClick={() => setEditMode(true)}
         onBlur={() => setEditMode(false)}
      >
         {isEditMode ? (
            <input
               autoFocus
               type="number"
               value={value}
               placeholder={`${type === 'credit' ? 'Сумма надходження' : 'Сумма витрати'}`}
               className="financial-operations-input"
               onChange={e => setValue(e.target.value)}
            />
         ) : (
            <div>{value || '+'}</div>
         )}
      </div>
   )
}

export default AccountingCell
