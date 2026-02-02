# Codex Governance Map

Prototype UI and project notes for a Tamil Nadu governance map that supports zoomable drill-down from country to legislative assembly. The UI spec follows India.gov.in design guidelines and uses Election Commission of India (ECI) data references for future integration.

## Goals
- Provide a map with drill-down navigation: Country → State → District → Constituency → Legislative Assembly.
- Keep subdivision colors unique at the country and state levels, while constituency/assembly views inherit their district color.
- Offer UI controls to toggle layers and adjust view settings.

## Project Structure
- `src/`: Static HTML/CSS/JS prototype UI.
- `docs/`: Data sourcing and UX notes.
- `data/`: Placeholder for ECI data snapshots and GIS layers.

## Quick Start
Open `src/index.html` in a browser (or serve `src/` with a static server) to view the prototype UI.

