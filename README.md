# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nou-ali/lotide`

**Require it:**

`const _ = require('@nou-ali/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`function(assertArraysEqual)`: given two arrays, checks if they are equal 
*`function(assertEqual)`: checks if output equals expected
*`function(countLetters)`: count the number of letters in a string
*`function(countOnly)`: count only the values that are specified 
*`function(eqArrays)`: check if two arrays are the same
*`function(findKey)`: when given an object and condition, finds the key that showcases the expectation
*`function(findKeyByValue)`: finds the key corresponding to the value
*`function(head)`: given an array, retrieves first element from array
*`function(map)`: When given an array and a condition, will map a given set of instructions to each element in an array 
*`function(middle)`: returns the middle items of an array
*`function(tail)`: given an array, returns every element except for the first item of the array
