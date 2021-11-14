var data = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, {"Gender": "Male", "HeightCm": 161,
"WeightKg":85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female",
"HeightCm": 166,"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70},
{"Gender": "Female","HeightCm": 167, "WeightKg": 82},{"Gender": "Female","HeightCm": 180, "WeightKg": 42}];

for(let i=0; i<data.length; i++){
    let meter = data[i].HeightCm / 100;
    // BMI Calculation
    let bmi = data[i].WeightKg/(meter*meter);

    // BMI Category based on given range in Challenge
    let BMICategoryData;
    if(bmi < 18.4){
        BMICategoryData = "Underweight";
    } else if (bmi > 40) {
        BMICategoryData="Overweight Moderately";
    } else {
        BMICategoryData = "Normal weight";
    }
    //push BMI value in existing Array of Object
    data[i]["BMIRange"] = bmi;
    //push BMICategory in existing Array of Object
    data[i]["BMICategory"] = BMICategoryData;
}

console.log(`Data with BMIRange & BMICategory: ${JSON.stringify(data)}`);
// group by BMICategory
var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
var groubedByBMICategory=groupBy(data, 'BMICategory')
console.log(`Group By BMICategory: ${JSON.stringify(groubedByBMICategory)}`);
