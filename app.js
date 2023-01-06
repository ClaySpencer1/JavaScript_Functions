console.log("Hello World!\n==========\n");

// Exercise 1 Section
//console.log("EXERCISE 1:\n==========\n");
//function printOdds(count){
 //   for(let i = 1; i <= count; i++)
 //       if (i % 2 != 0) {
 //           console.log(i);
 //       }
//}
//printOdds(10);
//printOdds(150);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
  //  function checkAge(userName, age){
  //      let aboveSixteen = `Congrats ${userName}, you can drive!`;
   //     let belowSixteen =`Sorry ${userName}, but you need to wait until you're 16.`;
   //     if (age < 16) {
   //         console.log(belowSixteen);
  //      } else {
 //           console.log(aboveSixteen);
 //       }
 //   }
//checkAge("Clay", 22);
//checkAge("Jaque", 14);

//EXERCISE 3

//function checkQuadrant(x, y){
  // if (x > 0 && y > 0){
 //       return "Quadrant 1";
   // }

  //  else if (x < 0 && y > 0 ){
  //      return "Quadrant 2";
  //  }
//
   // else if (x < 0 && y < 0){
  //      return "Quadrant 3";
   // }

  //  else if (x > 0 && y < 0){
  //      return "Quadrant 4";
  //  }
  //  else if (x == 0 && y != 0){
  //      return "Y Axis";
  //  }

 //   else if (x != 0 && y == 0){
 //       return "X Axis";
 //   }
 //   else {
 //      return "Origin";
 //   }
//}
//console.log(checkQuadrant(8, -4));

// EXERCISE 4
//test if valid here first
//function validTriangle(side1, side2, side3){
 //   return side1 + side2 > side3 ||  side1 + side3 > side2 || side2 + side3 > side1

//}
 //   input a valid triangle below\\
 //function triangleType(side1, side2, side3){
 //   let isValid = validTriangle(side1, side2, side3);
  //  if (isValid) {
  //      if (side1 == side2 && side2 == side3){
   //       return "equilateral";
 //       }
 //      else if (side1 == side2 || side2 == side3 || side1 == side3){
 //           return "isosceles";
//        }
 //       else {
 //          return "scalene"
 //       }
 //   }
//}

//console.log(triangleType(1, 1, 1));

//EXERCISE 5(bonus)\\

function dataUsage(planLimit, day, usage){
    const dayPeriod = 30;
    const expectedAvgUse = (planLimit / day);
    const averageUsageSoFar = usage / day;
    const projectedTotalUsage = averageUsageSoFar * dayPeriod;
    const totalUsageDifference = projectedTotalUsage - planLimit;
    const remainingData = planLimit - usage;
    const daysRemaining = dayPeriod - day;
    const gbPerDay = remainingData /daysRemaining;

    if (remainingData <= 0){
        console.log("You are completely out of data.");
    }

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Expected average daily use: ${expectedAvgUse} GB/day`);

    if (projectedTotalUsage > planLimit){
        console.log(`You are exceeding your daily average use ${averageUsageSoFar} gb/day. By continuing this high usage,
        you'll exceed your data plan by ${totalUsageDifference} GB/Day. To stay below data plan, use no more than ${gbPerDay}.`)
    }
    else if (projectedTotalUsage < planLimit){
        console.log(`You are below you daily average use ${averageUsageSoFar}
        .To get the most out of your data plan, start using ${gbPerDay}.`)
    }
}


dataUsage(100, 15, 30);