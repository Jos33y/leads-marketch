import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralHome from './general';
import GeneralPersonalInfo from './general/pages/page-1';
import GeneralTradingExp from './general/pages/page-2';
import GeneralFinancialBg from './general/pages/page-3';
import GeneralMarketKnw from './general/pages/page-4';
import GeneralConcludingQue from './general/pages/page-5';
import GeneralThankYou from './general/pages/thank-you';

const App = () =>{
  return (
   <>
   <Router>
    <Routes>
      <Route path='/general' element={<GeneralHome />} /> 
      <Route path='/' element={<GeneralPersonalInfo />} />
      <Route path='/g-2' element={<GeneralTradingExp />} />
      <Route path='/g-3' element={<GeneralFinancialBg />} />
      <Route path='/g-4' element={<GeneralMarketKnw />} />
      <Route path='/g-5' element={<GeneralConcludingQue />} />
      <Route path='/g-thanks' element={<GeneralThankYou />} />
    </Routes>
   </Router>
   </>
  );
}
 
export default App;
