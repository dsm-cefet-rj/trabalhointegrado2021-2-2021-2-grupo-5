import { configureStore } from '@reduxjs/toolkit'


import eventosReducer from './eventos/EventosSlice'

export const store = configureStore({
    reducer: {
      eventos: eventosReducer 
     /*aqui poderiam entrar mais reducers, um por chave do mapa */
    }
})
