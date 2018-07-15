function zeros(n) {
    /*This one was really tricky.  Started by creating factorial and then running a loop checking if % 10 === 0 and then /10, but the engine couldn't handle
    numbers that large.  Tried the same thing with looking at the characters after converting it to a string and had the same issue.  Then I tried
    pruning the factorial down as I created it.  Still not sure why that didn't give me the result I wanted.  Finally came up with this.*/

    factor = 5; //Will be 5, 25, 125, etc
    zeroCount = 0;

    while(factor < n){
        myNum = n/factor
        if(myNum % 1 === 0){
            zeroCount += myNum; //if it goes in evenly
        } else if (myNum > 1){
            zeroCount += Math.floor(myNum); //if it doesn't go in evenly
        }
        factor *= 5;
    }

    return zeroCount;
}
