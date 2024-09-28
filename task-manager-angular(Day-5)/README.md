## README for Task Manager Project

### Overview
This is a **Task Manager** application built with **Angular** and **Angular Material**. It allows users to manage tasks with features such as adding tasks, editing tasks, and viewing a list of tasks. There is an **Admin Module** for overseeing all tasks in the system, with guard protection for both regular users and admin access.

### Table of Contents
- [README for Task Manager Project](#readme-for-task-manager-project)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
  - [Services](#services)
  - [Guards](#guards)
  - [Modules](#modules)
  - [Routing](#routing)
  - [Testing](#testing)
  - [Styling](#styling)
  - [Build](#build)

### Project Structure

src/
│
├── app/
│   ├── add-task/                  # Module for adding tasks
│   ├── admin/                     # Admin module for managing tasks
│   ├── edit-task/                 # Module for editing tasks
│   ├── guards/                    # Route guards (auth/admin)
│   ├── login/                     # User login module
│   ├── tab-group/                 # Tab navigation component
│   ├── task-list/                 # Component for displaying tasks
│   ├── app.component.ts           # Main application component
│   ├── app.module.ts              # Root module
│   ├── app.routes.ts              # Application routes
│   ├── auth.service.ts            # Authentication service
│   ├── task.service.ts            # Task management service
│   └── task.ts                    # Task model
└── assets/                        # Project assets (e.g., images)

### Features
- **Add Task:** Create a new task with a title and description.
- **Edit Task:** Modify existing tasks.
- **Task List:** View all tasks, with options to edit or mark tasks as complete.
- **Admin Dashboard:** View all user tasks (admin only).
- **Authentication:** Login functionality with role-based access for admin and users.
- **Guards:** Route protection for authenticated users and admin access.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/task-manager.git
   ```
2. Navigate to the project folder:
   ```bash
   cd task-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   ng serve
   ```

### Usage

- **Login:** Start by logging in with an email and password. The system stores the user’s credentials in local storage for authentication.
- **Task Management:** 
  - From the main task list, you can view, add, or edit tasks.
  - Tasks are stored in the browser’s `localStorage`, so they persist across sessions.
- **Admin Module:** Only users with an admin role can access the admin dashboard, which displays all tasks in the system.

### Components

1. **AddTaskComponent**
   - Located in `src/app/add-task/`
   - Provides functionality for creating new tasks.

2. **EditTaskComponent**
   - Located in `src/app/edit-task/`
   - Allows users to modify task details.

3. **TaskListComponent**
   - Located in `src/app/task-list/`
   - Displays all tasks, with options to edit or mark tasks as complete.

4. **LoginComponent**
   - Located in `src/app/login/`
   - Handles user login and authentication.

5. **AdminDashboardComponent**
   - Located in `src/app/admin/admin-dashboard/`
   - Admin-only component to view all tasks in the system.

6. **TabGroupComponent**
   - Located in `src/app/tab-group/`
   - Navigation tabs for accessing different sections of the application.

### Services

1. **AuthService**
   - Located in `src/app/auth.service.ts`
   - Handles login, logout, and authentication state.

2. **TaskService**
   - Located in `src/app/task.service.ts`
   - Manages task-related operations, including fetching and saving tasks from/to `localStorage`.

### Guards

1. **AuthGuard**
   - Located in `src/app/auth.guard.ts`
   - Protects routes from being accessed by non-authenticated users.

2. **AdminGuard**
   - Located in `src/app/guards/admin.guard.ts`
   - Ensures that only users with the 'admin' role can access certain routes.

### Modules

1. **AdminModule**
   - Located in `src/app/admin/admin.module.ts`
   - Lazy-loaded module for admin-related functionalities.

2. **AppModule**
   - Located in `src/app/app.module.ts`
   - The root module that imports core components and sets up routing.

### Routing

- The routes are defined in `src/app/app.routes.ts`. 
- The application uses lazy loading for the **AdminModule**, and guards protect routes based on user roles.

### Testing

Each component and service includes unit tests located in `.spec.ts` files. For example:
- `add-task.component.spec.ts` tests the functionality of the Add Task component.
- `auth.service.spec.ts` tests the methods related to authentication.

Run tests with:
```bash
ng test
```

### Styling

The project uses **Angular Material** for UI components such as buttons, forms, and cards. Custom styles for components are located in their respective `.css` files (e.g., `add-task.component.css`).

### Build

To build the project for production, run:
```bash
ng build
```
