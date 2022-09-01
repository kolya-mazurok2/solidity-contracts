/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EscrowERC20, EscrowERC20Interface } from "../EscrowERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token_addr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Bought",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161089e38038061089e8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b6107908061010e6000396000f3fe60806040526004361061003f5760003560e01c8063a6f2ae3a14610044578063b203bb991461004e578063d0e30db01461008b578063fc0c546a146100b6575b600080fd5b61004c6100e1565b005b34801561005a57600080fd5b5061007560048036038101906100709190610462565b610303565b604051610082919061062b565b60405180910390f35b34801561009757600080fd5b506100a0610328565b6040516100ad919061062b565b60405180910390f35b3480156100c257600080fd5b506100cb6103ff565b6040516100d891906105d0565b60405180910390f35b600034905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016101429190610563565b60206040518083038186803b15801561015a57600080fd5b505afa15801561016e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019291906104c7565b9050600082116101d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ce9061060b565b60405180910390fd5b8082111561021a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610211906105eb565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016102759291906105a7565b602060405180830381600087803b15801561028f57600080fd5b505af11580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c7919061049e565b507f4e08ba899977cf7d4c2964bce71c6b9a7ef76ee5166a4c1249a1e08016e33ef1826040516102f7919061062b565b60405180910390a15050565b6001602052816000526040600020602052806000526040600020600091509150505481565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b81526004016103a692919061057e565b60206040518083038186803b1580156103be57600080fd5b505afa1580156103d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f691906104c7565b90508091505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008135905061043281610715565b92915050565b6000815190506104478161072c565b92915050565b60008151905061045c81610743565b92915050565b6000806040838503121561047557600080fd5b600061048385828601610423565b925050602061049485828601610423565b9150509250929050565b6000602082840312156104b057600080fd5b60006104be84828501610438565b91505092915050565b6000602082840312156104d957600080fd5b60006104e78482850161044d565b91505092915050565b6104f981610657565b82525050565b6105088161069f565b82525050565b600061051b602083610646565b9150610526826106c3565b602082019050919050565b600061053e601b83610646565b9150610549826106ec565b602082019050919050565b61055d81610695565b82525050565b600060208201905061057860008301846104f0565b92915050565b600060408201905061059360008301856104f0565b6105a060208301846104f0565b9392505050565b60006040820190506105bc60008301856104f0565b6105c96020830184610554565b9392505050565b60006020820190506105e560008301846104ff565b92915050565b600060208201905081810360008301526106048161050e565b9050919050565b6000602082019050818103600083015261062481610531565b9050919050565b60006020820190506106406000830184610554565b92915050565b600082825260208201905092915050565b600061066282610675565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006106aa826106b1565b9050919050565b60006106bc82610675565b9050919050565b7f4e6f7420656e6f75676820746f6b656e7320696e207468652072657365727665600082015250565b7f596f75206e65656420746f2073656e6420736f6d652065746865720000000000600082015250565b61071e81610657565b811461072957600080fd5b50565b61073581610669565b811461074057600080fd5b50565b61074c81610695565b811461075757600080fd5b5056fea26469706673582212209a9d88cd81626fc725abf846dddeca57e031c9cda587a1fdea94e528603d900f64736f6c63430008040033";

export class EscrowERC20__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _token_addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EscrowERC20> {
    return super.deploy(_token_addr, overrides || {}) as Promise<EscrowERC20>;
  }
  getDeployTransaction(
    _token_addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token_addr, overrides || {});
  }
  attach(address: string): EscrowERC20 {
    return super.attach(address) as EscrowERC20;
  }
  connect(signer: Signer): EscrowERC20__factory {
    return super.connect(signer) as EscrowERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EscrowERC20Interface {
    return new utils.Interface(_abi) as EscrowERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EscrowERC20 {
    return new Contract(address, _abi, signerOrProvider) as EscrowERC20;
  }
}
