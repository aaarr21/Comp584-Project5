let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
  // Convert each argument to a number and add to cumulative sum
  sum += Number(process.argv[i]);
}

// Output the computed sum
console.log(sum);
