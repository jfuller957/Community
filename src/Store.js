import React from 'react';

export const CTX = React.createContext();

const initState = {
  general: [
    { from: 'Archer', msg: 'Yo' },
    { from: 'Saber', msg: 'Sup' },
    { from: 'Caster', msg: 'Hey' }
  ],
  focusGroup: [
    { from: 'Lancer', msg: 'hmph' },
    { from: 'Rider', msg: 'oh?' },
    { from: 'Berzerker', msg: '...' }
  ]
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;

  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        [topic]: [
          ...state[topic],
          {
            from,
            msg
          }
        ]
      };
    default:
      return state;
  }
}

export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
