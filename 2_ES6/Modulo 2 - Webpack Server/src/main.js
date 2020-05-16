// importing each one
// import { sum, sub } from './calculator';
// console.log(sum(1, 3));


// importing all 
// import * as operators from './calculator';
// console.log(operators.sum(1, 3));
// console.log(operators.sub(1, 3));

//importing the default and anothers
// import sum, {sub, mult, div} from './calculator';
// console.log(sub(1, 3));

// 1.1, 1.2, 1.3
import ClassUser, {age as ageUser} from './functions';

ClassUser.info();
console.log(ageUser);