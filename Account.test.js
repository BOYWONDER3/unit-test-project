const FileSystem = require('./FileSystem')
const Account  = require('./Account')

beforeEach(() => {
    jest.restoreAllMocks()
})

describe('#deposit', () => {
    test('it adds money to the account', async () => {
        const startingBalance = 5
        const amount = 10
        // create an account with a name and balance
        const account = await createAccount('kyle', startingBalance)
        // call the deposit method
        const spy = jest.spyOn(FileSystem, 'write').mockReturnValue(Promise.resolve())
        await account.deposit(amount)
        // check the balance of the account
        expect(account.balance).toBe(amount + startingBalance)
        // check the file is correct
        expect(spy).toBeCalledWith(account.filePath, amount + startingBalance)
        spy.mockRestore()
    })
})


describe('#withdraw', () => {
    test('it removes money from the account', async () => {
        const startingBalance = 10
        const amount = 5
        
        const account = await createAccount('kyle', startingBalance)

        const spy = jest.spyOn(FileSystem, 'write').mockReturnValue(Promise.resolve())
        await account.withdraw(amount)

        expect(account.balance).toBe(startingBalance - amount)
        
        expect(spy).toBeCalledWith(account.filePath, startingBalance - amount)
    })

    describe('with not enough money in the account', () => {
        
    })
})


async function createAccount (name, balance) {
    const spy = jest.spyOn(FileSystem, 'read').mockReturnValueOnce(Promise.resolve(balance))
    const account = await Account.find(name)
    spy.mockRestore()
    return account 
}