import { createSlice } from "@reduxjs/toolkit";
import editor from "../../componentes/editor";

const defecto = [
    '# Encabezado H1',
    '## Subencabezado H2',
    '[Enlace a Google](https://www.google.com)',
    'Texto en **negrita** y *cursiva*',
    '`código en línea`',
    '```\nbloque de código\n```',
    '- Elemento de lista 1',
    '- Elemento de lista 2',
    '> Cita en bloque',
    '![Texto alternativo de la imagen](https://via.placeholder.com/150)'
  ];
  
  const valorPorDefecto = (arr = defecto) => {
    return defecto.join('\n')
  }

export const markdownSlice = createSlice({
    name: 'markdown',
    initialState: {
      value: valorPorDefecto(),
      editorExpandido: false,
      vistaPreviaExpandida: false
    },
    reducers: {
        mostrarVistaPrevia: (state, action) => {
            state.value = action.payload
        },
        actualizarEstadoEditor: (state, action) => {
          state.editorExpandido = !state.editorExpandido;
        },
        actualizarEstadoVistaPrevia: (state, action) => {
          state.vistaPreviaExpandida = !state.vistaPreviaExpandida;
        }
    }
});

export const { mostrarVistaPrevia, actualizarEstadoEditor, actualizarEstadoVistaPrevia } = markdownSlice.actions;