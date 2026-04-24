# Unit Converter (Node.js + Express + EJS)

A simple unit converter web app built with Express and EJS templates.

## Features

- Convert Length units
- Convert Weight units
- Convert Temperature units
- Server-rendered pages using EJS
- Modular code structure (routes, controllers, utils)

## Tech Stack

- Node.js
- Express
- EJS
- CSS

## Project Structure

```text
learn-nodejs/
  index.js
  package.json
  public/
    styles.css
  src/
    constants/
      units.js
    controllers/
      converterController.js
    routes/
      converterRoutes.js
    utils/
      converters.js
  views/
    converter.ejs
    home.ejs
    partials/
      head.ejs
      nav.ejs
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Run the app:

```bash
npm start
```

3. Open in browser:

```text
http://localhost:3000
```

## Available Routes

- `GET /` -> Home page
- `GET /length` -> Length form
- `POST /length` -> Length conversion result
- `GET /weight` -> Weight form
- `POST /weight` -> Weight conversion result
- `GET /temperature` -> Temperature form
- `POST /temperature` -> Temperature conversion result

## Supported Units

### Length

- mm
- cm
- m
- km
- inch
- foot
- yard
- mile

### Weight

- mg
- g
- kg
- oz
- lb

### Temperature

- C
- F
- K

## Learning Notes

- Routing lives in `src/routes/converterRoutes.js`
- Request handling and rendering logic lives in `src/controllers/converterController.js`
- Conversion formulas live in `src/utils/converters.js`
- Unit definitions are centralized in `src/constants/units.js`
- EJS templates are in `views/`
- Shared UI sections are in `views/partials/`

## Future Improvements

- Add automated tests for converter functions
- Add input validation with user-friendly messages
- Add more categories (Area, Volume, Time)
- Preserve form state better across submissions
