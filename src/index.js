import './index.css'                 //Css file impoted in js file

/*eslint-disable no-console */                                        //Jsut by ptting this comment we're able to disable this linting thing for this file atleast.
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger;                                                      //Helps with sourcemap and debugging  //eslint-disable-line no-console (another way to deactivate linting on a line)
console.log(`I would pay ${courseValue} for this awesome course`);
