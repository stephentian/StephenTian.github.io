# Difference of Volumes of Cuboids 长方体的体积差

## Details

In this simple exercise, you will create a program that will take two lists of integers, a and b.
Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b.
You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20.
Therefore, the function should return 8.

## Solutions

#### My Solutions

```
function findDifference(a, b) {
  let resultA = a.reduce((a, b) => a * b)
  let resultB = b.reduce((a, b) => a * b)
  return Math.abs(resultA - resultB)
}
```

#### Best Pratices
```
function find_difference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}
```

#### Clever
```
function find_difference([a,b,c], [d,e,f]) {
  return Math.abs(a*b*c-d*e*f)
}
```
