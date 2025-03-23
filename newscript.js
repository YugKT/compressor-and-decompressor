class Node {
  constructor(freq, char, left = null, right = null) {
    this.freq = freq;
    this.char = char;
    this.left = left;
    this.right = right;
  }
}

let root;

function getFrequencies(str) {
  const freqMap = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!freqMap.has(char)) {
      freqMap.set(char, 0);
    }
    freqMap.set(char, freqMap.get(char) + 1);
  }
  return freqMap;
}

function buildTree(freqMap) {
  const queue = [];
  freqMap.forEach((freq, char) => {
    queue.push(new Node(freq, char));
  });
  while (queue.length > 1) {
    queue.sort((a, b) => a.freq - b.freq);
    const left = queue.shift();
    const right = queue.shift();
    const parent = new Node(left.freq + right.freq, null, left, right);
    queue.push(parent);
  }
  return queue.shift();
}

function buildCodeMap(node, code = "", codeMap = new Map()) {
  if (node.char) {
    codeMap.set(node.char, code);
  } else {
    buildCodeMap(node.left, code + "0", codeMap);
    buildCodeMap(node.right, code + "1", codeMap);
  }
  return codeMap;
}

function encode(str, codeMap) {
  let encodedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    encodedStr += codeMap.get(char);
  }
  return encodedStr;
}

function decode(encodedStr, node) {
  let decodedStr = "";
  let currNode = node;
  for (let i = 0; i < encodedStr.length; i++) {
    const bit = encodedStr[i];
    if (bit === "0") {
      currNode = currNode.left;
    } else {
      currNode = currNode.right;
    }
    if (currNode.char) {
      decodedStr += currNode.char;
      currNode = node;
    }
  }
  return decodedStr;
}

function huffman(str) {
  const freqMap = getFrequencies(str);
  const tree = buildTree(freqMap);
  const codeMap = buildCodeMap(tree);
  const encodedStr = encode(str, codeMap);
  const decodedStr = decode(encodedStr, tree);
  root = tree;
  return { encodedStr, decodedStr };
}

function displayEncodedText() {
  var inputText = document.getElementById("Encryption-text").value;
  const { encodedStr, decodedStr } = huffman(inputText);
  document.getElementById("output-text").innerHTML = encodedStr;
}

function displayDecodedText() {
  var inputText = document.getElementById("Decryption-text").value;
  document.getElementById("doutput-text").innerHTML = decode(inputText, root);
}

document.querySelector(".clear-btn").addEventListener("click", function () {
  document.querySelectorAll(".text-data")[0].value = "";
  document.querySelectorAll(".Dtext-data")[0].value = "";
  document.querySelectorAll(".output")[0].textContent = "";
  document.querySelectorAll(".dOutput")[0].textContent = "";
});

function toggle() {
  var x = document.getElementById("comp");
  var y = document.getElementById("dcomp");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    document.querySelector("h1").textContent = "COMPRESSOR";
    document.querySelector("body").style.backgroundColor = "#b799ff";
    document.getElementById("toggler").textContent = "DECOMPRESSOR";
  } else {
    y.style.display = "block";
    x.style.display = "none";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h1").textContent = "DECOMPRESSOR";
    document.getElementById("toggler").textContent = "COMPRESSOR";
  }
}
