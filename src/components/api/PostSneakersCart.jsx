export const PostSneakersCart = async (sneakers, url) => {
  try {
    const resp = await fetch(url, {
      method: 'POST', // or PATCH
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(sneakers),
    })
    const data = await resp.json()
    return data
  } catch (e) {
    console.log(e)
  }
}
