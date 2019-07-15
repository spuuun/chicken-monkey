function chickenMonkey(a, b) {
    for (let i = a; i <= b; i++) {
        if (((i % 5) === 0) && ((i % 7) === 0)) {
            console.log("cHKNmNKY")
        }
        else if ((i % 5) === 0) {
            console.log("CHKN")
        }
        else if ((i % 7) === 0) {
            console.log("MNKY")
        }
        else {
            console.log(i)
        }
    }
}

chickenMonkey(1, 500)