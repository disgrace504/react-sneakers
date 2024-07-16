export const fetchSneakers = async (url) => {
  try {
    const data = await fetch(url)
    const response = await data.json()
    return response
  } catch (e) {
    console.log(e)
  }
}
