## Commit 1 - 1:55 PM - 05 Aug/2025

Project SetUp - with Vite -> npm create vite@latest appName -- --template react

to start the application:

- cd appName -> npm install -> npm run dev -> run at http://localhost:5173/.

To Clone this Project:

git clone https://github.com/PerumalH/UserManagementApp-Innoppl.git

- cd UserManagementApp-Innoppl -> npm install -> npm run dev -> run at http://localhost:5173/.

## Commit 2 - 3:04 PM - 05 Aug/2025

1. **TechStack** - React , Javascript ,SCSS - For Styling, Redux toolKit - State Management, React router dom - for Navigation, React Hook Form - for handling form data at ease, lucide React - for icons.
2. **Project Structure** - created the folders for respective context - components, pages, store, router, styles.
3. **Initial Setup** - store for state and router for navigation.
4. **Planning** - Login Page -> homepage with consist of three tabs -> dashboard[show the task details with total, pending, completed], Todo[add the task and edit/delete], profile[show the details of user] -> with one signout button -> in Header.

## Commit 3 - 3:10 PM - 05 Aug/2025

**ReadMe File** - Updating the tracking progress of each commit with details.

## Commit 4 - 6:30 PM - 05 Aug/2025

**Completed** : Login Page with Auth logic - user data stored in localstorage - Styling the page with BEM convention using scss, Routing with conditional navigation(redirect after login).

**Next** : header page with tabs and logout functionality - ProtectedRouter for route guarding.

## Commit 5 - 10:30 PM - 05 Aug/2025

**Completed** : Header Page, tab switch, logout - Functionality and notfound page added without style[if we type unknown path after login - it'll redirect notfound page with goto-dashboard button] and ProtectedRouter for route guarding - and testing two scenario - before login and after login - even we manipulate the url - it doesn't redirect to page without login [Testing-successful].

**Next** : Core Functionality - Dashboard, Todo, Profile tabs.

## Commit 6 - 5:05 PM - 06 Aug/2025

**Completed** : Todo tab with Styles - Features - add , delete , edit , filter - all, pending, complete - Functionality - store data on localStorage and persist after logout -> login - [Testing-successful]. - https://mdbootstrap.com/docs/react/extended/to-do-list/#! [Layout-Idea]

**Next** : Dashboard , profile tabs - responsive design - Need to Improvise UI.

## Commit 7 - 8:22 PM - 06 Aug/2025

**Completed** : Profile Tab - style - edit option - with localstorage data - implement responsive design in Header component alone and style for notfoundpage - changed the routing.

**Not Implemented** : Dashboard - why - idea behind - show the total task, complete task , pending task in the tab. but i implemented that feature in todo tab as well in filter section - it's repetition of work - so eliminate that tab.

**Next** : need to add responsive for login , todos, profile tab and improvise UI with colors.

## Commit 8 - 11:15 PM - 06 Aug/2025

**Completed** : Login page- looks good even without mediaquery, added mediaquery to todos, profile tabs for responsive.and do some changes in colors - and deployed in netlify - https://todomanangement.netlify.app/

**Next** : Need to do some testing and remove unnecessary code as a final touch.
