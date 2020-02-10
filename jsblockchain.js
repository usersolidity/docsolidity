//var message = "Hello World"
//console.log(message);

const SHA256 = require("crypto-js/sha256"); //traido desde npm install crypto-js

class Block {

    constructor(index, timestamp, data, previousHash = '') {
            this.index = index;
            this.timestamp = timestamp;
            this.data = data;
            this.previousHash = previousHash;
            this.hash = this.calculateHash();
            this.nonce = 0;
        }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }
    //var dt = new Date();
    //var timestamp = dt.toString();   
}

class BlockChain{
    constructor() {
        this.chain = [this.createGenesis()];
    }
    createGenesis() {
        return new Block(0, "01/01/2018", "Genesis block", "0");
    }

    latestBlock() {
        return this.chain[this.chain.length - 1]
    }
    addBlock(newBlock){
        newBlock.previousHash = this.latestBlock().hash;
        this.chain.push(newBlock);
    }
}
let block = new Block(0,"01/02/2028",{mybalance : 100});
let block2 = new Block(1,"01/02/2028",{mybalance : 50});
let block3 = new Block(3,"03/02/2028",{mybalance : 100});

let myBlockChain = new BlockChain(); 
myBlockChain.addBlock(block);
myBlockChain.addBlock(block2);
myBlockChain.addBlock(block3);
console.log(JSON.stringify(myBlockChain));


