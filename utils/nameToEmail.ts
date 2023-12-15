export default (firstname: string, lastname: string) => {
  return `${firstname.split(' ').join('').toLowerCase()}.${lastname.split(' ').join('').toLowerCase()}`
}
