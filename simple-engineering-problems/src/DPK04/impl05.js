const pattern_matcher = (country) => {
    switch (country) {
      case 'Usa':
        return 'English';
      case 'Brazil':
        return 'Portuguese';
      case 'Spain':
        return 'Spanish';
      case 'Italy':
        return 'Italian';
      case 'Japan':
        return 'Japanese';
      case 'France':
        return 'French';
      case 'Germany':
        return 'German';
      default:
        return 'Country not found';
    }
  };
  
  console.log(pattern_matcher('Usa'));    // English
  console.log(pattern_matcher('Brazil')); // Portuguese
  console.log(pattern_matcher('Spain'));  // Spanish
  console.log(pattern_matcher('Italy'));  // Italian
  console.log(pattern_matcher('France')); // French
  console.log(pattern_matcher('Germany'));// German
  console.log(pattern_matcher('Japan'));  // Japanese
  console.log(pattern_matcher('Other'));  // Country not found
  