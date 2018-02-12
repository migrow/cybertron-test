import test from 'tape'
import { map, filter, reduce, compose } from 'nanofp'
import checkPrimes from './lib/checkPrimes'

export default function() {
  /* Level 1 */
  const ex1 = 'use map to cube (n³) each value and return'
  const exercise1 = _ => {
    const numbers = [3, 6, 9, 12, 15, 18]
    return map(x => x * x * x, numbers) // return answer here
  }

  const ex2 = 'use filter to only return numbers divisible by 6'
  const exercise2 = _ => {
    const numbers = [28, 42, 55, 66, 72, 84, 93]
    return filter(x => x % 6 === 0, numbers) // return answer here
  }

  const ex3 = 'use reduce to sum the numbers'
  const exercise3 = _ => {
    const numbers = [10, 20, 30, 40, 50, 60]
    return reduce((acc, number) => number + acc, 0, numbers) // return answer here
  }

  const ex4 = `use compose to run the following three commands

1. map over the numbers and triple each number
2. use filter and keep the even numbers
3. use reduce to add the resulting numbers
`
  const exercise4 = _ => {
    const numbers = [1, 3, 6, 10, 13, 16]
    return compose(
      reduce((acc, x) => x + acc, 0),
      filter(x => x % 2 === 0),
      map(x => x * 3)
    )(numbers) // return answer here
  }

  const ex5 = 'Use map to find the square root of each number'
  const exercise5 = _ => {
    const numbers = [9, 16, 25, 36, 49, 64, 81]
    return map(x => Math.sqrt(x), numbers) // return answer here
  }

  const ex6 = 'use filter to return numbers between 10 and 20'
  const exercise6 = _ => {
    const numbers = [1, 5, 6, 3, 10, 12, 18, 21, 28, 34, 39, 45]
    return filter(x => x > 10 && x < 20, numbers) // return answer here
  }

  const ex7 = `use compose and the checkPrimes function to run the following three commands:

  1. Use map to subtract 1 from each number
  2. Use filter to return all prime numbers.
  3. Use reduce to count the number of prime numbers in the array.

  ** If you have time at the end, try and figure out how to take the
     checkPrimes formula and write it functionally into your compose **
  `
  const wireTap = x => console.log(x)
  const exercise7 = _ => {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return compose(
      reduce((acc, x) => acc + 1, 0),
      filter(x => checkPrimes(x)),
      map(x => x - 1)
    )(numbers) // return answer here
  }

  /* tests to validate exercises go here */
  test('Level 1', assert => {
    assert.plan(7)
    assert.same(exercise1(), [27, 216, 729, 1728, 3375, 5832], ex1)
    assert.same(exercise2(), [42, 66, 72, 84], ex2)
    assert.same(exercise3(), 210, ex3)
    assert.same(exercise4(), 96, ex4)
    assert.same(exercise5(), [3, 4, 5, 6, 7, 8, 9], ex5)
    assert.same(exercise6(), [12, 18], ex6)
    assert.same(exercise7(), 5, ex7)
  })
}
