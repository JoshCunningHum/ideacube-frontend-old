// Yeah I know
export default async (ms = 0) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
