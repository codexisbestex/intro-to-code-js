/**********************************
 * #1: helloWorld
 *
 * Define the function helloWorld.
 * helloWorld takes no inputs and returns the phrase "Hello World!"
 *
 * EXAMPLE:
 * helloWorld() => "Hello World!"
 */

// Replace this comment with your code.

/**********************************
 * #2: helloWorldRedux
 *
 * Define the function helloWorldRedux.
 * helloWorldRedux takes in an optional input, name.
 * When a name value is passed, return a personalized greeting using the name.
 * Otherwise, return the phrase "Hello World!"
 *
 * EXAMPLES:
 * helloWorldRedux() => "Hello World!"
 * helloWorldRedux("Bob") => "Hello Bob!"
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

// Replace this comment with your code.

/**********************************
 * #3: uppercaseThis
 *
 * Define the function uppercaseThis.
 * uppercaseThis takes in one input, phrase, a String of any length.
 * uppercaseThis returns phrase fully capitalized.
 *
 * READ:
 * .toUpperCase() | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *
 * EXAMPLES:
 * uppercaseThis("aaaa") => "AAAA"
 * uppercaseThis("BBBB") => "BBBB"
 * uppercaseThis("cCcC") => "CCCC"
 * uppercaseThis("d1D%d3") => "D1D%D3"
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

// Replace this comment with your code.

/**********************************
 * #4: doesItAddUp
 *
 * Define the function doesItAddUp.
 * doesItAddUp accepts three number inputs.
 * doesItAddUp returns true when the first two inputs add up to the third.
 * Otherwise, doesItAddUp returns false.
 *
 * EXAMPLES:
 * doesItAddUp(10, 5, 15) => true
 * doesItAddUp(10, 5, 20) => false
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

// Replace this comment with your code.

/**********************************
 * #5: arrayToString
 *
 * Define the function arrayToString.
 * arrayToString accepts an array containing any number of strings of any length, and a connector, a string made up of any number of random characters.
 * arrayToString returns a combined string made up of each string in the array attached together by the connector.
 *
 * EXAMPLES:
 * arrayToString(["cat", "dog", "moo"], "") => "catdogmoo"
 * arrayToString(["cat", "dog", "moo"], " ") => "cat dog moo"
 * arrayToString(["cat", "dog", "moo"], "+-%") => "cat+-%dog+-%moo"
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

// Replace this comment with your code.

/**********************************
 * #6: smallTogetherNow
 *
 * Define the function smallTogetherNow.
 * smallTogetherNow accepts two strings of any length.
 * smallTogetherNow returns a single string, the combination of both input strings converted to all lowercase.
 *
 * READ:
 * .toLowerCase() | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 *
 * EXAMPLES:
 * smallTogetherNow("HELLO", "WORLD") => "helloworld"
 * smallTogetherNow("apple", pie) => "applepie"
 * smallTogetherNow("mIxEd", "CaPiTaLs") => "mixedcapitals"
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * CHALLENGE HINT:
 * .concat() | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
 */

// Replace this comment with your code.

/**********************************
 * #7: Dog owners and their dogs
 *
 * Define the function dogAndOwnerInfo.
 * dogAndOwnerInfo takes in four inputs:
 * - the dog's name
 * - the dog's age
 * - the dog owner's name
 * - the dog owner's age
 *
 * dogAndOwnerInfo converts the dog's age to human years by multiplying it by 7.
 *
 * EXAMPLES:
 * dogAndOwnerInfo("Turbo", 10, "Richard", 55) =>
 *    "Turbo is older than their owner, Richard, by 15 years."
 * dogAndOwnerInfo("Fido", 1, "Sara", 15) =>
 *    "Sara is older than their dog, Fido, by 8 years."
 * dogAndOwnerInfo("Star", 2, "John", 14) =>
 *    "John and Star are the both 14 years old."
 */

// Replace this comment with your code.

