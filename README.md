# Belly Button Biodiversity Dashboard
This project creates an interactive web dashboard for exploring the belly button biodiversity dataset. The dashboard includes a dropdown menu to select an individual, and it displays various plots and metadata for the selected individual. The project is built using JavaScript, D3.js, and Plotly.js.

## Features

### Dropdown Menu

The dropdown menu allows users to select an individual from the dataset.
The menu is dynamically populated with options based on the available individuals in the dataset.

### Bar Chart
The bar chart displays the top 10 operational taxonomic units (OTUs) for the selected individual.
Each bar represents an OTU, with the height of the bar corresponding to the sample value of the OTU.
The bars are sorted in descending order of sample values.

### Bubble Chart

The bubble chart shows all OTUs present in the selected individual's sample.
Each bubble represents an OTU, with the size of the bubble corresponding to the sample value of the OTU.
The color of the bubble represents the OTU ID, following a color scale.

### Metadata Display

Metadata for the selected individual is displayed below the charts.
The metadata includes key-value pairs such as age, gender, and ethnicity of the individual.

### Gauge Chart
The gauge chart displays the belly button washing frequency (scrubs per week) for the selected individual.
The gauge chart provides a visual indicator of the washing frequency, with different colored segments indicating different frequency ranges.


## Getting Started

To run the project, follow these steps:

Clone the repository or download the project files.
Open the index.html file in a web browser.

## File Structure:

Main Branch: Contains all project files.
pics: Contains pictures used in the dashboard.
index.html: Main HTML file for the dashboard.
samples.json: JSON file containing the dataset.
static: Folder containing:

-  app.js: JavaScript file containing the code for the interactive dashboard.
- .gitkeep: Empty file to ensure the static folder is tracked by Git.

## Data Source
The data for this project is loaded from a JSON file hosted from json file called samples (find it in main)

## Credits

This project is part of the University Of Toronto Data Analytics Boot Camp assignment and uses the belly button biodiversity dataset provided by the boot camp curriculum.
Find it here: https://robdunnlab.com/projects/belly-button-biodiversity/

## Dependencies

D3.js
Plotly.js

## Reference
Project is done for University of Toronto Data Analytics Bootcamp
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.
