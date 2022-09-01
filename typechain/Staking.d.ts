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

interface StakingInterface extends ethers.utils.Interface {
  functions: {
    "accountBalances(address,bytes32)": FunctionFragment;
    "depositTokens(uint256,bytes32)": FunctionFragment;
    "getWhitelistedTokenAddresses(bytes32)": FunctionFragment;
    "whitelistToken(bytes32,address)": FunctionFragment;
    "whitelistedTokens(bytes32)": FunctionFragment;
    "withdrawTokens(uint256,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountBalances",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTokens",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistedTokenAddresses",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistToken",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistedTokenAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class Staking extends BaseContract {
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

  interface: StakingInterface;

  functions: {
    accountBalances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositTokens(
      amount: BigNumberish,
      symbol: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getWhitelistedTokenAddresses(
      token: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    whitelistToken(
      symbol: BytesLike,
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelistedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    withdrawTokens(
      amount: BigNumberish,
      symbol: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accountBalances(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositTokens(
    amount: BigNumberish,
    symbol: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getWhitelistedTokenAddresses(
    token: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  whitelistToken(
    symbol: BytesLike,
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelistedTokens(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  withdrawTokens(
    amount: BigNumberish,
    symbol: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accountBalances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositTokens(
      amount: BigNumberish,
      symbol: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getWhitelistedTokenAddresses(
      token: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    whitelistToken(
      symbol: BytesLike,
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    withdrawTokens(
      amount: BigNumberish,
      symbol: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    accountBalances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositTokens(
      amount: BigNumberish,
      symbol: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getWhitelistedTokenAddresses(
      token: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistToken(
      symbol: BytesLike,
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelistedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawTokens(
      amount: BigNumberish,
      symbol: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accountBalances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositTokens(
      amount: BigNumberish,
      symbol: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getWhitelistedTokenAddresses(
      token: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistToken(
      symbol: BytesLike,
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelistedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawTokens(
      amount: BigNumberish,
      symbol: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
