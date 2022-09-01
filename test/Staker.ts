import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Signer } from 'ethers';

import ContractDeployerFactory from '../helpers/deploy';
import { Staker, XcNFT, Token } from '../typechain';

const factory = new ContractDeployerFactory();
// For each smart contract you should call new global describe function
describe('STAKER', () => {
    let staker: Staker;
    let token: Token;
    let nft: XcNFT;

    let startTime: number;
    let stopTime: number;

    let owner: Signer;
    let addr1: Signer;
    let addr2: Signer;
    let addrs: Signer[];

    beforeEach(async () => {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        const now = new Date();

        now.setHours(now.getHours() - 1);
        startTime = Math.floor(now.getTime() / 1000);
        now.setMonth(now.getMonth() + 1);
        stopTime = Math.floor(now.getTime() / 1000);

        token = (await (await ethers.getContractFactory('Token')).deploy(50000)) as Token;
        nft = (await (await ethers.getContractFactory('XcNFT')).deploy(
            'NFTest',
            'NF1',
            'ipfs://nohash'
            )) as XcNFT;

        staker = (await (await ethers.getContractFactory('Staker')).deploy(
            '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
            token.address,
            nft.address,
            {
                t1: {
                    chance: 100,
                    drop: 500,
                },
                t2: {
                    chance: 60,
                    drop: 400,
                },
                t3: {
                    chance: 50,
                    drop: 300,
                },
                t4: {
                    chance: 30,
                    drop: 200,
                },
                t5: {
                    chance: 20,
                    drop: 100,
                },
            }
        )) as Staker;
    });


    describe('Staker deployment', () => {
        it('Should set the right owner', async () => {
            expect(await staker.owner()).to.equal(await owner.getAddress());
        });
    });
    
    describe('$GAME deployment', () => {
        it('Should assign the total supply of tokens to the owner', async () => {
            const ownerBalance = await token.balanceOf(await owner.getAddress());
            expect(await token.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe('XcNFT deployment', () => {
        it('Should set the right owner', async () => {
            expect(await nft.owner()).to.equal(await owner.getAddress());
        });

        it('Should assign the total supply of tokens to the owner', async () => {
            const ownerBalance = await nft.balanceOf(await owner.getAddress());
            expect(await nft.totalSupply()).to.equal(ownerBalance);
        });
    });



    // // For each smart contract method you should have describe inside of describe block related to that contract
    describe('Staking', () => {
        //hre.tracer.enable = true;
        // Each `it` block represent use case of method and start from `should` phrase
        it('Sould stake 20 of ERC20 tokens', async () => {
            const amount = 20;
            const ownerAddress = await owner.getAddress();

            await token.approve(staker.address, amount);
            //await staker.stakeERC20(amount, 1);
            expect(await staker.getTotalERC20Stakes(ownerAddress)).to.equal(amount);
        });

        it('Should calculate 13 reward points by staking 400 $GAME', async () => {
            const amount = 200;
            const ownerAddress = await owner.getAddress();

            await token.approve(staker.address, amount * 2);
            //await staker.stakeERC20(amount, 2);
            //await staker.stakeERC20(amount, 3);
            expect(await staker.getPoints(ownerAddress)).to.equal(13);
        });

        it('Should calculate 7 reward points by staking 2 NFT', async () => {
            const ownerAddress = await owner.getAddress();

            await nft.mint(ownerAddress, 2);

            await nft.approve(staker.address, 1);
            //await staker.stakeERC721(1, 2);
            
            await nft.approve(staker.address, 2);
            //await staker.stakeERC721(2, 3);

            expect(await staker.getPoints(ownerAddress)).to.equal(7);
        });

        it('Should airdrop 500 tokens!', async () => {
            const ownerAddress = await owner.getAddress();

            await nft.mint(ownerAddress, 2);

            await nft.approve(staker.address, 1);
            //await staker.stakeERC721(1, 2);
            
            await nft.approve(staker.address, 2);
            //await staker.stakeERC721(2, 30);

            await staker.airdrop();

            //const ownerBalance = await staker.balanceOf(ownerAddress);
            //expect(ownerBalance).to.equal(500);
        });

        it('Should withdraw tokens', async () => {
            const amount = 200;
            const ownerAddress = await owner.getAddress();

            await token.approve(staker.address, 200);
            //await staker.stakeERC20(amount, 2);

            await staker.withdrawERC20();
            const ownerBalance = await token.balanceOf(ownerAddress);
            expect(ownerBalance).to.equal(50000);
        });


        // // Example of testing errors
        // it('should throw error if argument value more then 100', async () => {
        //     try {
        //         await instance.helloWorld(101);
        //     } catch (e: any) {
        //         expect(e.message.includes('V1')).to.equal(true);
        //     }
        // });
        // // Example of testing events
        // it('should emit event and pass value from arguments into that', async () => {
        //     const actualArg = 1;
        //     instance.on('TestEvent', async (args: any) => {
        //         expect(args).to.equal(actualArg);
        //     });
        //     await instance.helloWorld(actualArg);
        // });
    });
});