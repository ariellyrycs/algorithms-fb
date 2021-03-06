/*
Given a grid of characters output a decoded message.
The message for the following would be IROCKA. (diagonally down right and diagonally up right if you can't go further .. you continue doing this)

I B C A L K A
D R F C A E A
G H O E L A D
*/

var grid = [
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D']
];


let findGridText = (grid) => {
  let yLen = grid.length;
  if(!yLen) {
    return '';
  }
  let xLen = grid[0].length,
    tmpStr = '',
    tmpJump = 1;

  for(let x = 0, y = 0; x < xLen; x += 1) {
    tmpStr += grid[y][x];
    if(tmpJump === 1) {
      if(y === (yLen - 1)) {
        tmpJump = -1;
      }
    } else if(0 === y) {
      tmpJump = 1;
    }
    y += tmpJump;
  }
  return tmpStr;
};

console.log(findGridText(grid));
console.assert(findGridText(grid) === 'IROCLEA', 'success');
