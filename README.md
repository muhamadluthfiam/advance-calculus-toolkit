# Advanced Calculus Toolkit

This module provides a collection of functions for performing various calculus operations such as derivatives, integrals, and numerical methods for improving accuracy.

## Functions

### `highOrderDerivative(func, x, order, dx = 0.0001)`

Calculates the high-order derivative of a given function `func` at point `x` up to the specified `order`. Uses a recursive approach by iteratively applying the derivative function from the math-kit module.

- `func`: Function - The function for which the derivative is calculated.
- `x`: Number - The point at which the derivative is evaluated.
- `order`: Number - The order of the derivative to be calculated.
- `dx`: Number - The small increment for calculating the derivative. Default value is 0.0001.

### `definiteIntegral(func, a, b, dx = 0.0001)`

Computes the definite integral of a function `func` over the interval `[a, b]`. Utilizes the integral function from the math-kit module.

- `func`: Function - The function to be integrated.
- `a`: Number - The lower bound of the interval.
- `b`: Number - The upper bound of the interval.
- `dx`: Number - The small increment for calculating the integral. Default value is 0.0001.

### `simpsonsRule(func, a, b, n = 100)`

Approximates the definite integral of a function `func` over the interval `[a, b]` using Simpson's rule, a numerical integration method.

- `func`: Function - The function to be integrated.
- `a`: Number - The lower bound of the interval.
- `b`: Number - The upper bound of the interval.
- `n`: Number - The number of subintervals. Must be even. Default value is 100.

### `rombergsMethod(func, a, b, maxIterations = 100, tolerance = 1e-6)`

Computes the definite integral of a function `func` over the interval `[a, b]` using Romberg integration, a method for improving the accuracy of numerical integration.

- `func`: Function - The function to be integrated.
- `a`: Number - The lower bound of the interval.
- `b`: Number - The upper bound of the interval.
- `maxIterations`: Number - The maximum number of iterations for Romberg integration. Default value is 100.
- `tolerance`: Number - The tolerance level for convergence. Default value is 1e-6.

## Usage

Import the module:

javascript
import { highOrderDerivative, definiteIntegral, simpsonsRule, rombergsMethod } from 'advanced-calculus-toolkit';


### Lisensi
[MIT](https://github.com/muhamadluthfiam/to-rupiah/blob/main/LICENSE.txt)