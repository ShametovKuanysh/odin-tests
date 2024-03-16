import { Calculator, analyzeArray, caesarCipher, capitalize, reverseString } from "."

test('Capitalize: abc => Abc', () => {
    expect(capitalize('abc')).toBe("Abc")
})

test('Capitalize: Abc => Abc', () => {
    expect(capitalize('Abc')).toBe("Abc")
})

test('Capitalize: kuka => Kuka', () => {
    expect(capitalize('kuka')).toBe("Kuka")
})

test("ReverseString: abc => cba", ()=>{
    expect(reverseString('abc')).toBe('cba')
})

test("ReverseString: AbC => CbA", ()=>{
    expect(reverseString('AbC')).toBe('CbA')
})

test("ReverseString: Hello World => dlroW olleH", ()=>{
    expect(reverseString('Hello World')).toBe('dlroW olleH')
})

test("Calculator: add: 2 + 3 = 5", () =>{
    const calc = new Calculator()
    expect(calc.add(2,3)).toBe(5)
})

test("Calculator: subtract: 2 - 3 = -1", () =>{
    const calc = new Calculator()
    expect(calc.subtract(2,3)).toBe(-1)
})

test("Calculator: divide: 6 / 3 = 2", () =>{
    const calc = new Calculator()
    expect(calc.divide(6,3)).toBe(2)
})

test("Calculator: multiply: 2 * 3 = 6", () =>{
    const calc = new Calculator()
    expect(calc.multiply(2,3)).toBe(6)
})

test("CaesarCipher: the caesar shift => VJG ECGUCT UJKHV", ()=>{
    expect(caesarCipher("the caesar shift", 2)).toBe("VJG ECGUCT UJKHV")
})

test("Analyze Array. Test 1", ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})
