function mostFrequentSubstring(words, k) {
    const countMap = {};
    for (const word of words) {
        for (let i = 0; i + k <= word.length; i++) {

            const key = word.slice(i, i + k);
            countMap[key] = countMap[key] + 1 || 1;
        }
    }

    let maxString = '';
    let maxFreq = 0;
    for (const pair of Object.entries(countMap)) {

        const [key, cnt] = pair;
        if (cnt > maxFreq || (cnt === maxFreq && key < maxString)) {
            maxString = key;
            maxFreq = cnt;
        }

    }
    return maxString;
}


----------------------CreateLowerCaseSentence-----------------------

function createSentence() {

    return {
        words: [],
        add(str) {
            str.split(' ').forEach(word => {
                const trimmedWord = word.trim()
                if (trimmedWord !== '') {
                    this.words.push(trimmedWord)
                }
            });
        },
        get() {
            return this.words.join(' ') + '.';
        }
    }
}

function createLowerCaseSentence() {
    const sentence = createSentence();

    return {
        add(str) {
            sentence.add(str.toLowerCase())
        },
        //change this " get: sentence.get" to whats below
        get: () => sentence.get()
    }
}



-------------------booklist queation-----------------------------
function initializeLibrary(bookTitles) {
    if (!Array.isArray(bookTitles) || bookTitles.length < 1) {
        throw new Error("Invalid input: bookTitles should be an array of at least one")
    }
    let title = ''

}
answer: 
function initializeLibrary(bookTitles) { //bookTitles is an array of strings
  if (!Array.isArray(bookTitles) || bookTitles.length < 1) {
    throw new Error('Invalid input: bookTitles should be an array of at least one element');
  }
let obj = {} 
for (let i of bookTitles) {
    if (!obj[i]) {
        obj[i] = 1
    }
}
console.log(obj)

return requestBook(title)

    for (let i of obj) {
        if (i == title)  {
            obj[i] == 0
        }
    }
    console.log(obj)

      

      // return integer with titles that haven't been requested yet
      
  
}

module.exports = { initializeLibrary };











-------------------------objectives---------------------------------------
const x = {}
x['key'] = 'val';

x.val = {
    'first': 100,
    'second': 200
}
console.log(x.val['first'] + x[x.key].second);
answer :300

////////////////////////

function decreaseByOne(arr) {
    let newArr = arr;
    newArr[0]--;
    newArr[1]--;
    return newArr;
}


function sumofFour(arr1, arr2) {
    return arr1[0] + arr1[1] + arr2[0] + arr2[1];
}
const arr1 = [1, 1];
const arr2 = decreaseByOne(arr1);


console.log(sumofFour(arr1, arr2));


