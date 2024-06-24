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
      case 'Germany':
        return 'German';
      default:
        return 'Not found';
    }
  };
  
  console.log(pattern_matcher('Usa'));
  console.log(pattern_matcher('Brazil'));
  console.log(pattern_matcher('Spain'));
  console.log(pattern_matcher('Germany'));
  console.log(pattern_matcher('Other'));