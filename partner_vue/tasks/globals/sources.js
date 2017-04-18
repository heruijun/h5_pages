import fs from 'fs';
import path from 'path';

let uriMap = new Map();

let mapBuf = fs.readFileSync('./src/map.json');
let mapData = JSON.parse(mapBuf.toString());

mapData.forEach(function(map) {
  let { uri, filename } = map;
  uriMap.set(uri, filename);
});

let sourceSet = new Set(uriMap.values());

let sources = Array.from(sourceSet).map(str => {
  let info = str.split('/');
  return {
    path: info[0],
    name: info[1]
  }
});

export {
  uriMap,
  sources
};
