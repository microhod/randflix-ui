
async function getRandomTitle() {

  var resp

  try {
    resp = await fetch("http://localhost:8080/title/random?score_min=90", {
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    throw new Error("failed to get title, please try again later")
  }

  if (!resp?.ok) {
    var body = await resp.text()
    console.log(`status: ${resp.status}, message: ${body}`)
    throw new Error(body)
  }

  return resp.json()
}

export default getRandomTitle