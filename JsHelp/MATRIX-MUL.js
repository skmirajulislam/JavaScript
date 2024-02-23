let arr1 = [[5, 50, 1], [20, 40, 1], [10, 70, 1]];
let arr2 = [[0, -1, 0], [-1, 0, 0], [10, 10, 1]];
let arr3 = [];

console.log('Matrix one :\n');
for (let i = 0; i < arr1.length; i++) {
    let row = "";
    for (let j = 0; j < arr1[i].length; j++) {
        row += arr1[i][j] + " ";
    }
    console.log(row.trim());
}

console.log("\nMatrix two :\n");
for (let i = 0; i < arr2.length; i++) {
    let row = "";
    for (let j = 0; j < arr2[i].length; j++) {
        row += arr2[i][j] + " ";
    }
    console.log(row.trim());
}

for (let i = 0; i < arr1.length; i++) {
    arr3[i] = [];
    for (let j = 0; j < arr2[0].length; j++) {
        arr3[i][j] = 0;
        for (let k = 0; k < arr2.length; k++) {
            arr3[i][j] += arr1[i][k] * arr2[k][j];
        }
    }
}

console.log("\nMatrix Multiplication :\n");
for (let i = 0; i < arr3.length; i++) {
    let row = "";
    for (let j = 0; j < arr3[i].length; j++) {
        row += arr3[i][j] + " ";
    }
    console.log(row.trim());
}
