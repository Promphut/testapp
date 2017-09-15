import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ':global logo-spin': {
    'animation': 'App-logo-spin infinite 3s linear'
  },
  ':global container': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'background': 'ghostwhite',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  ':global container form': {
    'flex': '1 500px',
    'width': [{ 'unit': 'px', 'value': 500 }],
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'background': 'white',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  ':global logo': {
    'width': [{ 'unit': 'px', 'value': 180 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }]
  },
  ':global input-box': {
    'width': [{ 'unit': 'px', 'value': 350 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }]
  },
  ':global input-box label': {
    'display': 'block',
    'textAlign': 'left'
  },
  ':global input-box input': {
    'display': 'block',
    'borderRadius': '1rem',
    'color': '#242526',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 25 }]
  },
  ':global input-box input:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#242526' }]
  },
  ':global btn-submit': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'background': 'deepskyblue',
    'borderRadius': '5px',
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': 'ghostwhite'
  },
  ':global row': {
    'display': 'flex',
    'justifyContent': 'space-between'
  },
  ':global row a': {
    'color': 'deepskyblue',
    'textDecoration': 'none'
  },
  ':global row a:hover': {
    'textDecoration': 'underline'
  }
});
