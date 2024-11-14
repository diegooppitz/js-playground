## Simple Engineering Problems

## Rationale

* A list of engineering problems that are worth solving.
* Helps engineers to understand what they are doing.
* Helps to build confidence.
* Helps to build up coding skills.
* Helps to build up debugging skills.

## How to use

* Can be done with any language.
* You need to understand the code line by line.
* The idea is to always do 4 simple things:
  * Do table test ("In portuguese teste de mesa") where you similate the code execution in text block file.
  * Debug the code to understand.
  * Make sure you understand every single line of the code.
* Each problem should be done several times before moving to the next one.  
* When you deliver the solution you should have something like this on the file system:
  * src/DPK01_impl_1.js
  * src/DPK01_impl_2.js
  * src/DPK01_impl_3.js
  * src/DPK01_impl_4.js
  * src/DPK01_impl_5.js
* But all files might have the same code?
  * sure - if that is the case no problem, what matter is to pratice.
  * however you might find better ways of doing it - if you dont - is also fine.  

## Problems

### DPK01 Revert String
Create a function that can revert a string.
```
revert("Hello") -> "olleH"
```

### DPK02 Revert a List  
Create a function that can revert a list.
```
revert([1,2,3,4,5]) -> [5,4,3,2,1]
```

###  DPK03 Lookup
Create a function that perform a lookup in a map for a given key you hould have id, name. 
```
lookup(1) -> "John"
```
Refactor the code so you can lookup for email as well and ge the name and vice versa.
```
lookup("John") -> "john@john.jhon.com"
lookup("john@john.jhon.com") -> "John"
```

###  DPK04 Simple Pattern Matcher
Given the following countries and languages:
```
Usa -> English
Brazil -> Portuguese
Spain -> Spanish
Italy -> Italian
France -> French
Germany -> German
```
Create a function that can return the language for a given country.
You cannot use a hashmap or dictionary.
```
pattern_matcher("Usa") -> "English"
```
Refactor the code, can you do that without using IF statements?
```
pattern_matcher("Usa") -> "English"
```

###  DPK05 Pointers
Considering the following hash map:
```
power = {
  "John": 100,
  "Paul": 90,
  "George": 80,
  "Ringo": 70
}
```
Create three functions. 
1. Function one should return the power of a given person.
2. Function two should recive 2 names and the with one is the most powerful(should use function one).
3. Function three should recive 2 names and update the leaderboard.

Now the thrid function that will update the leaderboard after all the matches.
i.e Leaderboard should be:
```
leaderboard = {
  "John": 0,
  "Paul": 0,
  "George": 0,
  "Ringo": 0
}
```
Every time a play wins, he scores +10 points, if there is a draw, both players score +5 points.
IF one player loses, he scores -5 points.
```
play("John", "Paul") -> "John"
leaderboard -> {
  "John": 10,
  "Paul": -5,
  "George": 0,
  "Ringo": 0
}
```
lets do another round:
```
play("John", "Ringo") -> "John"
leaderboard -> {
  "John": 20,
  "Paul": -5,
  "George": 0,
  "Ringo": -5
}
```
Now can you refactor your code and do less ifs? Maybe introduce pointers?

###  DPK06 Tokenizer

Create a function that can tokenize a string based on a token.
```
tokenize("Hello,World,How,Are,You", ",") -> ["Hello", "World", "How", "Are", "You"]
tokenize("Hello World How Are You", " ") -> ["Hello", "World", "How", "Are", "You"]
tokenize("Hello-World-How-Are-You", "-") -> ["Hello", "World", "How", "Are", "You"]
```
Can you refactor your code and do that without using any prebuild function like split?

### DPK07 Group By

Create a function that can group a list of numbers by a given number.
```
group_by([1,2,3,4,5,6,7,8,9,10], 3) -> [[1,2,3], [4,5,6], [7,8,9], [10]]
```
Please make sure the same function works with strings as well.
```
group_by(["a","b","c","d","e","f","g","h","i","j"], 3) -> [["a","b","c"], ["d","e","f"], ["g","h","i"], ["j"]]
```
Can you refactor the code and create your own group by function, do not use any prebuild function.

### DPK08 Map

Create a function that can map a function execution to each element of a list, return a new list.
```
map([1,2,3,4,5], (x) => x * 2) -> [2,4,6,8,10]
```
The map function should recive a collection(list or array) and a function that will be apply to each element of the collection.

Now refactor the code and do not use any prebuild function.

### DPK09 Filter

Create a function that can filter a list based on a given condition.
```
filter([1,2,3,4,5,6,7,8,9,10], (x) => x % 2 == 0) -> [2,4,6,8,10]
```
The filter function should recive a collection(list or array) and a function that will be apply to each element of the collection.

Now refactor the code and do not use any prebuild function.
