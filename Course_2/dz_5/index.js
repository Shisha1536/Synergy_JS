let a = 55

if (a > 10 && a != 55) {
    console.log("Check 1");
} else if (a > 10 && a % 2 != 0 ) {
    console.log("Check 2");
} else {
    console.log("Check 3");
}

switch (a) {
    case 3:
      console.log("Check 1");
      break;
    case 10:
      console.log("Check 2");
      break;
    case 20:
      console.log("Check 3");
      break;
    case 55:
      console.log("Check 4");
      break;
    default:
      console.log("Verification failed");
}