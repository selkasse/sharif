import fetch from 'node-fetch'
import handleError from 'cli-handle-error'

const API_URL = `https://api.github.com/users/selkasse`

export default async () => {
  try {
    const res = await fetch(API_URL)
    const data = await res.json()

    const ghFollowers = data.followers
    console.log(
      `I have ${ghFollowers} followers on GitHub. Care to add another? 😃\n`
    )
  } catch (error) {
    handleError(`Unable to fetch GitHub data at this time`, error, false, false)
  }
}
