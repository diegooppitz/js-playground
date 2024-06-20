const pattern_matcher = (country) => {
    let language;
  
    switch (country) {
      case 'Usa':
        language = 'English';
        break;
      case 'Brazil':
        language = 'Portuguese';
        break;
      case 'Spain':
        language = 'Spanish';
        break;
      case 'Italy':
        language = 'Italian';
        break;
      case 'France':
        language = 'French';
        break;
      case 'Germany':
        language = 'German';
        break;
      default:
        language = 'Country not found';
    }
  
    return language;
  };
  
  console.log(pattern_matcher('Usa'));    // English
  console.log(pattern_matcher('Brazil')); // Portuguese
  console.log(pattern_matcher('Spain'));  // Spanish
  console.log(pattern_matcher('Italy'));  // Italian
  console.log(pattern_matcher('France')); // French
  console.log(pattern_matcher('Germany'));// German
  console.log(pattern_matcher('Japan'));  // Country not found
  