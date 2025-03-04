# Expense App

## Overview

The Expense App is a web-based application built with **Angular**, **Angular Material**, and **Tailwind CSS**, designed for managing expenses with a robust **RBAC (Role-Based Access Control)** system. The backend is powered by **NestJS, TypeORM, and MSSQL**, ensuring high performance and scalability.

## Features

- **User Authentication** (Email/Password, Google, Facebook, GitHub - SSO Integration)
- **Role-Based Access Control (RBAC)**
- **Multi-Organization Support**
- **Expense Management**
- **Dynamic Form Validations**
- **Real-time Data Updates**
- **Responsive UI with Tailwind CSS & Angular Material**

## Tech Stack

- **Frontend:** Angular, Angular Material, Tailwind CSS
- **Backend:** NestJS, TypeORM, MSSQL
- **State Management:** RxJS, Services
- **Authentication:** JWT, Social Logins (SSO)
- **Deployment:** AWS

## Project Setup

### Prerequisites

- Node.js (Latest LTS)
- Angular CLI
- MSSQL Server

### Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:babuibrar93/expense-app-angular-frontend.git
   cd expense-app-angular-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in `.env` file:
   ```sh
   API_BASE_URL=<your_backend_api_url>
   ```
4. Start the development server:
   ```sh
   ng serve
   ```

## Folder Structure

```
expense-app-angular-frontend/
/src
│── app/
│   ├── core/                     # Core Module (Singleton services, global components)
│   │   ├── contants/             # Route project constants
│   │   ├── guards/               # Route Guards (Auth, Role-based)
│   │   ├── interceptors/         # HTTP Interceptors (JWT, Logging, Error handling)
│   │   ├── services/             # Global Services (Auth, API calls, LocalStorage)
│   │   ├── utils/                # Utility functions/helpers
│   │   ├── Models/               # Interfaces & Type Definitions
│   │   ├── pipes/                # Custom Pipes
│   │   ├── core.module.ts        # Core Module Definition
│   ├── shared/                   # Shared Module (Reusable Components, Pipes, Directives)
│   │   ├── components/           # Reusable UI components (Buttons, Modals, Forms)
│   │   ├── directives/           # Custom Directives
│   │   ├── shared.module.ts      # Shared Module Definition
│   ├── auth/                     # Authentication Module (Login, Register, Forgot Password)
│   │   ├── login/                # Login Component
│   │   ├── register/             # Register Component
│   │   ├── auth.module.ts        # Auth Module Definition
│   ├── dashboard/                # Dashboard Module
│   │   ├── components/           # Dashboard-specific Components
│   │   ├── services/             # Dashboard Services
│   │   ├── dashboard.module.ts
│   ├── users/                    # Users Module (Lazy Loaded)
│   │   ├── list/                 # User List Component
│   │   ├── detail/               # User Detail Component
│   │   ├── users.module.ts       # Users Module Definition
│   ├── layout/                   # Global Layout Components (Header, Sidebar, Footer)
│   │   ├── header/
│   │   ├── sidebar/
│   │   ├── footer/
│   │   ├── layout.module.ts      # Layout Module
│   ├── app-routing.module.ts     # Main Routing Module
│   ├── app.component.ts          # Root Component
│   ├── app.module.ts             # Root Module
│── assets/                       # Static Assets (Images, Icons, JSON)
│── environments/                 # Environment Configurations (dev, prod)
│── main.ts                        # Bootstrap file
│── styles.scss                    # Global Styles

## Usage
1. Register/Login
2. Manage Expenses
3. Assign Roles & Permissions
4. View Reports & Insights 


Recommended Order for Angular Component Files
   Imports (Angular core, third-party libraries, services, models, etc.)
   Component Decorator (@Component) (Metadata like selector, template, and styles)
   Class Properties (State Variables)
   ViewChild/ContentChild declarations
   Public properties (bound to the template)
   Private properties (internal logic)
   Constructor (Dependency Injection)
   Lifecycle Hooks (ngOnInit, ngAfterViewInit, etc.)
   Getters/Setters (if needed)
   Event Handlers (click, input change, form submission, etc.)
   Service Calls (API Requests)
   Helper Methods (private methods for internal logic)
   Modal/Dialog Handling (if applicable)
   Cleanup (ngOnDestroy, unsubscribing from Observables, etc.)

## Contributing
1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Submit a PR

## License
This project is licensed under the MIT License.

```
