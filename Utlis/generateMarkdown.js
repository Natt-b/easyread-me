//license the application is covered under

//function licensebadge(license){if license!==
  

//generateMarkdown for read me
function generateMarkdown(data) {
    return `# ${data.Title}
    
  ### by ${data.Username}

## Table of Contents
- [Title](##Title)
- [Description](#Description)
- [Usage](#Usage)
- [Installation](#Installation)
- [Test](#Test)
- [License](#License)
- [Platform](#Platform)

## Username
${data.Username}

## Tile
${data.Title}

## Description
${data.Description}

## Usage
${data.Usage}

## Installation 
${data.Installation}

## Test
${data.Test}

## License
${data.License}

## Platform
- Github Username: ${data.Platform}
- Github Link: ${data.Platform}(https://github.com/${data.Platform}/)
   


`;
  }

  module.exports = generateMarkdown;
