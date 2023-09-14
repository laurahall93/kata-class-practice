class UniqueLottoNumGenerator {
    minNumber: number;
    maxNumber: number;
    uniqueNumArr: number[] = [];

    constructor(minNumber: number, maxNumber: number) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        this.uniqueNumArr = [];
    }

    randomNumberGenerator(): number {
        const randomNum =
            Math.floor(Math.random() * this.maxNumber) + this.minNumber;
        return randomNum;
    }

    uniqueNumbers(): number[] {
        return this.uniqueNumArr;
    }
}

const lotteryNumbers = new UniqueLottoNumGenerator(1, 71);

console.log(lotteryNumbers.randomNumberGenerator());
console.log(lotteryNumbers.uniqueNumbers());

/*for (numArr = 0; numArr.length = 5; numArr++)
generate the first random number
push next number into empty array
   if next number exists
    uniquenumber()
push number into array
else push
*/
