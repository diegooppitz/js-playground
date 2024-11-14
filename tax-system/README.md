# Tax System Docs

The Tax System is a full-stack system developed for study purposes. Using stacks like React, TypeScript, and Node.js, it allows users to select and enter information about a product to calculate and return its total value, including taxes. Tax rates for each product vary based on criteria such as the product's base value, its fiscal state, and the year of sale.

All available fiscal states and years are already within the system, so the user only needs to select these options and input a base value for the product.

## System Overview

The concept behind the Tax System is to receive information about a product, assemble an object with its relevant details based on various criteria, and then calculate the product’s total value, including applicable taxes. This software handles tax calculations for products based on criteria such as fiscal state, sale year, and product value.

## Technologies Used

- **General**
  - TypeScript
  - Unit testing with Jest
- **Front End**
  - React
  - Next.js 15
- **Back End**
  - Node.js
  - Express

## Getting Started

1. Enter the backend directory: `/server`
2. Run `yarn install` to install all server dependencies
3. Execute `yarn start` to run the development server with `ts-node` and `nodemon`
4. Go to the frontend directory: `/client`
5. Run `yarn install` to install all client dependencies
6. Execute `yarn dev`
7. Access the application at [http://localhost:3000](http://localhost:3000)
