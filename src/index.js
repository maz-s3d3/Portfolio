import App from "./App"
import ReactDOM from "react-dom/client"
import { StrictMode } from 'react';
import './index.css'
const element = document.getElementById('root');
const root = ReactDOM.createRoot(element)

root.render(
<StrictMode>
<App/>
</StrictMode>
)