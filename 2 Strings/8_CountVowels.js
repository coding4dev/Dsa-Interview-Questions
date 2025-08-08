function countVowels(str) {
  let vowels = "aeiouAEIOU";
  return [...str].filter((char) => vowels.includes(char)).length;
}

console.log(countVowels("abhishek"));
