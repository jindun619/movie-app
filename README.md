# 🎬 MovieApp

MovieApp is a cross-platform mobile application built with **React Native** and **TypeScript**. It allows users to explore movies, TV shows, and actor information using data fetched from **TMDB** (The Movie Database), a free and open-source RESTful API. The app features **React Navigation** for seamless navigation, **React Query (TanStack)** for efficient data fetching and caching, and **Styled Components** for styling. It also supports **dark mode** for enhanced user experience.

## 📚 Tech Stack

![React Native](https://img.shields.io/badge/react_native-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![React Query](https://img.shields.io/badge/react_query-FF4154?style=for-the-badge&logo=react-query&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

- **API**: [TMDB API](https://developer.themoviedb.org/docs/getting-started)
- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **Video Embedding**: [React Native Youtube-iframe](https://lonelycpp.github.io/react-native-youtube-iframe/)

## 💡 Features

### 🏠 Home Screen
- Displays **Now Playing**, **Popular**, and **Top Rated** movies.
- Shows a list of **Popular People**.
- Each movie displays its poster, title, and rating.
- Each person displays their photo and name.

<p align="center">
  <img src="./src/assets/readme_images/home_screen.gif" width="300" alt="home_screen">
</p>

### 🔍 Search Screen
- Allows users to search for movies and people.
- Supports **infinite scroll** for loading more results.
- Clicking on a movie or person routes to their respective detail pages.

<p align="center">
  <img src="./src/assets/readme_images/search_movie.gif" width="150" alt="search_movie"><img src="./src/assets/readme_images/search_person.gif" width="150" alt="search_person">
</p>

### 🎥 Movie Detail Screen
- **Basic Info**: Poster, title, original title, release date, runtime, director, rating, and genres.
- **Overview and Tagline**
- **Cast**: Lists the main cast members.
- **Trailers/Teasers**: Embedded using **React Native Youtube-iframe**.
- **Production Companies**
- **Recommendations**: Suggests similar movies.

<p align="center">
  <img src="./src/assets/readme_images/movie_detail.gif" width="300" alt="movie_detail">
</p>

### 🎭 Person Detail Screen
- **Basic Info**: Profession, gender, birthday, and place of birth.
- **Biography**
- **Filmography**: Lists movies and TV shows the person has acted in or produced.

<p align="center">
  <img src="./src/assets/readme_images/person_detail.gif" width="300" alt="person_detail">
</p>

### 🌑 Dark Mode
- Supports **dark mode** for better visibility in low-light environments.

<p align="center">
  <img src="./src/assets/readme_images/dark_mode.gif" width="300" alt="dark_mode">
</p>

### ⚙️ Additional Features
- **Navigation**: Implemented using **React Navigation**.
- **Data Caching**: Managed with **React Query (TanStack)** for efficient data fetching and caching.

## Key Learnings
- Implemented infinite scroll for seamless data loading.
- Utilized React Query for efficient data fetching and caching.
- Designed a responsive and modern UI using Styled Components.
- Integrated React Navigation for smooth navigation between screens.
- Added dark mode support for improved user experience.
- Gained experience in working with external APIs, specifically TMDB.