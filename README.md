## Commit 1 - 1:55 PM - 05 Aug/2025

Project SetUp - with Vite -> npm create vite@latest appName -- --template react

to start the application:
cd appName
npm install
npm run dev

run at http://localhost:5173/.

To Clone this Project:
git clone https://github.com/PerumalH/UserManagementApp-Innoppl.git
cd UserManagementApp-Innoppl
npm install
npm run dev

run at http://localhost:5173/.

## Commit 2 - 3:04 PM - 05 Aug/2025

1. **TechStack** - React , Javascript ,SCSS - For Styling, Redux toolKit - State Management, React router dom - for Navigation, React Hook Form - for handling form data at ease, lucide React - for icons.
2. **Project Structure** - created the folders for respective context - components, pages, store, router, styles.
3. **Initial Setup** - store for state and router for navigation.
4. **Planning** - Login Page -> homepage with consist of three tabs -> dashboard[show the task details with total, pending, completed], Todo[add the task and edit/delete], profile[show the details of user] -> with one signout button -> in Header.

## Commit 3 - 6:30 PM - 05 Aug/2025

**Completed** : Login Page with Auth logic - user data stored in localstorage - Styling the page with BEM convention using scss, Routing with conditional navigation(redirect after login).
**Next** : header page with tabs and logout functionality - ProtectedRouter for route guarding.
