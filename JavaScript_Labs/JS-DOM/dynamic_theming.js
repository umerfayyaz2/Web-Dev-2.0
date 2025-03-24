// Step 1: Define themes
const themes = {
    light: {
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'gray'
    },
    dark: {
      backgroundColor: 'black',
      color: 'white',
      borderColor: 'lightgray'
    }
  };
  
  // Step 2: Apply a theme
  function applyTheme(themeName) {
    const body = document.body;
    const theme = themes[themeName];
  
    if (theme) {
      body.style.backgroundColor = theme.backgroundColor;
      body.style.color = theme.color;
      body.style.border = `1px solid ${theme.borderColor}`;
    }
  }
  
  // Step 3: Add buttons to switch themes
  document.getElementById('lightThemeButton').addEventListener('click', () => applyTheme('light'));
  document.getElementById('darkThemeButton').addEventListener('click', () => applyTheme('dark'));