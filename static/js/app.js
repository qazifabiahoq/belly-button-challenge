// URL of the samples.json file
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Function to update all plots based on the selected option

function updatePlots(data, selectedValue) {
  updateChart(data, selectedValue);
  updateBubbleChart(data, selectedValue);
  displayMetadata(data, selectedValue);
  updateGauge(data, selectedValue); 
}






// Fetch the data from samples.json
d3.json(url).then(function(data) {
    console.log("Data loaded:", data);

    // Get the dropdown select element
    const select = d3.select("#selDataset");

    // Populate the dropdown with options
    select.selectAll("option")
        .data(data.names)
        .enter()
        .append("option")
        .attr("value", d => d)
        .text(d => d);

    // Initial rendering of the charts
    updatePlots(data, data.names[0]);
});

// Event listener for dropdown change
d3.select("#selDataset").on("change", function() {
    const selectedValue = d3.select(this).property("value");
    console.log("Dropdown changed to:", selectedValue);
    d3.json(url).then(function(data) {
        updatePlots(data, selectedValue);
    });
});

// Function to display metadata
function displayMetadata(data, selectedValue) {
    const metadata = data.metadata.find(item => item.id.toString() === selectedValue);

    // Select the sample-metadata div
    const sampleMetadata = d3.select("#sample-metadata");

    // Clear any existing metadata
    sampleMetadata.html("");

    // Loop through the metadata and display each key-value pair
    Object.entries(metadata).forEach(([key, value]) => {
        sampleMetadata.append("p").text(`${key}: ${value}`);
    });
}

// Function to update the chart based on the selected option
function updateChart(data, selectedValue) {
    console.log("Updating chart for:", selectedValue);
    const sample = data.samples.find(sample => sample.id === selectedValue);

    const top10Data = sample.sample_values.slice(0, 10).map((value, index) => ({
        sample_value: value,
        otu_id: `OTU ${sample.otu_ids[index]}`,
        otu_label: sample.otu_labels[index]
    }));

    // Sort the data by sample values in descending order
    top10Data.sort((a, b) => a.sample_value - b.sample_value);

    const trace = {
        x: top10Data.map(d => d.sample_value),
        y: top10Data.map(d => d.otu_id),
        text: top10Data.map(d => d.otu_label),
        type: "bar",
        orientation: "h"
    };

    const layout = {
        title: `Top 10 OTUs for Individual ${selectedValue}`,
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU ID" }
    };

    // Update the bar chart
    Plotly.newPlot("bar", [trace], layout);
}

// Function to update the bubble chart based on the selected option
function updateBubbleChart(data, selectedValue) {
    console.log("Updating bubble chart for:", selectedValue);
    const sample = data.samples.find(sample => sample.id === selectedValue);

    const trace = {
        x: sample.otu_ids,
        y: sample.sample_values,
        text: sample.otu_labels,
        mode: 'markers',
        marker: {
            size: sample.sample_values,
            color: sample.otu_ids,
            colorscale: 'Earth'
        }
    };

    const layout = {
        title: `Bubble Chart for Individual ${selectedValue}`,
        xaxis: { title: "OTU ID" },
        yaxis: { title: "Sample Values" }
    };

    // Update the bubble chart
    Plotly.newPlot("bubble", [trace], layout);
}

// Function to update the gauge chart based on the selected option
function updateGauge(data, selectedValue) {
  const metadata = data.metadata.find(item => item.id.toString() === selectedValue);
  const wfreq = metadata.wfreq;

  const trace = {
      type: "indicator",
      mode: "gauge+number",
      value: wfreq,
      title: { text: "Belly Button Washing Frequency<br><sub>Scrubs per Week</sub>" },
      gauge: {
          axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
          bar: { color: "darkblue" },
          bgcolor: "white",
          borderwidth: 2,
          bordercolor: "gray",
          steps: [
              { range: [0, 1], color: "rgba(255, 255, 255, 0)" },
              { range: [1, 2], color: "rgba(232, 226, 202, 0.5)" },
              { range: [2, 3], color: "rgba(210, 206, 145, 0.5)" },
              { range: [3, 4], color: "rgba(202, 209, 95, 0.5)" },
              { range: [4, 5], color: "rgba(170, 202, 42, 0.5)" },
              { range: [5, 6], color: "rgba(110, 154, 22, 0.5)" },
              { range: [6, 7], color: "rgba(80, 130, 15, 0.5)" },
              { range: [7, 8], color: "rgba(60, 100, 10, 0.5)" },
              { range: [8, 9], color: "rgba(40, 70, 5, 0.5)" }
          ],
      }
  };
  const layout = {
    width: 500,
    height: 400,
    margin: { t: 0, b: 0 },
    paper_bgcolor: "white",
    font: { color: "darkblue", family: "Arial" }
};

Plotly.newPlot("gauge", [trace], layout);
}
