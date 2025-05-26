# Belly Button Biodiversity Dashboard

---

## Project Description

This project developed an interactive web dashboard to explore the belly button biodiversity dataset. The dashboard allows users to select an individual from the dataset and view detailed visualizations and metadata related to that individual’s microbial diversity. The goal was to provide an intuitive and engaging interface for exploring biological sample data.

---

## Who Will Benefit and Why?

Biologists, educators, and data enthusiasts can benefit from this dashboard. It simplifies the exploration of complex microbiome data by providing clear visual summaries and metadata at the individual level. Researchers and students gain a better understanding of microbial diversity patterns without requiring advanced programming skills.

---

## Dataset Description

The dataset originates from the University of Toronto Data Analytics Boot Camp and is based on the belly button biodiversity study by the Dunn Lab. It contains operational taxonomic unit (OTU) data representing bacterial populations found in human belly buttons, along with individual metadata such as age, gender, and ethnicity.

---

## How It Was Done

* **Technologies Used:** The dashboard was built using JavaScript with D3.js for data handling and Plotly.js for interactive visualizations.

* **User Interaction:** A dropdown menu dynamically lists individual sample IDs from the dataset, allowing users to select and view data for any participant.

* **Visualizations:**

  * **Bar Chart:** Displays the top 10 OTUs for the selected individual, sorted by abundance.
  * **Bubble Chart:** Shows all OTUs with bubble size representing abundance and color indicating OTU ID.
  * **Gauge Chart:** Represents the washing frequency (scrubs per week) as a colored gauge.

* **Metadata Display:** Shows key demographic details for the selected individual, such as age and ethnicity.

* **Project Deployment:** The dashboard is hosted on GitHub Pages for easy access.

---

## Key Findings

* **How is microbial diversity visualized?**
  Top OTUs are shown via a bar chart, revealing which bacteria are most abundant per individual.

* **What does the bubble chart convey?**
  It offers a full view of all bacterial species present, showing diversity beyond just the most abundant.

* **How is individual metadata integrated?**
  Demographic data is displayed alongside microbial data, providing context to the biological findings.

* **What insights does the gauge chart provide?**
  It visually represents personal hygiene habits, specifically belly button washing frequency, linking behavior to microbial presence.

---

## Conclusion

The dashboard effectively transforms complex biodiversity data into accessible visual stories. It allows users to explore individual microbial profiles and related metadata, enhancing understanding of human-associated microbiomes.

---

## Recommendations

Future improvements could include adding comparative views across multiple individuals or time series data to observe changes over time. Integrating additional metadata categories could enrich biological interpretations.

---

## Project Files

* **index.html:** Main dashboard interface
* **app.js:** JavaScript code managing data and visualizations
* **samples.json:** Dataset in JSON format
* **pics:** Images used in the dashboard
* **static:** Supporting files for the project

---

## Project Hosting

The dashboard is available online:
[https://qazifabiahoq.github.io/belly-button-challenge/](https://qazifabiahoq.github.io/belly-button-challenge/)

---

## Credits

This project was completed as part of the University of Toronto Data Analytics Boot Camp. The dataset is from the Dunn Lab’s belly button biodiversity research.

---

## References

Hulcr, J. et al. (2012). *A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable*. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)
