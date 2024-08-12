# 🎬영화앱

## 📚사용 스택

![react native](https://img.shields.io/badge/react_native-61DAFB?style=for-the-badge&logo=react&logoColor=white)![typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![react-query](https://img.shields.io/badge/react_query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)![styled-components](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

# 🔗API

[TMDB API](https://developer.themoviedb.org/docs/getting-started)

## 💡기능들

### Home Screen

지금 상영중, 인기 영화, 평점순, 인기 배우 추천.

영화: 포스터, 제목, 평점 등 기본 정보 표시

배우: 인물 사진, 이름 표시

<img src="./src/assets/readme_images/home_screen.gif" width="100" alt="home_screen">

### Search Screen

영화, 인물 검색 기능.

Infinite Scroll 기능 지원.

<img src="./src/assets/readme_images/search_movie.gif" width="100" alt="search_movie"><img src="./src/assets/readme_images/search_person.gif" width="100" alt="search_movie">

### Movie Detail Screen

#### 영화 기본 정보

- 포스터/백드롭 이미지
- 영화 제목/원제
- 개봉일/러닝 타임
- 감독
- 평점
- 장르

#### 영화 개요/캐치프레이즈

#### 영화 출연진

#### 영화 티저/트레일러

- [React Native Youtube-iframe](https://lonelycpp.github.io/react-native-youtube-iframe/)을 이용한 동영상 임베드

#### 제작사

#### 영화 추천

- 비슷한 영화들을 추천

<img src="./src/assets/readme_images/movie_detail.gif" width="100" alt="movie_detail">

### Person Detail Screen

#### 인물 기본 정보

- 전문 분야
- 성별
- 생일
- 출생지

#### 인물 약력

#### 출연작/제작 정보

<img src="./src/assets/readme_images/person_detail.gif" width="100" alt="person_detail">

### Dark Mode

<img src="./src/assets/readme_images/dark_mode.gif" width="100" alt="dark_mode">

### 그 외 기능들

- 네비게이션 ([React Navigation](https://reactnavigation.org/))
- 데이터 캐싱 ([TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview))
