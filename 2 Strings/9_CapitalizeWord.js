function capitalizeWord(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
console.log(capitalizeWord("hello world"));
