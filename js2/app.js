let hour = Number(process.argv[3]);
let min = Number(process.argv[4]);
let sec = Number(process.argv[5]);
sec++
if (sec === 60) {
    min++
    sec = 0;
    if (min === 60) {
        hour++
        min = 0;
        if (hour == 24) {
            hour = 0
        }
    }
}


console.log(`It is: ${hour}h:${min}min:${sec}s`);