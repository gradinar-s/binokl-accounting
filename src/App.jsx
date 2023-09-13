import FinancialAccounting from './pages/FinancialAccounting/FinancialAccounting'
import './App.css'

function App() {
   return (
      <div className="wrapper">
         {/* Tabs */}
         <header>
            <ul>
               <li>Фінансовий облік</li>
               <li>Зробити замовлення</li>
               <li>Нагадування</li>
            </ul>
         </header>

         {/* Payback progress */}
         <div>Payback progress</div>

         {/* Financial accounting */}
         <FinancialAccounting />
      </div>
   )
}

export default App
