/*
Given a list of words, create a master list that has sublists that contain anagrams.
*/


let anagramsList = [
  'tar',
  'car',
  'thing',
  'arc',
  'taste',
  'elbow',
  'vase',
  'state',
  'cider',
  'rat',
  'dusty',
  'night',
  'desserts',
  'cried',
  'inch',
  'study',
  'act',
  'below',
  'brag',
  'grab',
  'cat',
  'bored',
  'glean',
  'save',
  'angel',
  'robed',
  'hin',
  'tac',
  'stressed'
];

let sort = a => {
  let swapped,
    len = a.length;
  do {
      swapped = false;
      for (let i = 0; i < len - 1; i += 1) {
          if (a[i] > a[i + 1]) {
              a = a.substr(0, i) + a[i + 1] + a[i] + a.substr(i + 2);
              swapped = true;
          }
      }
  } while (swapped);
  return a;
};

let sortCache = {};

let getSortWord = word => {
  let sortedWord;
  if(sortCache[word]) {
    sortedWord = sortCache[word];
  } else {
    sortedWord = sort(word);
    sortCache[word] = sortedWord;
  }
  return sortedWord;
};

let areAnagrams = (word1, word2) => {
  if(word1.length !== word1.length) {
    return false;
  }
  return getSortWord(word1) === getSortWord(word2);
};


let getAnagrams = arr => {
  let len = arr.length,
    anagrams = [],
    checkedIndexes = new Set();
  for (let y = 0; y < len; y += 1) {
    if(!checkedIndexes.has(y)) {
      var matches = [arr[y]];
      for (var x = y  + 1; x < len; x += 1) {
        if(areAnagrams(arr[y], arr[x])) {
          matches.push(arr[x]);
          checkedIndexes.add(x);
        }
      }
      anagrams.push(matches);
    }
  }
  return anagrams;
};

console.log(getAnagrams(anagramsList));
