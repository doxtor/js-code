const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 10;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 9;
      break;            
  }
}

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');

// const getActualSleepHours = () => 8 + 8 + 9 + 7 + 9 + 8 + 8;

const getIdealSleepHours = idealHours => {
  // let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
// console.log(idealSleepHours)
  if (actualSleepHours === idealSleepHours) {
    console.log("Great, you have perfect amount of sleep")
  } else if (actualSleepHours > idealSleepHours) {
    console.log("you have more " + (actualSleepHours - idealSleepHours) + " hours sleep than you need")
  } else {
    console.log("You need some rest now")
  }
}
calculateSleepDebt();
