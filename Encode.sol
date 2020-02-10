pragma solidity ^0.5.0;

contract Test {
    function encodeInt8(int8 n) public pure returns (bytes memory) {
        return abi.encodePacked(n);
    }

    function encodeUint8(uint8 n) public pure returns (bytes memory) {
        return abi.encodePacked(n);
    }

    function encodeInt32(int32 n) public pure returns (bytes memory) {
        return abi.encodePacked(n);
    }

    function encodeUint32(uint32 n) public pure returns (bytes memory) {
        return abi.encodePacked(n);
    }

    function encodeInt(int n) public pure returns (bytes memory) {
        return abi.encodePacked(n);
    }

    function encodeUint(uint n) public pure returns (bytes memory) {
        return abi.encodePacked(n);
    }
    function keka(uint32 value, uint32 fake, bytes32 secret) public pure returns (bytes32){
        return keccak256(abi.encodePacked(value,fake,secret));
    }
}
