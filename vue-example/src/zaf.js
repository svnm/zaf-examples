import ZAFClient from 'zendesk_app_framework_sdk'
const zafClient = ZAFClient.init()

export const resize = () => {
  zafClient.invoke('resize', { width: '100%', height: '400px' })
}

export const getTicket = () => {
  return zafClient.get('ticket').then((response) => {
    return {ticket: response.ticket}
  }, (response) => {
    return `Error from zafClient ticket status: ${response.status}`
  })
}