/**********************************
 * #8: doesTheMathWork
 *
 * Define the function doesTheMathWork.
 * doesTheMathWork accept three inputs, each a number.
 * doesTheMathWork returns a phrase based on the following:
 * - first input + second input = third input -> "addition"
 * - first input - second input = third input -> "subtraction"
 * - first input * second input = third input -> "multiplication"
 * - first input / second input = third input -> "division"
 * - none of the above -> "no operation"
 *
 * NOTE:
 * Each set of three inputs resolves to only ONE of the given possible outputs.
 *
 * EXAMPLES:
 * doesTheMathWork(1, 2, 3) => "addition"
 * doesTheMathWork(7, 2, 5) => "subtraction"
 * doesTheMathWork(3, 3, 9) => "multiplication"
 * doesTheMathWork(81, 9, 9) => "division"
 * doesTheMathWork(11, 222, 3) = "no operation"
 */

// Replace this comment with your code.

/**********************************
 * #9: allWordsLength
 *
 * Define the function allWordsLength.
 * allWordsLength accepts an array containing any number of strings, each of any length.
 * allWordsLength returns the total length of all the strings in the array.
 *
 * HINT: If you're familiar with loops, you might be tempted to try using one here. You can solve this with a loop, but it's not the most direct solution. Think about how you can go from your starting data type to the desired output data type. What built-in methods can you use here to help out?
 *
 * READ:
 * Array Methods | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * String Methods | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 * EXAMPLES:
 * allWordsLength(["apple"]) => 5
 * allWordsLength(["old", "textbook"]) => 11  (3 + 8)
 * allWordsLength(["cat", "dog", "moo"]) => 9 (3 + 3 + 3)
 * allWordsLength(["robin", "hood", "men", "in", "tights"]) => 19 (5 + 4 + 3 + 2 + 5)
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

// Replace this comment with your code.

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Hit the Run button in REPL or enter `npm test` in your terminal
 */
import { expect } from "chai";

