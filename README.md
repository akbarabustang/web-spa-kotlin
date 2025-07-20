# Kotlin/JS Single Page Application Dashboard

A simple yet functional Single Page Application (SPA) built with Kotlin/JS. This project demonstrates how to create a web application using Kotlin instead of JavaScript, offering a modern approach to web development with static typing and all the benefits of the Kotlin language.

## Project Overview

This project was created as a learning resource for students who want to learn how to build web applications with Kotlin. It demonstrates:

- Setting up a Kotlin/JS project with Maven
- Creating a Single Page Application architecture
- DOM manipulation with Kotlin/JS
- Dynamic content loading without page refreshes
- Navigation between different views

## Technologies Used

- **Kotlin 1.5.31** - The programming language used
- **Kotlin/JS** - Kotlin to JavaScript compiler
- **kotlinx-html-js** - HTML builder library for Kotlin
- **Bootstrap 5** - Frontend CSS framework for styling
- **Maven** - Build and dependency management

## Project Structure

```
kotlinjs/
├── src/
│   ├── main/
│   │   ├── kotlin/
│   │   │   └── com/
│   │   │       └── mde/
│   │   │           └── Main.kt     # Main application code
│   │   └── resources/
│   │       └── index.html          # HTML template
├── pom.xml                         # Maven configuration
└── README.md                       # This file
```

## Features

- **Home Page** - Shows dashboard with system stats
- **About Page** - Information about the application
- **SPA Navigation** - Change content without page reloads

## Building and Running the Application

### Prerequisites

- JDK 8 or higher
- Maven 3.6 or higher

### Build Steps

1. Clone the repository or download the source code
2. Open a terminal in the project root directory
3. Run the Maven build command:

```bash
mvn clean install
```

4. Open the generated HTML file:
```
target/index.html
```

You can open this file directly in your browser or serve it using a local web server.

## For Students

### Learning Goals

By studying this project, you will learn:

1. **Kotlin/JS Basics** - How Kotlin can be used to generate JavaScript
2. **SPA Architecture** - Understanding how to create a single page application
3. **DOM Manipulation** - Interacting with HTML elements using Kotlin
4. **String Templates** - Using Kotlin's powerful string interpolation features
5. **Event Handling** - Capturing and responding to user interactions

### Next Steps for Learning

After understanding this project, consider extending it with:

- Add more pages/sections
- Implement a data store
- Add form handling and validation
- Connect to a backend API
- Add more interactive elements like charts or animations

## Additional Resources

- [Kotlin Official Website](https://kotlinlang.org/)
- [Kotlin/JS Documentation](https://kotlinlang.org/docs/js-overview.html)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

## License

This project is open source and available for educational purposes.

---

Created by MDE for educational purposes. Feel free to use and modify for your learning journey!
