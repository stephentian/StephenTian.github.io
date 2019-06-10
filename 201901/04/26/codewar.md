# Build Tower

### Details

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

for example, a tower of 3 floors looks like below
```
[
  '  *  ', 
  ' *** ', 
  '*****'
]
```

and a tower of 6 floors looks like below
```
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
```


### Solutions

* Clever

```
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k -1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  })
}
```

* Best Practices

```
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
```
