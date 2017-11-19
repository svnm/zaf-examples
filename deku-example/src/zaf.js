import ZAFClient from 'zendesk_app_framework_sdk'
const zafClient = ZAFClient.init()

export const resize = () => {
  zafClient.invoke('resize', { width: '100%', height: '400px' })
}

export const getTicket = () => {
  return zafClient.get('ticket').then((response) => {
    const subject = response.ticket.subject
    return {ticket: {subject}}
  }, (response) => {
    return `Error from zafClient ticket status: ${response.status}`
  })
}

export const getUser = () => {
  return zafClient.get('currentUser').then((response) => {
    const name = response.currentUser.name
    const avatarUrl = response.currentUser.avatarUrl
    return {user: {name, avatarUrl}}
  }, (response) => {
    return `Error from zafClient currentUser status: ${response.status}`
  })
}

export const getRequester = () => {
  return zafClient.get('ticket.requester.id').then((data) => {
    return zafClient.request(
      {url: `/api/v2/users/${data['ticket.requester.id']}.json`, type: 'GET', dataType: 'json'}
    )
    .then((response) => {
      const name = response.user.name
      const avatarUrl = response.user.photo.content_url
      return {requester: {name, avatarUrl}}
    }, (response) => {
      return `Error from zafClient ticket.requester status: ${response.status}`
    })
  })
}
