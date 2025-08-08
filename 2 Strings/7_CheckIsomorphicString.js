function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map1 = {},
    map2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (map1[str1[i]] !== map2[str2[i]]) return false;
    map1[str1[i]] = i;
    map2[str2[i]] = i;
  }
  return true;
}
console.log(isIsomorphic("add", "eeg"));
