# Comp-Decompressor

To build this project, i have used _**HTML, CSS, JavaScript**_ and prior knowledge of _**Data Structure and algorithms**_.

Algorithm used Huffman's coding Technique:
<br>**-----------------------------------------------------------------------------------------------------------------------------------**
<br>What is Huffman's Coding?
<br>Huffman coding is a lossless data compression algorithm. The idea is to assign variable-length codes to input characters, lengths of the assigned codes are based on the frequencies of corresponding characters. 


<br>**-----------------------------------------------------------------------------------------------------------------------------------**



<br>**Huffman's Algorithm** :
<br>Huffman's algorithm is a method for lossless data compression.

1. Initialize a list of nodes, each containing a character and its frequency in the input data.
2. Create a leaf node for each character-frequency pair and add them to the list.
3. While there's more than one node in the list:
   a. Sort the list in ascending order of frequencies.
   b. Take the two nodes with the lowest frequencies and merge them into a new internal node.
   c. Assign the sum of their frequencies to the new node.
   d. Add the new node to the list.
4. The final node in the list is the root of the Huffman tree.
5. Traverse the tree from the root to each leaf, assigning '0' for left branches and '1' for right branches.
6. Record these binary codes for each character.
7. Encode the input data using the generated Huffman codes.
8. To decode, start at the root and follow the binary code until reaching a leaf, then output the corresponding character.
9. Huffman codes ensure shorter codes for more frequent characters, achieving compression.
10. The tree structure itself can be shared or transmitted as part of the compressed data for decoding.







<br>**-----------------------------------------------------------------------------------------------------------------------------------**


<br>Guidelines to use Compressor:
<br>step1: Enter data you want to compress.
<br><a href="https://ibb.co/3hK4sm0"><img src="https://i.ibb.co/cTqkvhN/Screenshot-2023-09-16-at-3-23-16-PM.png" alt="Screenshot-2023-09-16-at-3-23-16-PM" border="0"></a>
<br>step2: click on Encrypt
<br><a href="https://ibb.co/7VfJNpM"><img src="https://i.ibb.co/BjpVK6W/Screenshot-2023-09-16-at-3-24-06-PM.png" alt="Screenshot-2023-09-16-at-3-24-06-PM" border="0"></a>


<br>you will get your compressed data in binary format

<br>copy this compressed data to decompress it.


<br>**-----------------------------------------------------------------------------------------------------------------------------------**

<br>**Guidlines to use Decompressor:**



<br>step 1: click on Decompressor on compressor page.
<br><a href="https://ibb.co/xMH9my3"><img src="https://i.ibb.co/SKrYQ2J/Screenshot-2023-09-16-at-3-24-15-PM.png" alt="Screenshot-2023-09-16-at-3-24-15-PM" border="0"></a>
<br>step 2: paste copied binary compressed data in input box of decompressor.
<br><a href="https://ibb.co/fvxV4vH"><img src="https://i.ibb.co/NSygZSK/Screenshot-2023-09-16-at-3-24-42-PM.png" alt="Screenshot-2023-09-16-at-3-24-42-PM" border="0"></a>
<br>step 3: click on Decrypt .
<br><a href="https://ibb.co/YcqPn8d"><img src="https://i.ibb.co/0Cdm4Z9/Screenshot-2023-09-16-at-3-24-51-PM.png" alt="Screenshot-2023-09-16-at-3-24-51-PM" border="0"></a>
<br>You will get your decrypted data.
