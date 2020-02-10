//var message = "Hello World"
//console.log(message);

const SHA256 = require("crypto-js/sha256"); //traido desde npm install crypto-js

class Block {

    constructor(_index, _timestamp, _data, _hashPreviousBlock){
        this.index = _index; 
        this.timestamp = _timestamp;
        this.data = _data; 
        this.hashPreviousBlock = _hashPreviousBlock;
        this.hash = this.calculateHash();

    }

    calculateHash(){
        //calculo del hash del bloque 
        return SHA256( this.index + this.timestamp + this.hashPreviousBlock + JSON.stringify(this.data)).toString();

    }

}

class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()];//incluir blockgenesis manualmente
        
    }
    createGenesisBlock(){
        new Block(0, "01/01/2020", "GenesisBlock", 0);
    }
}