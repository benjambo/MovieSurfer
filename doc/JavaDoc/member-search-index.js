memberSearchIndex = [
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "MovieController",
    l: "addMovie(Movie, BindingResult)",
    url:
      "addMovie(com.msgroup.moviesurfer.model.Movie,org.springframework.validation.BindingResult)"
  },
  { p: "com.msgroup.moviesurfer", c: "DatabaseTest", l: "after()" },
  { p: "com.msgroup.moviesurfer", c: "MovieDatabaseTest", l: "after()" },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "UserController",
    l: "authenticateAdmin(LoginRequest, BindingResult)",
    url:
      "authenticateAdmin(com.msgroup.moviesurfer.model.LoginRequest,org.springframework.validation.BindingResult)"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "UserController",
    l: "authenticateUser(LoginRequest, BindingResult)",
    url:
      "authenticateUser(com.msgroup.moviesurfer.model.LoginRequest,org.springframework.validation.BindingResult)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "SecurityConfig",
    l: "authenticationManager()"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtAuthenticationEntryPoint",
    l:
      "commence(HttpServletRequest, HttpServletResponse, AuthenticationException)",
    url:
      "commence(javax.servlet.http.HttpServletRequest,javax.servlet.http.HttpServletResponse,org.springframework.security.core.AuthenticationException)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "SecurityConfig",
    l: "configure(AuthenticationManagerBuilder)",
    url:
      "configure(org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "SecurityConfig",
    l: "configure(HttpSecurity)",
    url:
      "configure(org.springframework.security.config.annotation.web.builders.HttpSecurity)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "SecurityConfig",
    l: "corsConfigurer()"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "CustomUserDetailsService",
    l: "CustomUserDetailsService()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer",
    c: "DatabaseTest",
    l: "DatabaseTest()",
    url: "%3Cinit%3E()"
  },
  { p: "com.msgroup.moviesurfer", c: "DatabaseTest", l: "dbTest()" },
  {
    p: "com.msgroup.moviesurfer.repositories",
    c: "SeatRepository",
    l: "deleteAllByMovieId(Long)",
    url: "deleteAllByMovieId(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "MovieController",
    l: "deleteMovie(Long)",
    url: "deleteMovie(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "MovieService",
    l: "deleteMovie(Long)",
    url: "deleteMovie(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "SeatService",
    l: "deleteSeatsByMovieId(Long)",
    url: "deleteSeatsByMovieId(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtProvider",
    l: "EXPIRATION_TIME"
  },
  {
    p: "com.msgroup.moviesurfer.repositories",
    c: "MovieRepository",
    l: "findAll()"
  },
  {
    p: "com.msgroup.moviesurfer.repositories",
    c: "SeatRepository",
    l: "findAllByMovieId(Long)",
    url: "findAllByMovieId(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.repositories",
    c: "SeatRepository",
    l: "findAllByReserved(boolean)"
  },
  {
    p: "com.msgroup.moviesurfer.repositories",
    c: "UserRepository",
    l: "findByEmail(String)",
    url: "findByEmail(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.repositories",
    c: "UserRepository",
    l: "findByRole(String)",
    url: "findByRole(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtProvider",
    l: "generateToken(Authentication)",
    url: "generateToken(org.springframework.security.core.Authentication)"
  },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "getAuthorities()" },
  {
    p: "com.msgroup.moviesurfer.repositories",
    c: "SeatRepository",
    l: "getById(Long)",
    url: "getById(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.repositories",
    c: "UserRepository",
    l: "getById(Long)",
    url: "getById(java.lang.Long)"
  },
  { p: "com.msgroup.moviesurfer.model", c: "LoginRequest", l: "getEmail()" },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "getEmail()" },
  {
    p: "com.msgroup.moviesurfer",
    c: "DatabaseTest",
    l: "getEmailFromDbTest()"
  },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "getFirstName()" },
  {
    p: "com.msgroup.moviesurfer",
    c: "DatabaseTest",
    l: "getFistNameFromDbTest()"
  },
  { p: "com.msgroup.moviesurfer.model", c: "Movie", l: "getGenre()" },
  {
    p: "com.msgroup.moviesurfer",
    c: "MovieDatabaseTest",
    l: "getGenreFromMovieDatabaseTest()"
  },
  { p: "com.msgroup.moviesurfer.model", c: "Movie", l: "getId()" },
  { p: "com.msgroup.moviesurfer.model", c: "Seat", l: "getId()" },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "getId()" },
  { p: "com.msgroup.moviesurfer.model", c: "Movie", l: "getImage()" },
  {
    p: "com.msgroup.moviesurfer",
    c: "MovieDatabaseTest",
    l: "getImageFromMovieDatabase()"
  },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "getLastName()" },
  {
    p: "com.msgroup.moviesurfer",
    c: "DatabaseTest",
    l: "getLastNameFromDbTest()"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "MovieService",
    l: "getMovieById(Long)",
    url: "getMovieById(java.lang.Long)"
  },
  { p: "com.msgroup.moviesurfer.model", c: "Seat", l: "getMovieId()" },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "MovieController",
    l: "getMovies()"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "MovieService",
    l: "getMovies()"
  },
  { p: "com.msgroup.moviesurfer.model", c: "Seat", l: "getNumber()" },
  { p: "com.msgroup.moviesurfer.model", c: "LoginRequest", l: "getPassword()" },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "getPassword()" },
  {
    p: "com.msgroup.moviesurfer",
    c: "DatabaseTest",
    l: "getPasswordFromDbTest()"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "SeatController",
    l: "getReservedSeats()"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "SeatService",
    l: "getReservedSeats()"
  },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "getRole()" },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "SeatService",
    l: "getSeatById(Long)",
    url: "getSeatById(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "SeatController",
    l: "getSeats()"
  },
  { p: "com.msgroup.moviesurfer.services", c: "SeatService", l: "getSeats()" },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "SeatService",
    l: "getSeatsByMovieId(Long)",
    url: "getSeatsByMovieId(java.lang.Long)"
  },
  { p: "com.msgroup.moviesurfer.model", c: "Movie", l: "getTitle()" },
  {
    p: "com.msgroup.moviesurfer",
    c: "MovieDatabaseTest",
    l: "getTitleFromMovieDatabaseTest()"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtLoginSuccessResponse",
    l: "getToken()"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "UserController",
    l: "getUserById(Long)",
    url: "getUserById(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "UserService",
    l: "getUserById(Long)",
    url: "getUserById(java.lang.Long)"
  },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "getUsername()" },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "UserController",
    l: "getUsers()"
  },
  { p: "com.msgroup.moviesurfer.services", c: "UserService", l: "getUsers()" },
  {
    p: "com.msgroup.moviesurfer.exceptions",
    c: "GlobalResponseEntityExceptionHandler",
    l: "GlobalResponseEntityExceptionHandler()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.exceptions",
    c: "GlobalResponseEntityExceptionHandler",
    l: "HandleEntityNotFoundException(EntityNotFoundException)",
    url:
      "HandleEntityNotFoundException(javax.persistence.EntityNotFoundException)"
  },
  {
    p: "com.msgroup.moviesurfer.exceptions",
    c: "GlobalResponseEntityExceptionHandler",
    l: "HandleTransactionRequiredException(TransactionRequiredException)",
    url:
      "HandleTransactionRequiredException(javax.persistence.TransactionRequiredException)"
  },
  {
    p: "com.msgroup.moviesurfer.exceptions",
    c: "GlobalResponseEntityExceptionHandler",
    l: "handleUniqueEmailException(UniqueEmailException)",
    url:
      "handleUniqueEmailException(com.msgroup.moviesurfer.exceptions.UniqueEmailException)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtProvider",
    l: "HEADER_STRING"
  },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "isAccountNonExpired()" },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "isAccountNonLocked()" },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "User",
    l: "isCredentialsNonExpired()"
  },
  { p: "com.msgroup.moviesurfer.model", c: "User", l: "isEnabled()" },
  { p: "com.msgroup.moviesurfer.model", c: "Seat", l: "isReserved()" },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtLoginSuccessResponse",
    l: "isSuccess()"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtAuthenticationEntryPoint",
    l: "JwtAuthenticationEntryPoint()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtLoginSuccessResponse",
    l: "JwtLoginSuccessResponse(boolean, String)",
    url: "%3Cinit%3E(boolean,java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtProvider",
    l: "JwtProvider()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "CustomUserDetailsService",
    l: "loadUserByUsername(String)",
    url: "loadUserByUsername(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "LoginRequest",
    l: "LoginRequest()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer",
    c: "MoviesurferApplication",
    l: "main(String[])",
    url: "main(java.lang.String[])"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "Movie",
    l: "Movie()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "MovieController",
    l: "MovieController()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer",
    c: "MovieDatabaseTest",
    l: "MovieDatabaseTest()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "MovieService",
    l: "MovieService()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer",
    c: "MoviesurferApplication",
    l: "MoviesurferApplication()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer",
    c: "MovieTest",
    l: "MovieTest()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "UserController",
    l: "registerUser(User, BindingResult)",
    url:
      "registerUser(com.msgroup.moviesurfer.model.User,org.springframework.validation.BindingResult)"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "SeatController",
    l: "reserveSeat(Long)",
    url: "reserveSeat(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "MovieService",
    l: "save(Movie)",
    url: "save(com.msgroup.moviesurfer.model.Movie)"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "UserService",
    l: "saveUser(User)",
    url: "saveUser(com.msgroup.moviesurfer.model.User)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "Seat",
    l: "Seat()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "SeatController",
    l: "SeatController()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "SeatService",
    l: "SeatService()",
    url: "%3Cinit%3E()"
  },
  { p: "com.msgroup.moviesurfer.security", c: "JwtProvider", l: "SECRET" },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "SecurityConfig",
    l: "SecurityConfig()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "UserService",
    l: "setAndSaveAdmin()"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "LoginRequest",
    l: "setEmail(String)",
    url: "setEmail(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "User",
    l: "setEmail(String)",
    url: "setEmail(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "User",
    l: "setFirstName(String)",
    url: "setFirstName(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "Movie",
    l: "setGenre(String)",
    url: "setGenre(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "Movie",
    l: "setId(Long)",
    url: "setId(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "Seat",
    l: "setId(Long)",
    url: "setId(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "User",
    l: "setId(Long)",
    url: "setId(java.lang.Long)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "Movie",
    l: "setImage(String)",
    url: "setImage(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "User",
    l: "setLastName(String)",
    url: "setLastName(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "Seat",
    l: "setMovieId(Long)",
    url: "setMovieId(java.lang.Long)"
  },
  { p: "com.msgroup.moviesurfer.model", c: "Seat", l: "setNumber(int)" },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "LoginRequest",
    l: "setPassword(String)",
    url: "setPassword(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "User",
    l: "setPassword(String)",
    url: "setPassword(java.lang.String)"
  },
  { p: "com.msgroup.moviesurfer.model", c: "Seat", l: "setReserved(boolean)" },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "User",
    l: "setRole(String)",
    url: "setRole(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtLoginSuccessResponse",
    l: "setSuccess(boolean)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "Movie",
    l: "setTitle(String)",
    url: "setTitle(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtLoginSuccessResponse",
    l: "setToken(String)",
    url: "setToken(java.lang.String)"
  },
  { p: "com.msgroup.moviesurfer", c: "UserTest", l: "testEmail()" },
  { p: "com.msgroup.moviesurfer", c: "UserTest", l: "testFirstName()" },
  { p: "com.msgroup.moviesurfer", c: "UserTest", l: "TestId()" },
  { p: "com.msgroup.moviesurfer", c: "UserTest", l: "testLastName()" },
  { p: "com.msgroup.moviesurfer", c: "MovieTest", l: "testMovieGenre()" },
  { p: "com.msgroup.moviesurfer", c: "MovieTest", l: "TestMovieId()" },
  { p: "com.msgroup.moviesurfer", c: "MovieTest", l: "testMovieImage()" },
  { p: "com.msgroup.moviesurfer", c: "MovieTest", l: "testMovieTitle()" },
  { p: "com.msgroup.moviesurfer", c: "UserTest", l: "TestPassword()" },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "Theater",
    l: "Theater()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtProvider",
    l: "TOKEN_PREFIX"
  },
  {
    p: "com.msgroup.moviesurfer.security",
    c: "JwtLoginSuccessResponse",
    l: "toString()"
  },
  {
    p: "com.msgroup.moviesurfer.exceptions",
    c: "UniqueEmailException",
    l: "UniqueEmailException(String)",
    url: "%3Cinit%3E(java.lang.String)"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "SeatService",
    l: "updateSeat(Seat)",
    url: "updateSeat(com.msgroup.moviesurfer.model.Seat)"
  },
  {
    p: "com.msgroup.moviesurfer.model",
    c: "User",
    l: "User()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.controller",
    c: "UserController",
    l: "UserController()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "CustomUserDetailsService",
    l: "userRole"
  },
  {
    p: "com.msgroup.moviesurfer.services",
    c: "UserService",
    l: "UserService()",
    url: "%3Cinit%3E()"
  },
  {
    p: "com.msgroup.moviesurfer",
    c: "UserTest",
    l: "UserTest()",
    url: "%3Cinit%3E()"
  }
];
