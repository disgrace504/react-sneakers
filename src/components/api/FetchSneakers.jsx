export const FetchSneakers = async (url) => {
  try {
    const data = await fetch(url)
    const resp = await data.json()
    return resp
  } catch (e) {
    console.log(e)
  }
}
