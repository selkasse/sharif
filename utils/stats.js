import fetch from 'node-fetch'
import ora from 'ora'
import handleError from 'cli-handle-error'

const API_URL = `https://api.github.com/users/selkasse`
const spinner = ora({ text: `` })

export default async () => {
  spinner.start(`Fetching GitHub followers...`)
  try {
    const res = await fetch(API_URL)
    const data = await res.json()
    const ghFollowers = data.followers
    spinner.stop()
    console.log(
      `I have ${ghFollowers} followers on GitHub. Care to add another? 😃\n`
    )
  } catch (error) {
    spinner.stop()
    handleError(`Unable to fetch GitHub data at this time`, error, false, false)
  }
}
