import inquirer from "inquirer";

async function countCharacters() {
    const answers = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter your sentence to count the characters:"
        }
    ]);

    const sentence = answers.sentence;
    const characterCount = sentence.length;

    console.log(`Your sentence has ${characterCount} characters.`);
}

countCharacters();