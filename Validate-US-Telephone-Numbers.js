function telephoneCheck(str) {
  // regex to validate number (2 options for with and without parentheses)
  var re = /^(?:1\s?)?(?:\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if (str.match(re) === null) {
    return false;
  }
  return true;
}
// Examples
telephoneCheck("1 555-555-5555"); // returns true
telephoneCheck("1 (555) 555-5555"); // returns true
telephoneCheck("5555555555"); // returns true
telephoneCheck("555-555-5555"); // returns true
telephoneCheck("(555)555-5555"); // returns true
telephoneCheck("1(555)555-5555"); // returns true
telephoneCheck("555-5555"); // returns false
telephoneCheck("5555555"); // returns false
telephoneCheck("1 555)555-5555"); // returns false
telephoneCheck("1 555 555 5555"); // returns true
telephoneCheck("1 456 789 4444"); // returns true
telephoneCheck("123**&!!asdf#"); // returns false
telephoneCheck("55555555"); // returns false
telephoneCheck("(6505552368)"); // returns false
telephoneCheck("2 (757) 622-7382"); // returns false
telephoneCheck("0 (757) 622-7382"); // returns false
telephoneCheck("-1 (757) 622-7382"); // returns false
telephoneCheck("2 757 622-7382"); // returns false
telephoneCheck("10 (757) 622-7382"); // returns false
telephoneCheck("27576227382"); // returns false
telephoneCheck("(275)76227382"); // returns false
telephoneCheck("2(757)6227382"); // returns false
telephoneCheck("2(757)622-7382"); // returns false
telephoneCheck("555)-555-5555"); // returns false
telephoneCheck("(555-555-5555"); // returns false
telephoneCheck("(555)5(55?)-5555"); // returns false