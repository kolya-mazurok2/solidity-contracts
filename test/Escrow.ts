import { Signer } from 'ethers';
import { ethers } from 'hardhat';
import { expect } from 'chai';

import { Escrow } from '../typechain';

describe('ESCROW', () => {
    let escrow: Escrow;

    let sender: Signer;
    let receiver: Signer;
    let senderAddr: string;
    let receiverAddr: string;

    beforeEach(async() => {
        [sender, receiver] = await ethers.getSigners();

        senderAddr = await sender.getAddress();
        receiverAddr = await receiver.getAddress();

        escrow = (await (await ethers.getContractFactory('Escrow')).deploy());
    });

    describe('Escrowing', () => {
        it('Should deposit 1 Ether', async () => {
            await escrow.deposit(receiverAddr, {
                from: senderAddr,
                value: ethers.utils.parseEther('1.0')
            });

            expect(await escrow.getBalanceByAddr(receiverAddr)).to.equal('1000000000000000000');
        });

        it('Should withdraw balance', async () => {
            const startBalance = await receiver.getBalance();

            await escrow.deposit(receiverAddr, {
                from: senderAddr,
                value: ethers.utils.parseEther('1.0')
            });

            await escrow.connect(receiver).withdraw()

            const endBalance = await receiver.getBalance();
            
            expect(endBalance.gt(startBalance)).to.equal(true);
        });

        it('Should throw an error if rate is greater than 100 ethers', async () => {
            try {
                await escrow.deposit(receiverAddr, {
                    from: senderAddr,
                    value: ethers.utils.parseEther('101.0')
                });
            } catch (e: any) {
                expect(e.message.includes('You can not send more than 100 ethers')).to.equal(true);
            }
        });
    });
});