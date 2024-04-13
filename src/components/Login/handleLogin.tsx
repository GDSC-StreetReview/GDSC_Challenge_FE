const handleLogin = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=email%20profile
  &response_type=code&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow`;
};

export default handleLogin;
