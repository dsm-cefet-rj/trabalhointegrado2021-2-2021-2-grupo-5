import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
  
const initialProjects = [];

function addEventoReducer(eventos, evento){
    // let proxId = 1 + eventos.map(p => p.id).reduce((x, y) => Math.max(x,y));
    let proxId = 5;
    return eventos.concat([{...evento, id: proxId}]);
}

function deleteEventoReducer(eventos, id){
    return eventos.filter((p) => p.id !== id);
}

function  updateEventoReducer(eventos, evento){
    let index = eventos.map(p => p.id).indexOf(evento.id);
    eventos.splice(index, 1, evento);
    return eventos;
}

export const fetchEventos = createAsyncThunk('eventos/fetchEventos', 
    async () => {
        console.log(await (await fetch('http://localhost:3004/eventos')).json())
        return await (await fetch('http://localhost:3004/eventos')).json();
});


function fullfillEventosReducer(eventosState, eventosFetched){
    return eventosFetched;
}


export const eventosSlice = createSlice({
    name: 'eventos',
    initialState: initialProjects,
    reducers: {
       addEvento: (state, action) => addEventoReducer(state, action.payload),
       updateEvento: (state, action) => updateEventoReducer(state, action.payload),
       deleteEvento: (state, action) => deleteEventoReducer(state, action.payload)
    },
    extraReducers: {
       [fetchEventos.fulfilled]: (state, action) => fullfillEventosReducer(state, action.payload),
    },
})

export const { addEvento, updateEvento, deleteEvento } = eventosSlice.actions
export default eventosSlice.reducer
    
