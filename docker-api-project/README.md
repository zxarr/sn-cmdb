# Docker API Project

This project is designed to pull information from ServiceNOW's CMDB via API calls and compile a list that can be displayed and edited using DataTables.

## Project Structure

```
docker-api-project
├── src
│   ├── index.ts          # Entry point of the application
│   ├── serviceNow
│   │   └── api.ts       # API calls to ServiceNOW
│   ├── datatables
│   │   └── list.ts      # Functions to create and manage DataTables
│   └── types
│       └── cmdb.ts      # Type definitions for CMDB entries
├── Dockerfile            # Instructions to build the Docker image
├── package.json          # NPM configuration and dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd docker-api-project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Build the Docker image:**
   ```
   docker build -t docker-api-project .
   ```

4. **Run the application:**
   ```
   docker run -p 3000:3000 docker-api-project
   ```

## Usage

- The application will fetch data from ServiceNOW's CMDB and display it in a DataTable format.
- You can edit the entries in the DataTable as needed.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.