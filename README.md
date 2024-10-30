# Netflix AI

A movie browsing platform powered by TMDB and Gemini for advanced movie suggestions. Built with React, TailwindCSS, Firebase, and Redux.

## Features

- **Login/Sign Up**: Secure authentication with Firebase.
- **Browse Page**: After login, access a dynamic list of movies, including trailers, titles, and descriptions.
- **Movie Trailers**: Autoplaying trailers with embedded YouTube videos.
- **Movie Suggestions**: Intelligent movie recommendations using Gemini and TMDB API.
- **NetflixGemini Search**: Integrated search bar with AI-powered movie suggestions.
- **Responsive Design**: Optimized for mobile and desktop with TailwindCSS.

## Project Structure

1. **Create React App**: Configured with TailwindCSS for UI styling.
2. **Routing**: App routing for easy navigation between pages.
3. **Forms**:
   - Login Form
   - Sign Up Form
   - Form validation using `useRef` hook.
4. **Firebase Setup**:
   - Deployed to production.
   - Sign up and login user account functionality.
   - Sign out and profile update features.
5. **State Management**:
   - Created Redux store with `userSlice` for user authentication.
   - `movieSlice` to store movie data.
   - `aiSlice` for Gemini-powered movie suggestions.
6. **API Integration**:
   - TMDB API for fetching movies (now playing, popular).
   - Gemini-powered movie suggestions.
7. **Custom Hooks**:
   - `usePopularMovies` for fetching popular movies.
   - Custom hook for Now Playing movies.
8. **Responsive UI**:
   - TailwindCSS for a responsive, visually appealing UI.
   - Main movie container with a beautiful layout and movie list components.
9. **Environment Variables**:
   - `.env` file for sensitive data like API keys.

## Deployment

- **Firebase Hosting**: Deployed to Firebase.
