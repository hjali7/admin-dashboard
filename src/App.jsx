import React from "react";
import { useMode , ColorModeContext } from "./theme";
import { CssBaseline ,ThemeProvider } from "@mui/material";
import {Topbar , Sidebars} from './scenes/global/imports'
import {Dashboard , Team , Contacts , Invoices ,Form , Calendar , FAQ , BarChart , PieChart , LineChart,GeograpyChart} from './scenes/imports'
import { Routes , Route } from "react-router-dom";
function App() {
  const [theme , colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebars />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/chart" element={<BarChart />} />
              <Route path="/pie" element={<PieChart />} />
              <Route path="/line" element={<LineChart />} />
              <Route path="/geography" element={<GeograpyChart />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
