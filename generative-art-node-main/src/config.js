const layersOrder = [
    { name: 'background', number: 24 },
    { name: 'background extra', number: 18 },
    { name: 'REDONE POCKET', number: 15 },
    { name: 'REDONE SIDE PT. 2', number: 4 },
    { name: 'REDONE TOP PT. 2', number: 4 },
    { name: 'REDONE FACE PT. 2', number: 6 },
    { name: 'MOUSTACHE', number: 7 },
    { name: 'REDONE SHIRT BASE', number: 4 },
    { name: 'REDONE SHIRT', number: 175 },
    { name: 'REDONE MOUTH', number: 28 },
    { name: 'REDONE EYES', number: 31 },
    { name: 'REDONE HEAD', number: 32 },
    { name: 'REDONE EARS', number: 14 },
 
];  
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 3500;

module.exports = { layersOrder, format, rarity, defaultEdition };