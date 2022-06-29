


describe('elons math',()=>{
    const elon = require('../src/index').elon

    it('elon should say 4',()=>{
        expect(elon(2,2)).toBe(4)
    })
    it('shoud not be 4',()=>{
        expect(elon(1,4)).not.toBe(4)
    })
    it('shoud not axept caracters',()=>{
        expect(elon('2',2)).not.toBe(4)
    })
    it('shoud be greater than 3.5',()=>{
        expect(elon(2,2)).toBeGreaterThanOrEqual(3.5)
    })
    it('shoud be less than 4.5',()=>{
        expect(elon(2,2)).toBeLessThanOrEqual(4.5)
    })
})

describe('elon say something',()=>{
    const elonWriter = require('../src/index').elonWriter

    it('elon should say something',()=>{
        expect(elonWriter('hello')).toBe('Elon says hello!')
    })
})