describe("03 - Methods and Functions", () => {
  describe("#1: helloWorld", () => {
    it("returns the phrase 'Hello World!'", () => {
      expect(helloWorld()).to.equal("Hello World!");
    });
  });

  xdescribe("#2: helloWorldRedux", () => {
    it("returns a personalized greeting if a name is passed in", () => {
      expect(helloWorldRedux("Markus")).to.equal("Hello Markus!");
      expect(helloWorldRedux("Jon")).to.equal("Hello Jon!");
      expect(helloWorldRedux("Sally")).to.equal("Hello Sally!");
    });

    it('returns the phrase "Hello World!" if name is undefined', () => {
      expect(helloWorldRedux()).to.equal("Hello World!");
    });
  });

  xdescribe("#3: uppercaseThis", () => {
    describe("returns the phrase completely capitalized", () => {
      it("when the phrase is all lowercase", () => {
        expect(uppercaseThis("aaaa")).to.equal("AAAA");
      });

      it("when the phrase is already all capitalized", () => {
        expect(uppercaseThis("BBBB")).to.equal("BBBB");
      });

      it("when the phrase has mixed capitals", () => {
        expect(uppercaseThis("cCcC")).to.equal("CCCC");
      });

      it("when the phrase has mixed caps, numbers and symbols", () => {
        expect(uppercaseThis("d1D%d3")).to.equal("D1D%D3");
      });
    });
  });

  xdescribe("#4: doesItAddUp", () => {
    it("returns true -> first two inputs equal the third", () => {
      expect(doesItAddUp(1, 2, 3)).to.be.true;
      expect(doesItAddUp(2, 1, 3)).to.be.true;
      expect(doesItAddUp(4, 4, 8)).to.be.true;
      expect(doesItAddUp(10, 20, 30)).to.be.true;
    });

    it("returns false -> first two inputs don't equal the third", () => {
      expect(doesItAddUp(1, 5, 3)).to.be.false;
      expect(doesItAddUp(22, 64, 33)).to.be.false;
      expect(doesItAddUp(1, 1, 1)).to.be.false;
      expect(doesItAddUp(1, 9, 2)).to.be.false;
    });
  });

  xdescribe("#5: arrayToString", () => {
    const array = ["cat", "dog", "moo"];
    describe("returns the correct string", () => {
      it("when the separator is an empty string ('')", () => {
        expect(arrayToString(array, "")).to.equal("catdogmoo");
      });

      it("when the separator is a single space (' ')", () => {
        expect(arrayToString(array, " ")).to.equal("cat dog moo");
      });

      it("when the separator is any other character sequence", () => {
        expect(arrayToString(array, "+-%")).to.equal("cat+-%dog+-%moo");
      });
    });
  });

  xdescribe("#6: smallTogetherNow", () => {
    describe("returns a unified, lowercase string", () => {
      it("when two uppercase input strings are passed in", () => {
        expect(smallTogetherNow("HELLO", "WORLD")).to.equal("helloworld");
      });

      it("when two lowercase input strings are passed in", () => {
        expect(smallTogetherNow("hello", "world")).to.equal("helloworld");
      });

      it("when input strings of mixed cases are passed in", () => {
        expect(smallTogetherNow("HeLLo", "WorLD")).to.equal("helloworld");
      });
    });
  });

  xdescribe("#7: Dog owners and their dogs", () => {
    describe("returns the correct phrase", () => {
      it("when dog is older than their owner", () => {
        expect(dogAndOwnerInfo("Turbo", 10, "Richard", 55)).to.equal(
          "Turbo is older than their owner, Richard, by 15 years."
        );
      });

      it("when owner is older than their dog", () => {
        expect(dogAndOwnerInfo("Fido", 1, "Sara", 15)).to.equal(
          "Sara is older than their dog, Fido, by 8 years."
        );
      });

      it("owner and dog are the same age", () => {
        expect(dogAndOwnerInfo("Star", 2, "John", 14)).to.equal(
          "John and Star are both 14 years old."
        );
      });
    });
  });

  xdescribe("#8: doesTheMathWork", () => {
    describe("returns the correct operation", () => {
      it("first two inputs add (+) to third input -> 'addition'", () => {
        expect(doesTheMathWork(1, 2, 3)).to.equal("addition");
        expect(doesTheMathWork(5, 2, 7)).to.equal("addition");
        expect(doesTheMathWork(10, 2, 12)).to.equal("addition");
      });

      it("first two inputs subtract (-) to third input -> 'subtraction'", () => {
        expect(doesTheMathWork(3, 2, 1)).to.equal("subtraction");
        expect(doesTheMathWork(7, 2, 5)).to.equal("subtraction");
        expect(doesTheMathWork(12, 2, 10)).to.equal("subtraction");
      });

      it("first two inputs multiply (*) to third input -> 'multiplication'", () => {
        expect(doesTheMathWork(3, 3, 9)).to.equal("multiplication");
        expect(doesTheMathWork(15, 5, 75)).to.equal("multiplication");
        expect(doesTheMathWork(12, 2, 24)).to.equal("multiplication");
      });

      it("first two inputs divide (/) to third input -> 'division'", () => {
        expect(doesTheMathWork(50, 2, 25)).to.equal("division");
        expect(doesTheMathWork(81, 9, 9)).to.equal("division");
        expect(doesTheMathWork(48, 8, 6)).to.equal("division");
      });

      it("first two inputs don't resolve to third input -> 'no operation'", () => {
        expect(doesTheMathWork(1, 99, 72)).to.equal("no operation");
        expect(doesTheMathWork(5, 84, 7)).to.equal("no operation");
        expect(doesTheMathWork(11, 222, 333)).to.equal("no operation");
      });
    });
  });

  xdescribe("#9: allWordsLength", () => {
    const testWords = [
      ["apple"],
      ["old", "textbook"],
      ["cat", "dog", "moo"],
      ["robin", "hood", "men", "in", "tights"],
    ];

    describe("returns the combined length of all strings in the array", () => {
      testWords.forEach((array) => {
        const func = (a) => a.join("").length;
        const result = func(array);
        it(`${JSON.stringify(array)} -> ${result}`, () => {
          expect(allWordsLength(array)).to.equal(result);
        });
      });
    });
  });
});
