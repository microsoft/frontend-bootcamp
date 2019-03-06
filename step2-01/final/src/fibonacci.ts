export function fib(n: number) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const FibConst: number = 3;
export default FibConst;
