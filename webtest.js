let FETCHED_ABI = [{'inputs': [{'type': 'uint256', 'name': '_value'}], 'constant': 'False', 'name': 'set', 'outputs': [], 'stateMutability': 'nonpayable', 'payable': 'False', 'type': 'function'}, {'inputs': [], 'constant': 'True', 'name': 'get', 'outputs': [{'type': 'uint256', 'name': ''}], 'stateMutability': 'view', 'payable': 'False', 'type': 'function'}];

let DEPLOYED_ADDRESS = "0x12e5ce91a54d25f6e9d9de9cf1027c4c02c8980a";

var contract = web3.eth.contract(FETCHED_ABI);
var cInstance = contract.At(DEPLOYED_ADDRESS);
