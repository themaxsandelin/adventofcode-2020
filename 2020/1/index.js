const { ENETDOWN } = require('constants');
const fs = require('fs');
const path = require('path');

async function partOne() {
  const file = await fs.promises.readFile(path.resolve(__dirname, 'data.json'), 'utf-8');
  const entries = JSON.parse(file);

  const values = [];
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      if ((entries[i] + entries[j]) === 2020) {
        return entries[i] * entries[j];
      }
    }
  }
}

async function partTwo() {
  const file = await fs.promises.readFile(path.resolve(__dirname, 'data.json'), 'utf-8');
  const entries = JSON.parse(file);

  const values = [];
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      for (let k = j + 1; k < entries.length; k++) {
        if ((entries[i] + entries[j] + entries[k]) === 2020) {
          return entries[i] * entries[j] * entries[k];
        }
      }
    }
  }
}