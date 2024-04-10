import chalk from 'chalk';

function displayColorfulMessage() {
    console.log(chalk.blue.bgRed.bold('This is a colorful message!'));
}

export default displayColorfulMessage;