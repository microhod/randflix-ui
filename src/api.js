
const defaultApiURL = "http://localhost:8080"

async function getRandomTitle() {

  var resp

  try {
    var apiBaseURL = process.env.VUE_APP_API_BASEURL ? process.env.VUE_APP_API_BASEURL : defaultApiURL
    resp = await fetch(`${apiBaseURL}/title/random?service=netflix`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    throw new Error("failed to get title, please try again later")
  }

  if (!resp?.ok) {
    var body = await resp.text()
    console.error(`status: ${resp.status}, message: ${body}`)
    throw new Error(body)
  }

  return (await resp.json())
}

export default getRandomTitle