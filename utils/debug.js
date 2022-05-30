import alert from 'sharif-cli-alerts'

export default (isDebug, cli) => {
  if (!isDebug) {
    return
  }

  alert({
    type: `warning`,
    msg: ` DEBUG ⬇️ `,
  })
  console.log(`input`, input)
  console.log(`flags`, flags)
  console.log()
}
