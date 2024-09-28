# E-Learning Portal

## Overview

The **E-Learning Portal** is a basic web application designed to facilitate online learning. This project is an opportunity for me to learn and implement various fundamental concepts in Angular, including routing, directive creation, and API calling. The portal aims to provide users with a seamless experience for browsing courses, accessing course details, and interacting with various features of the application.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Components Overview](#components-overview)
- [Services](#services)
- [Directives](#directives)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Routing:** Navigate between different sections of the portal without page reloads.
- **Course Search:** Users can search for courses based on their interests.
- **Course Details:** View detailed information about selected courses.

## Technologies Used

- **Frontend:** Angular
- **Styling:** SCSS
- **HTML:** Standard HTML5
- **TypeScript:** For strong typing and modern JavaScript features

## File Structure

Here’s a brief overview of the file structure of the project:

```
E-Learning_Portal/
└── 📁src
    └── 📁app
        └── 📁about
            └── about.component.html
            └── about.component.scss
            └── about.component.spec.ts
            └── about.component.ts
        └── 📁contact
            └── contact.component.html
            └── contact.component.scss
            └── contact.component.spec.ts
            └── contact.component.ts
        └── 📁course-details
            └── course-details.component.html
            └── course-details.component.scss
            └── course-details.component.spec.ts
            └── course-details.component.ts
        └── 📁course-search
            └── course-search.component.html
            └── course-search.component.scss
            └── course-search.component.spec.ts
            └── course-search.component.ts
        └── 📁courses
            └── courses.component.html
            └── courses.component.scss
            └── courses.component.spec.ts
            └── courses.component.ts
        └── 📁footer
            └── footer.component.html
            └── footer.component.scss
            └── footer.component.spec.ts
            └── footer.component.ts
        └── 📁home
            └── home.component.html
            └── home.component.scss
            └── home.component.spec.ts
            └── home.component.ts
        └── 📁navbar
            └── navbar.component.html
            └── navbar.component.scss
            └── navbar.component.spec.ts
            └── navbar.component.ts
        └── 📁profile
            └── profile.component.html
            └── profile.component.scss
            └── profile.component.spec.ts
            └── profile.component.ts
        └── 📁sidebar
            └── sidebar.component.html
            └── sidebar.component.scss
            └── sidebar.component.spec.ts
            └── sidebar.component.ts
        └── app-routing.module.ts
        └── app.component.html
        └── app.component.scss
        └── app.component.spec.ts
        └── app.component.ts
        └── app.module.ts
        └── course.service.spec.ts
        └── course.service.ts
        └── highlight-course.directive.spec.ts
        └── highlight-course.directive.ts
    └── 📁assets
        └── .gitkeep
    └── favicon.ico
    └── index.html
    └── main.ts
    └── styles.scss
```

## Setup Instructions

To set up the E-Learning Portal locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd E-Learning_Portal
   ```

2. **Install dependencies:**
   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then run:
   ```bash
   npm install
   ```

3. **Run the application:**
   Start the development server with:
   ```bash
   ng serve
   ```
   Open your browser and navigate to `http://localhost:4200/` to view the application.

## Components Overview

### About Component
- **Location:** `src/app/about`
- **Purpose:** Displays information about the E-Learning Portal.

### Contact Component
- **Location:** `src/app/contact`
- **Purpose:** Provides a contact form for users to reach out.

### Course Details Component
- **Location:** `src/app/course-details`
- **Purpose:** Displays detailed information about a selected course.

### Course Search Component
- **Location:** `src/app/course-search`
- **Purpose:** Allows users to search for available courses.

### Courses Component
- **Location:** `src/app/courses`
- **Purpose:** Lists all available courses.

### Footer Component
- **Location:** `src/app/footer`
- **Purpose:** Displays the footer section of the application.

### Home Component
- **Location:** `src/app/home`
- **Purpose:** Serves as the landing page for the portal.

### Navbar Component
- **Location:** `src/app/navbar`
- **Purpose:** Provides navigation links to different sections of the portal.

### Profile Component
- **Location:** `src/app/profile`
- **Purpose:** Allows users to view and edit their profile information.

### Sidebar Component
- **Location:** `src/app/sidebar`
- **Purpose:** Displays additional navigation options.

## Services

### Course Service
- **Location:** `src/app/course.service.ts`
- **Purpose:** Handles API calls related to courses, fetching data from a backend service.

## Directives

### Highlight Course Directive
- **Location:** `src/app/highlight-course.directive.ts`
- **Purpose:** A custom directive to highlight courses based on specific criteria.
