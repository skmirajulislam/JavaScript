// calculation.js 
// its an module we are exporting the data from to source impoert file which is script.js
// export keyword is used

export function calculateArea(radius) {
    return Math.PI * radius * radius;
}
  

// export { name, draw, reportArea, reportPerimeter };
// its also valid for multiple exporting
// one file is a one module