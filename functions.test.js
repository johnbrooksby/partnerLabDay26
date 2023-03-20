const {returnTwo, greeting, add } = require("./functions.js")

test('returns the number 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('greeting should return Hello and the name input', () => {
    expect(greeting('James')).toEqual('Hello, James')
})

test('greeting should return Hello and the name input', () => {
    expect(greeting('Jill')).toEqual('Hello, Jill')
})

test('should add num1 and num2', () => {
    expect(add(2, 5)).toEqual(7)
})

test('should add num1 and num2', () => {
    expect(add(5, 9)).toEqual(14)
})

test('should add num1 and num2', () => {
    expect(add(6, 9)).toEqual(15)
})