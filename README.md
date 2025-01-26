# To-Do List REST API

This is a simple To-Do List REST API built with Node.js, TypeScript, and Express using in-memory persistence.

## Key Features

> [!NOTE]
>
> This API is in early development and has limited features.

## Getting Started

This section shows how to get the API up and running on your local machine.

### System Requirements

Ensure the following software is installed on your system:

- Node.js (v22 or later)

### Installation

1. Clone the repository to your local machine and navigate to the project directory:

   ```shell
   git clone https://github.com/mayekukhisa/todo-api.git && cd todo-api
   ```

2. Copy the `.env.example` file to `.env` at the root of the source tree and replace the `your_port_number` value with the port number you want to use. For example:

   ```
   PORT="3030"
   ```

> [!NOTE]
>
> This step is optional, but it is recommended to avoid conflicts with other applications running on your machine.

3. Install `pnpm` (if not already installed) by running:

   ```shell
   npm install -g pnpm
   ```

4. Install dependencies and start the server in development mode:

   ```shell
   pnpm install && pnpm dev
   ```

5. Use Hoppscotch, HTTPie, Postman, or curl to interact with the API.

### Usage

The API exposes the following endpoints for managing to-do items:

> [!IMPORTANT] 
>
> All endpoints are prefixed with: `http://localhost:<port_number>/v1`

#### Create a To-Do

- **POST** `/todos`

- Request Body:

  ```json
  {
    "title": "<string>",
    "notes": null
  }
  ```

#### List All To-Dos

- **GET** `/todos`
- Response: Array of to-do items

#### Get a Single To-Do

- **GET** `/todos/:id`
- Replace `:id` with the actual to-do ID

#### Update a To-Do

- **PUT** `/todos/:id`

- Replace `:id` with the actual to-do ID

- Request Body:

  ```json
  {
    "title": null,
    "notes": null
  }
  ```

#### Delete a To-Do

- **DELETE** `/todos/:id`
- Replace `:id` with the actual to-do ID

## License

This repository is available under the terms of the [MIT license][1].

&copy; 2025 Mayeku Khisa.

[1]: LICENSE
