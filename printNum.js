const rows = 5;
const columns = 5;

for (let i = 1; i <= rows; i++) {
  let rowOutput = "";
  for (let j = 1; j <= columns; j++) {
    const result = i * j;
    rowOutput += `${result} `;
  }
  console.log(rowOutput);
}