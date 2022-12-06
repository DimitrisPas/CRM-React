import { Link } from 'react-router-dom'
import PriorityDisplay from './PriorityDisplay'
import StatusDisplay from './StatusDisplay'
import DeleteBlock from './DeleteBlock'

const TicketCard = ({ color, ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-color" style={{ backgroundColor: color }}></div>
      <Link to={`/ticket/${ticket.documentId}`} id="link">
        <h3>{ticket.title}</h3>
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={Number(ticket.priority)} />
        <h3>{ticket.owner}</h3>
      </Link>
      <DeleteBlock documentId={ticket.documentId} />
    </div>
  )
}

export default TicketCard