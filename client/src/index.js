import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.css'
import AuthProvider from './auth/AuthProvider'
import {BrowserRouter as Router} from 'react-router-dom'
import { QueryClientProvider,QueryClient } from 'react-query';
import {Provider} from 'react-redux'
import store from './redux/store'
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QueryClientProvider client={client}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
