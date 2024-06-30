# Urban Field Frontend

This is the frontend of the Urban Field web application, a platform for booking sports venues. The frontend is built with React.

## Features

- User authentication and authorization
- Browse and search for sports venues
- View venue details
- Book and manage reservations
- User profile management

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/JoyAbrian/UrbanField-client.git
    cd UrbanField-client
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

## Running the Application

1. Start the development server:
    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Building for Production

1. Build the application:
    ```sh
    npm run build
    ```

2. The production-ready files will be in the `build` directory.

## Project Structure

- `src/`: Main source code directory
  - `components/`: Reusable React components
  - `pages/`: React components representing different pages
  - `services/`: Services for making API calls

## Contributing

Feel free to submit pull requests and issues. For major changes, please open an issue first to discuss what you would like to change.
