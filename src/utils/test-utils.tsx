import React, {FC, ReactElement} from 'react';
import { Provider } from "react-redux";
import {render, RenderOptions} from '@testing-library/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "../store";
import ThemeProvider from "../theme/ThemeProvider";

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider>
                {children}    
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export { customRender as render }