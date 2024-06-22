/**
 * START: Follow the instructions below.
 */

// Add types to this function declaration.

function doubleThePopulation(value: number) {
  return value * 2;
}

// Correct or remove the function calls which cause type errors.

doubleThePopulation(5);

doubleThePopulation(6.12); //if this is 6.12 population it doesn't make much sense to have a 0.12 of a person, the code works tho.

doubleThePopulation(8526); //removed the _, did not add a . because it didn't make sense to have a bit more than half a human.

// doubleThePopulation(false); this one will cause an error as it is not compatible with the specified type value, didn't delete the code to avoid modifying the exercise.

// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.

function languagesSpoken(
  country: string,
  language1: string,
  language2?: string
): void {
  if (typeof language2 === "string") {
    console.log(`The languages spoken in ${country} are:`);

    console.log(language1);

    console.log(language2);
  } else { console.log(`The languages spoken in ${country} are:`);

  console.log(language1);}
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");

// ----

export {};
