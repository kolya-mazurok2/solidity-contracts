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

interface StakerInterface extends ethers.utils.Interface {
  functions: {
    "DAY()": FunctionFragment;
    "MONTH()": FunctionFragment;
    "YEAR()": FunctionFragment;
    "addProject(string,address,uint256,uint256,uint256)": FunctionFragment;
    "airdrop()": FunctionFragment;
    "checkProject(address)": FunctionFragment;
    "getPoints(address)": FunctionFragment;
    "getTimestamp()": FunctionFragment;
    "getTotalERC20Stakes(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeProject(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "stakeERC20(address,uint256,uint256)": FunctionFragment;
    "stakeERC721(address,uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawERC20()": FunctionFragment;
    "withdrawERC721()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DAY", values?: undefined): string;
  encodeFunctionData(functionFragment: "MONTH", values?: undefined): string;
  encodeFunctionData(functionFragment: "YEAR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addProject",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "airdrop", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkProject",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getPoints", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalERC20Stakes",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeProject",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakeERC20",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeERC721",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC721",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "DAY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MONTH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "YEAR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addProject", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "airdrop", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPoints", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalERC20Stakes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeERC20", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC721",
    data: BytesLike
  ): Result;

  events: {
    "Airdrop(address,uint256,uint256)": EventFragment;
    "ERC20Staked(address,uint256,uint256,uint256)": EventFragment;
    "ERC20Withdraw(address)": EventFragment;
    "ERC721Staked(address,uint256,uint256,uint256)": EventFragment;
    "ERC721Withdraw(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProjectAdded(address,string,uint256,uint256,uint256)": EventFragment;
    "ProjectDeleted(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Airdrop"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20Withdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC721Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC721Withdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProjectAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProjectDeleted"): EventFragment;
}

export type AirdropEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    sender: string;
    amount: BigNumber;
    random: BigNumber;
  }
>;

export type ERC20StakedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    sender: string;
    amount: BigNumber;
    period: BigNumber;
    points: BigNumber;
  }
>;

export type ERC20WithdrawEvent = TypedEvent<[string] & { sender: string }>;

export type ERC721StakedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    sender: string;
    tokenId: BigNumber;
    period: BigNumber;
    points: BigNumber;
  }
>;

export type ERC721WithdrawEvent = TypedEvent<[string] & { sender: string }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ProjectAddedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber] & {
    addr: string;
    name: string;
    startTime: BigNumber;
    stopTime: BigNumber;
    supply: BigNumber;
  }
>;

export type ProjectDeletedEvent = TypedEvent<[string] & { addr: string }>;

export class Staker extends BaseContract {
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

  interface: StakerInterface;

