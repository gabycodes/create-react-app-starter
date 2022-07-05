const printMultiplicationTable = () => {
  const numberOfColAndRows = 10;
  const chartHolder = [];

  // row
  for (let i = 0; i < numberOfColAndRows + 1; i++) {
    const columnHolder = [];

    // column
    for (let i2 = 0; i2 < numberOfColAndRows + 1; i2++) {
      if (i === 0) {
        columnHolder.push(`${i2 === 0 ? "X" : i2}`);
      } else {
        columnHolder.push(`${i * i2}`);
      }
    }

    chartHolder.push(columnHolder);
  }
};
