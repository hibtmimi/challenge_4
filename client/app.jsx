import React from 'react';

const intitializeBoard = () => {
    const board = [];
    for (let i = 0; i < 42; i++) {
      board.push(Player.None);
    }
    
