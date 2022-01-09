import React from "react"
import ReactDOM from "react-dom"
import { TransactionsProvider } from "./context/TransactionContext.jsx";
import "./index.css"
import App from "./App.jsx"

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root")
)
