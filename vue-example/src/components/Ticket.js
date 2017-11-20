/** @jsx element */

import { element } from 'deku'

const render = ({props}) => {
  const {requester, user, ticket} = props
  return (
    <div class='ticket'>
      {requester && ticket && <div>
        <p class='subject'>{ticket.subject}</p>
        <div class='name'>
          { requester.avatarUrl && <img class='user-image' src={requester.avatarUrl} />}
          { requester.name && <p>{requester.name}</p>}
        </div>
      </div>}
      <hr />
      {user && <div>
        <div class='name'>
          { user.avatarUrl && <img class='user-image' src={user.avatarUrl} />}
          { user.name && <p>{user.name}</p>}
        </div>
      </div>}
    </div>
  )
}

export default {render}
