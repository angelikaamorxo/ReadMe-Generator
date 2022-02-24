// Linking packages
const inquirer = require("inquirer");
const fs = require("fs");

// User input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information for your project: ',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Please select which license you are using for your project: ',
        choices: ["GNU 2", "GNU 3", "MIT", "Apache Licence 2"],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter project contributors: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter clear test instructions for your project: ',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address: ',
    },
])
.then((data) => {
    if (data.license === "GNU 2") {
        var badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    }
    else if  (data.license === "GNU 3") {
        var badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    else if (data.license === "MIT") {
        var badge =  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else {
        var badge =  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    const readMe = `
# ${data.title}

${badge}

## Description 

${data.description}

## Table of contents
1. [Installation](#installation)
2. [Usage Information](#usage)
3. [License](#license)
4. [Contribution](#contribution)
5. [Testing](#testing)
6. [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

license used: ${data.license} ${badge}

## Contribution

${data.contribution}

## Testing

${data.tests}

## Questions

If you have any questions or concerns about my project, please reach out to me on my [GitHub Account](https://github.com/${data.GitHub}) or on my [Email](mailto:${data.Email}).
`;

    fs.writeFile('READMEgen.md', readMe, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('README file created!');
    })
})