export default (str: String, index: number, char: String) => {
  return str.substring(0, index) + char + str.substring(index + char.length);
}