  functions: {
    DAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MONTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    YEAR(overrides?: CallOverrides): Promise<[BigNumber]>;

    addProject(
      _name: string,
      _addr: string,
      _startTimestamp: BigNumberish,
      _stopTimestamp: BigNumberish,
      _supply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    airdrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkProject(_project: string, overrides?: CallOverrides): Promise<[void]>;

    getPoints(_addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalERC20Stakes(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeProject(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeERC20(
      _project: string,
      _stake: BigNumberish,
      _period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeERC721(
      _project: string,
      _tokenId: BigNumberish,
      _period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawERC20(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawERC721(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DAY(overrides?: CallOverrides): Promise<BigNumber>;

  MONTH(overrides?: CallOverrides): Promise<BigNumber>;

  YEAR(overrides?: CallOverrides): Promise<BigNumber>;

  addProject(
    _name: string,
    _addr: string,
    _startTimestamp: BigNumberish,
    _stopTimestamp: BigNumberish,
    _supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  airdrop(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkProject(_project: string, overrides?: CallOverrides): Promise<void>;

  getPoints(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  getTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalERC20Stakes(
    _staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeProject(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeERC20(
    _project: string,
    _stake: BigNumberish,
    _period: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeERC721(
    _project: string,
    _tokenId: BigNumberish,
    _period: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawERC20(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawERC721(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DAY(overrides?: CallOverrides): Promise<BigNumber>;

    MONTH(overrides?: CallOverrides): Promise<BigNumber>;

    YEAR(overrides?: CallOverrides): Promise<BigNumber>;

    addProject(
      _name: string,
      _addr: string,
      _startTimestamp: BigNumberish,
      _stopTimestamp: BigNumberish,
      _supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    airdrop(overrides?: CallOverrides): Promise<void>;

    checkProject(_project: string, overrides?: CallOverrides): Promise<void>;

    getPoints(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalERC20Stakes(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeProject(_addr: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    stakeERC20(
      _project: string,
      _stake: BigNumberish,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeERC721(
      _project: string,
      _tokenId: BigNumberish,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawERC20(overrides?: CallOverrides): Promise<void>;

    withdrawERC721(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Airdrop(address,uint256,uint256)"(
      sender?: string | null,
      amount?: null,
      random?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { sender: string; amount: BigNumber; random: BigNumber }
    >;

    Airdrop(
      sender?: string | null,
      amount?: null,
      random?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { sender: string; amount: BigNumber; random: BigNumber }
    >;

    "ERC20Staked(address,uint256,uint256,uint256)"(
      sender?: string | null,
      amount?: null,
      period?: null,
      points?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        amount: BigNumber;
        period: BigNumber;
        points: BigNumber;
      }
    >;

    ERC20Staked(
      sender?: string | null,
      amount?: null,
      period?: null,
      points?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        amount: BigNumber;
        period: BigNumber;
        points: BigNumber;
      }
    >;

    "ERC20Withdraw(address)"(
      sender?: string | null
    ): TypedEventFilter<[string], { sender: string }>;

    ERC20Withdraw(
      sender?: string | null
    ): TypedEventFilter<[string], { sender: string }>;

    "ERC721Staked(address,uint256,uint256,uint256)"(
      sender?: string | null,
      tokenId?: null,
      period?: null,
      points?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        tokenId: BigNumber;
        period: BigNumber;
        points: BigNumber;
      }
    >;

    ERC721Staked(
      sender?: string | null,
      tokenId?: null,
      period?: null,
      points?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        tokenId: BigNumber;
        period: BigNumber;
        points: BigNumber;
      }
    >;

    "ERC721Withdraw(address)"(
      sender?: string | null
    ): TypedEventFilter<[string], { sender: string }>;

    ERC721Withdraw(
      sender?: string | null
    ): TypedEventFilter<[string], { sender: string }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "ProjectAdded(address,string,uint256,uint256,uint256)"(
      addr?: string | null,
      name?: null,
      startTime?: null,
      stopTime?: null,
      supply?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        addr: string;
        name: string;
        startTime: BigNumber;
        stopTime: BigNumber;
        supply: BigNumber;
      }
    >;

    ProjectAdded(
      addr?: string | null,
      name?: null,
      startTime?: null,
      stopTime?: null,
      supply?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        addr: string;
        name: string;
        startTime: BigNumber;
        stopTime: BigNumber;
        supply: BigNumber;
      }
    >;

    "ProjectDeleted(address)"(
      addr?: string | null
    ): TypedEventFilter<[string], { addr: string }>;

    ProjectDeleted(
      addr?: string | null
    ): TypedEventFilter<[string], { addr: string }>;
  };

  estimateGas: {
    DAY(overrides?: CallOverrides): Promise<BigNumber>;

    MONTH(overrides?: CallOverrides): Promise<BigNumber>;

    YEAR(overrides?: CallOverrides): Promise<BigNumber>;

    addProject(
      _name: string,
      _addr: string,
      _startTimestamp: BigNumberish,
      _stopTimestamp: BigNumberish,
      _supply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    airdrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkProject(
      _project: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoints(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalERC20Stakes(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeProject(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeERC20(
      _project: string,
      _stake: BigNumberish,
      _period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeERC721(
      _project: string,
      _tokenId: BigNumberish,
      _period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawERC20(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawERC721(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MONTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    YEAR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addProject(
      _name: string,
      _addr: string,
      _startTimestamp: BigNumberish,
      _stopTimestamp: BigNumberish,
      _supply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    airdrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkProject(
      _project: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoints(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalERC20Stakes(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeProject(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeERC20(
      _project: string,
      _stake: BigNumberish,
      _period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeERC721(
      _project: string,
      _tokenId: BigNumberish,
      _period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawERC20(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawERC721(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
