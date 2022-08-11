
export function getDate(timestamp) {
    const date = new Date(timestamp)
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return  "" + time  + " | " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
  }