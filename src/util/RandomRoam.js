function RandomRoam(num, original, roam, amount){
    //get random number between `num-amount`, and `num+amount`
    let roamingNum = Math.floor(Math.random() * (num + amount - (num - amount) + 1)) + (num - amount);

    //if the roamingNum is bigger than `original+roam` or smaller than `original-roam`, then bounce back by removing roam*2 from the num

    if(roamingNum > original + roam){
        roamingNum -= (amount * 2);
    }
    else if (roamingNum < original - roam){
        roamingNum += (amount * 2);
    }

    return roamingNum;
}

module.exports = RandomRoam;