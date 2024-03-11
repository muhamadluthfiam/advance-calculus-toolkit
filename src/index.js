import { derivative, integral } from 'math-kit';

export const highOrderDerivative = (func, x, order, dx = 0.0001) => {
    if (order === 0) return func(x);
    const slope = derivative(func, x, dx); // Gunakan fungsi derivative dari math-kit
    return highOrderDerivative(slope, x, order - 1, dx);
};

export const definiteIntegral = (func, a, b, dx = 0.0001) => {
    return integral(func, a, b);
};


export const simpsonsRule = (func, a, b, n = 100) => {
    if (n % 2 !== 0) {
        throw new Error('Number of intervals must be even');
    }
    const h = (b - a) / n;
    let sum = func(a) + func(b);
    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        sum += i % 2 === 0 ? 2 * func(x) : 4 * func(x);
    }
    return (h / 3) * sum;
};

export const rombergsMethod = (func, a, b, maxIterations = 100, tolerance = 1e-6) => {
    let R = [];
    R[0] = [(b - a) / 2 * (func(a) + func(b))];
    for (let i = 1; i <= maxIterations; i++) {
        let h = (b - a) / Math.pow(2, i);
        let sum = 0;
        for (let k = 1; k <= Math.pow(2, i - 1); k++) {
            sum += func(a + (2 * k - 1) * h);
        }
        R[i] = [0.5 * R[i - 1][0] + h * sum];
        for (let j = 1; j <= i; j++) {
            R[i][j] = R[i][j - 1] + (R[i][j - 1] - R[i - 1][j - 1]) / (Math.pow(4, j) - 1);
        }
        if (Math.abs(R[i][i] - R[i][i - 1]) < tolerance) {
            return R[i][i];
        }
    }
    throw new Error('Romberg integration did not converge');
};