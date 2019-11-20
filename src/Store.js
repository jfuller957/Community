import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

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

let socket;

function sendChatAction(value) {
  socket.emit('chat message', value);
}

export default function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initState);

  if (!socket) {
    socket = io(':3001');
    socket.on('chat message', function(msg) {
      dispatch({ type: RECEIVE_MESSAGE, payload: msg });
    });
  }

  const user = 'Assassin' + Math.random(100).toFixed(2);

  return (
    <CTX.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </CTX.Provider>
  );
}
