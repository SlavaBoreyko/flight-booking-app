# Flight Booking App

![Screenshot 2023-03-12 at 09 17 02](https://user-images.githubusercontent.com/53602597/224533074-65fc7198-3a2b-4b72-ae58-6976ec627d35.jpg)

![Screenshot 2023-03-12 at 09 22 23](https://user-images.githubusercontent.com/53602597/224533081-bdf68a87-3dde-4333-9b6a-f9d258a4785f.jpg)


### Installation

1. Install dependencies in both `/backend` and `/frontend` (`npm install`)
2. Run `npm start` command in both `/backend` and `/frontend` directories
   Open [http://localhost:3000] to view app in your browser.
3. Run `npm build` for production build app;

### Project details:

Host server = "http://localhost:3001" and defined in './src/api'.

### Additional improvements:

1. Added absolute path '@/' with tsconfig and webpack
2. ./src/utils/fixedZeroBug.ts - fixed Zero Hour and Zero Minutes bugs from server data with random hours and minutes.
3. Loading state for Flights handled with Skeleton component from MUI.
4. Error state for Flights handled with buttons "Refresh a page"
5. Sort for flights has query-in-url implementation.
6. Added "Duration" sort option
7. My component SelectInput for sorting is responsive.
8. ConfirmationPage has button "Return to Flights"
9. Airlines Logo component handles error with LogoError.png to save css and UI.
10. Changed react favicon to airplane icon.
11. Production build with webpack optimization.

### Breakpoints

```
Mobile: 375px -> 767px
Tablet: 768px -> 1023px
Desktop: >= 1024px
```
