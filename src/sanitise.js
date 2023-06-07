export function sanitiseInput(input) {
  const regex = /[&<>"']/g;

  const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
  };

  // replace() function iterates through each match in the regex and returns the matching character
  // then uses this to look up the replacement in the replacements object
  const sanitisedInput = input.replace(
    regex,
    match => replacements[match] || ''
  );

  return sanitisedInput;
}
