import React from 'react';
import renderer from 'react-test-renderer';

// const { sendChatAction } = require('./Store');

// // test('It should emit/print the sent value', () => {
// //   const component = renderer.create()
// //   const chatMsg = sendChatAction('Test Success');
// //   expect(chatMsg).toBe('Test Success');
// // });

test('should add 2 to 2 for 4', () => {
  expect(2 + 2).toEqual(4);
});
