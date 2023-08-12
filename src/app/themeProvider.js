'use client'
 
import { createContext } from 'react'
import { Provider } from "react-redux";
import {store} from "@/redux/store";
import Header from "../components/Header"
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({ children }) {
  return (<ThemeContext.Provider value="dark">
    <Provider store={store}>
    <Header/>
    {children}
    </Provider>
    </ThemeContext.Provider>)
}