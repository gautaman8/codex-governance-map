# Data Sources

## Election Commission of India (ECI)
The latest legislative assembly and constituency boundaries should be sourced from the Election Commission of India. Suggested reference datasets:
- Latest delimitation/constituency lists (state-wise).
- GIS boundary layers where available (state, district, constituency, legislative assembly).

## Recommended Data Artifacts
- `data/eci/state-boundaries.geojson`
- `data/eci/district-boundaries.geojson`
- `data/eci/constituency-boundaries.geojson`
- `data/eci/legislative-assembly-boundaries.geojson`
- `data/eci/metadata.json` (release dates, source URLs, version notes)

## Notes
- Ensure Tamil Nadu’s latest delimitation orders are used.
- Capture dataset versions and release dates in `metadata.json` for traceability.
