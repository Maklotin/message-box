var antall = 0;

function ping() {
    if (antall!== 10) {
        antall++
        console.log(antall)
        pong()
    } else {
        console.log("ferdig");
    }


}

function pong() {
    if (antall!== 10) {
        antall++
        console.log(antall)
        ping()
    } else {
        console.log("ferdig");
    }
}

ping()
