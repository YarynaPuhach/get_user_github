# Get User GitHub

This is a simple React application that interacts with the GitHub API to search for users and display their repositories. The app allows you to search for up to 5 users with a similar username and, upon clicking on a user, view their repositories.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- **User Search:** Search for GitHub users by entering a username. The app will display a list of up to 5 users with similar usernames.
- **View Repositories:** Click on a user to expand the view and see all their public repositories.
- **Responsive Design:** The application is responsive and works well on both desktop and mobile devices.

## Installation

To get this project up and running locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YarynaPuhach/get_user_github.git
   cd get_user_github
    ```
2. **Install dependencies:**

Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```
3. **Run the application:**

```bash
npm start
```
Open the app in your browser:

Navigate to http://localhost:3000 in your web browser to view the app.

## Usage
Enter a GitHub username or part of a username in the search input.
Click the "Search" button to find users with similar usernames.
Click on a user's name to expand and view their repositories.
The repositories will be displayed with their name and description, along with the number of stars they have received.
## Screenshots
Here are some screenshots of the application:

### Initial Search
![image](https://github.com/user-attachments/assets/c2bd0f0d-f760-44f4-a357-d5e122433b93)


### Users List
![image](https://github.com/user-attachments/assets/e57ae54e-089b-4278-9190-8d92298bd0b0)


### User Repositories
![image](https://github.com/user-attachments/assets/38ee8c1b-9d02-421d-b2f1-0f6cc8db71fc)


## Technologies Used
- React: A JavaScript library for building user interfaces.
- TypeScript: Superset of JavaScript that adds static types.
- GitHub API: Used to fetch user and repository data.
- CSS: Custom styles to match the design provided.
## Contributing
If you'd like to contribute to this project, you can follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature-branch).
- Open a Pull Request.
