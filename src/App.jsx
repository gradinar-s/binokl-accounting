import { useState } from 'react'
import './App.css'

function App() {
   const [isEditMode, setEditMode] = useState(false)

   const [credit, setCredit] = useState(null)
   const [debit, setDebit] = useState(null)

   return (
      <div className="wrapper">
         {/* 1 */}
         <div className="period">
            <div className="accounting-sheet">
               <div className="date">
                  <div>01.09</div>
               </div>
               <div className="financial-operations">
                  <div className="credit">
                     <div
                        className={`credit-item ${credit ? '' : 'financial-operations-empty'}`}
                        onClick={() => setEditMode(true)}
                        onBlur={() => setEditMode(false)}
                     >
                        {isEditMode ? (
                           <input
                              type="number"
                              placeholder="Сумма надходження"
                              onChange={e => setCredit(e.target.value)}
                              value={credit}
                              className="financial-operations-input"
                           />
                        ) : (
                           <div>{credit ?? '+'}</div>
                        )}
                     </div>
                     <div className="credit-item financial-operations-empty">+</div>
                     <div className="credit-item financial-operations-empty">+</div>
                     <div className="credit-item financial-operations-empty">+</div>
                  </div>
                  <div className="debit">
                     <div
                        className={`debit-item ${debit ? '' : 'financial-operations-empty'}`}
                        onClick={() => setEditMode(true)}
                        onBlur={() => setEditMode(false)}
                     >
                        {isEditMode ? (
                           <input
                              type="number"
                              placeholder="Сумма витрати"
                              onChange={e => setDebit(e.target.value)}
                              value={debit}
                              className="financial-operations-input"
                           />
                        ) : (
                           <div>{debit ?? '+'}</div>
                        )}
                     </div>
                     <div className="debit-item financial-operations-empty">+</div>
                     <div className="debit-item financial-operations-empty">+</div>
                     <div className="debit-item financial-operations-empty">+</div>
                  </div>
               </div>
            </div>

            <div className="summary">
               <div className="summary-item">
                  <div>Чистая прибыль за {'{period}'}</div>
                  <div>{credit - debit}</div>
               </div>
               {/* <div className="summary-item">
                  <div>Общая сумма на счету</div>
                  <div>{credit}</div>
               </div> */}
            </div>
         </div>

         {/* 2 */}
         <div className="period">
            <div className="accounting-sheet">
               <div className="date">
                  <div>02.09 - 10.09</div>
               </div>
               <div className="financial-operations">
                  <div className="credit">
                     <div className="credit-item">8852</div>
                     <div className="credit-item financial-operations-empty">+</div>
                     <div className="credit-item financial-operations-empty">+</div>
                     <div className="credit-item financial-operations-empty">+</div>
                  </div>
                  <div className="debit">
                     <div className="debit-item">2000</div>
                     <div className="debit-item">1949</div>
                     <div className="debit-item">1400</div>
                     <div className="debit-item financial-operations-empty">+</div>
                  </div>
               </div>
            </div>

            <div className="summary">
               <div className="summary-item">Чистая прибыль за {'{period}'} 100000</div>
               <div className="summary-item">Общая сумма на счету 200000</div>
            </div>
         </div>

         {/* 3 */}
         <div className="period">
            <div className="accounting-sheet">
               <div className="date">
                  <div>11.09 - 17.09</div>
               </div>
               <div className="financial-operations">
                  <div className="credit">
                     <div className="credit-item">7000</div>
                     <div className="credit-item financial-operations-empty">+</div>
                     <div className="credit-item financial-operations-empty">+</div>
                     <div className="credit-item financial-operations-empty">+</div>
                  </div>
                  <div className="debit">
                     <div className="debit-item">1500</div>
                     <div className="debit-item">500</div>
                     <div className="debit-item financial-operations-empty">+</div>
                     <div className="debit-item financial-operations-empty">+</div>
                  </div>
               </div>
            </div>

            <div className="summary">
               <div className="summary-item">Чистая прибыль за {'{period}'} 100000</div>
               <div className="summary-item">Общая сумма на счету 200000</div>
            </div>
         </div>
      </div>
   )
}

export default App
