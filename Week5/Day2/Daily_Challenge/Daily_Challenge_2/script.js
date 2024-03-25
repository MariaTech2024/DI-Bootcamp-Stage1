//Daily challenge: Stars
//Do this challenge twice: first by using one loop, then by using two nested for loops
//Using one loop
let pattern = ''
for (let i = 0; i < 6; i++){
    pattern += '* ';
    console.log(pattern.trim());
}

//Using two nested loops
for (let i = 1; i <= 6; i++) { 
    let line = '';
    for (let j = 1; j <= i; j++) { 
        line += '* '; 
    }
    console.log(line.trim()); 
}
