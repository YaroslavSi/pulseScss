// потрібно називати числа поспіль, дотримуючись лише трьох правил: Якщо число ділиться на 3, замість нього треба сказати «Fizz». Якщо число ділиться на 5, замість нього треба сказати Buzz. А якщо число ділиться одночасно на 3 та 5, то треба замість нього сказати «FizzBuzz».

//------------------First
function fizzBuzz(start, end, rules) {
    for (let i = start; i <= end; i++) {
      let output = '';
      for (const rule of rules) {
        if (i % rule.number === 0) {
          output += rule.word;
        }
      }
      console.log(output || i);
    }
  }
  
  const rules = [
    { number: 3, word: "Fizz" },
    { number: 5, word: "Buzz" },
    { number: 3 * 5, word: "FizzBuzz" },
  ];
  
  fizzBuzz(1, 100, rules);



//-------------------------Second
function fizzBuzz (ruleNumberOne, ruleNumberTwo, nameGameFirstPart, nameGameSecondPart) {
    for (let i = 1; i < 100; i++) {
        if (i % ruleNumberOne == 0 && i % ruleNumberTwo == 0) {
            console.log (nameGameFirstPart + nameGameSecondPart);
        } else if (i % ruleNumberOne == 0) {
            console.log (nameGameFirstPart);
        } else if (i % ruleNumberTwo == 0) {
            console.log (nameGameSecondPart);
        } else {
            console.log(i);
        }
    }

}
Game(3, 5, 'fizz', 'Game');
  