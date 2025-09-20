import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/roboto';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";   
import { store } from "./redux/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer 
      position="top-right"
      toastClassName="toastbody"
      theme="colored"
      pauseOnFocusLoss={false}
      pauseOnHover={true}
      draggable={true}
      autoClose={3000}
      draggablePercent={60}
      closeOnClick={true}
    />
  </StrictMode>,
)