answer(multiple):(in decreaseByOne, change let newArr=arr; to const newArr=[...arr],  in decreaseByOne change let newArr=arr; to const newArr= JSON.parse(JSON.stringify(arr));


////////////////////////////



const object = {
    number: 5,
    name: 'object'
}

wrong answer1:
function increaseNumber(obj) {
    const tmp = {...obj };
    tmp.number++;
    return tmp
}

function doTwice(arg, doSomething) {
    doSomething(arg);
    return doSomething(arg)
}
object = doTwice(object, increaseNumber);


wrong answer2:
function increaseNumber(obj) {
    obj.number++;
}

function doTwice(arg, doSomething) {
    doSomething(arg);
    doSomething(arg)
}
console.log(doTwice(object, increaseNumber));


////////////////////////////
function printAndNormalize(str, normalize) {
    console.log(str);
    return normalize(str);
}

const name = 'CodeSignal';
const normalizedNamel = printAndNormalize(name, str => str.toLowerCase());
const normalizedName2 = printAndNormalize(normalizedNamel, str => {
    str = str.toUpperCase();
});
console.log(normalizedName2);

answer:
codesignal
codesignal
undefined

/////////////////////////////////
number1 = 1;
console.log(number1 + number2);
let number1;
const number2 = 2
answer:none of the above

////////////////////////////////
var number = 5;
const object = {
    number: 10,
    func: function(number) {
        if (number === 5) {
            number++
        } else {
            let number = 0
        }
        return number
    }
}
console.log(object.func(number));
console.log(object.func(object.number));
console.log(number);
answer:6 10 5

//////////////////////////////////////
const generateString = (function() {
    var callNumber = 0;
    return function() {
        if (callNumber % 2 === 0) {
            callNumber++
            return 'even'
        } else {
            callNumber++;
            return 'odd'
        }
    }
})();

console.log(generateString());

console.log(generateString());
answer: add generateString(); rigth above the first console.log(generateString())

/////////////////////////////////////
function prefix(size) {
    if (Number.isInteger(size) && size > 0) {
        return str => str.substring(0, size);
    } else {
        return prefix;
    }

}

answer(multiple):

console.log(prefix(64)('CodeSignal'));
console.log(prefix()(4)('CodeSignal'));

console.log(prefix(1024)('CodeSignal'));
console.log(prefix()(-2)(4)('codeSignal'));



/////////////////////////
function integerConcatenation(a, b) {
    if (!Number.isInteger(a)) {
        throw 'The first variable is not an integer';
    }
    if (Number.isInteger(b)) {
        throw 'The second variable is not an integer';
    }
    if (a === 0) {
        throw 'The first variable is zero';
    }
    return a.toString() + b.tostring();
}

let answer;
try {
    answer = integerConcatenation('0', 4);
} catch (err) {
    answer = err;
} finally {
    console.log(answer);
}


try {
    console.log(integerConcatenation(1, 11));
} catch (err) {
    console.log(err);
}

answer:The first variable is not an integer,111


/////////////////////////////////

function getPromise1() {
    return Promise.reject('error');
}

function getPromise2() {
    return getPromise1()
        .then(val => console.log(val))
        .catch(err => console.log(err))
}

function getPromise3() {
    return getPromise2()
        .then(val => console.log(`${val} accepted`))
        .catch(err => console.log(`${err} rejected`))
}

getPromise3()

answer: function getPromise2() {
    return getPromise1()
        .then(val => console.log(val))
        .catch(err => {
            console.log(err)
            throw err
        })
}

//////////////////////////
class IntergerArray {
    constructor(...values) {
        values.forEach(value => {
            if (!Number.isInteger(value)) {
                throw new Error(`${value} is not an integer!`)
            }
        });
        this.array = values;
    }
}

IntergerArray.prototype.sum = function() {
    return this.array.reduce((a, b) => a + b, 0)
}

IntergerArray.prototype.even = function() {
    return new IntergerArray(
        this.array.filter(number => number % 2 === 0)
    )
}

const arr = new IntergerArray(1, 1, 2, 1, 2)
console.log(arr.even().sum());
answer:change this.array.filter(number => number % 2 === 0) to ...this.array.filter(number => number % 2 === 0)



/////////////////////////////
class Calculator {
    constructor(startingValue = 0) {
        this.value = startingValue;
    }
    result() {
        return this.value;
    }
}

Calculator.prototype.add = function(number) {
    this.value += number;
    console.log(this.result());
    return this;
};

Calculator.prototype.multiply = function(number) {
    this.value *= number;
    console.log(this.result());
    return this;
};

Calculator.prototype.do = function(operation, number) {
    if (operation === "+") {
        this.add(number);
        return this;
    } else if (operation === "*") {
        this.multiply(number);
        return this;
    }
};
const calc = new Calculator(0);
calc.do("+", 2).add(2).do("*", 2).multiply(2);

answer(multiple):Add return this; rigth below both this.add(number); and this.multiply(number)
change const calc = new Calculator(); to const new Calculator(0);


/////////////////////
const object = {
    name: "object",
    subObject: {
        name: "subObject",
        printName() {
            console.log(this.name);
        }
    },
    printName() {
        this.subObject.printName();
    }
};

const printName = object.subObject.printName.bind(object);
printName();
answer:make no changes




////////////////////////
function sum(...values) {
    return values.reduce((x, y) => x + y, this.number);
}

const object = {
    number: 10,
    mul: function(...values) {
        let result = this.number;
        values.forEach((value) => (result *= value));
        return result;
    }
};

const objectMul = object.mul;
/* console.log(objectMul) */

answer(multiple):console.log(sum.apply(object, [90, 0, 0]));

console.log(object.mul.call(object, 2, 5));


//////////////////////

const basePromise = new Promise(function(resolve, reject) {
    const subPromise1 = new Promise(function(resolve) {
        setTimeout(() => resolve("1 resolved"), 100);
    });
    const subPromise2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("2 resolved"), 80);
        setTimeout(() => reject("2 rejected"), 50);
    });
    resolve(Promise.race([subPromise1, subPromise2]));
    setTimeout(() => reject("base rejected"), 10);
});
basePromise.then((x) => console.log(x)).catch((x) => console.log(x));

answer:2 rejected
