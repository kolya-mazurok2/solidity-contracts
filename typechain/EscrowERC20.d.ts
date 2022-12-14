/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface EscrowERC20Interface extends ethers.utils.Interface {
  functions: {
    "allowToken(bytes32,address)": FunctionFragment;
    "allowedTokens(bytes32)": FunctionFragment;
    "balances(address,bytes32)": FunctionFragment;
    "deposit(uint256,bytes32,address)": FunctionFragment;
    "rollback(uint256)": FunctionFragment;
    "withdraw(uint256,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowToken",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rollback",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "allowToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rollback", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class EscrowERC20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: EscrowERC20Interface;

  functions: {
    allowToken(
      _symbol: BytesLike,
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    balances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposit(
      _amount: BigNumberish,
      _symbol: BytesLike,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rollback(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _amount: BigNumberish,
      _symbol: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowToken(
    _symbol: BytesLike,
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowedTokens(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  balances(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    _amount: BigNumberish,
    _symbol: BytesLike,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rollback(
    transactionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _amount: BigNumberish,
    _symbol: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowToken(
      _symbol: BytesLike,
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allowedTokens(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    balances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      _symbol: BytesLike,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rollback(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _amount: BigNumberish,
      _symbol: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    allowToken(
      _symbol: BytesLike,
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      _symbol: BytesLike,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rollback(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      _symbol: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowToken(
      _symbol: BytesLike,
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      _symbol: BytesLike,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rollback(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      _symbol: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
