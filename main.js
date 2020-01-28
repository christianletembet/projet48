const SHA256 = require('crypto-js/sha256');
class Block{
  constructor(index, timestamp, text, debut, fin, previousHash=""){
    this.index=index;
    this.timestamp=timestamp;
    this.text=text;
    this.debut=debut;
    this.fin=fin;
    this.previousHash=previousHash;
    this.hash=this.calculateHash();
    this.nonce = 0;
  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.text) + this.nonce).toString();
  }

  mineBlock(difficulty){
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log("Block mined:" + this.hash);
  }
}


class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 1;

  }

  createGenesisBlock(){
    return new Block(0, "27/01/2020", "Genesis block", "0");
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    //newBlock.hash = newBlock.calculateHash();
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid(){
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i-1];

      if(currentBlock.hash != currentBlock.calculateHash()){
        return false;
      }

      if(currentBlock.previousHash != previousBlock.hash){
        return false;
      }
    }
    return true;
  }


}

let laBC = new Blockchain();
let Block1 = new Block(1, Date.now(), "salut", 1, 5);
let Block2 = new Block(1, "24/01/2020", "hola", 6, 10);
let temps1 = 30000*Math.random();
let temps2 = 30000*Math.random();

console.log('Mining block 1');
console.log(temps1);
console.log(Block1);
laBC.addBlock(Block1);

console.log('Mining block 2');
console.log(temps2);
console.log(Block2);
laBC.addBlock(Block2);




console.log('Blockchain valide ?' + laBC.isChainValid());


let hash1 = "0dc03a2e170decca7bf0bd4e57c60ad49003806f2fe5fe5de7e5e2804908e6c1";
let hash2 = "0dc03a2e170decca7bf0bd4e57c60ad49003806f2fe5fe5de7e5e2804908e6c1";
let hash3 = "0dc03a2e170decca7bf0bd4e57c60ad64923806f2fe5fe5de7e5e2804908e6c1";
let hash4 = "0dc03a2e170decca7bf0bd4e57c60ad49003806f2fe5fe5de7e5e2804908e6c1";
let hash5 = "0dc03a2e170decca7bf0bd4e57c60ad49003806f2fe5fe5de7e5e2804908e6c1";


function bannissement(){
  let nb1 = 1;
  let nb2 = 0;


  if(hash2 === hash1){
    nb1++;
  }
  else {
    nb2++;
  }

  if(hash3 === hash1){
    nb1++;
  }
  else {
    nb2++;
  }

  if(hash4 === hash1){
    nb1++;
  }
  else {
    nb2++;
  }

  if(hash5 === hash1){
    nb1++;
  }
  else {
    nb2++;
  }

console.log(nb1);
console.log(nb2);


 }

 bannissement();






// fin video 1 console.log(JSON.stringify(savjeeCoin, null, 4));
