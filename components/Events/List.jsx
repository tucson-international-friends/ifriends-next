import Table from "react-bootstrap/Table";
import { FaLink } from "react-icons/fa";
import { wrapFormatValue } from "../../lib/common/format";

const eventColumns = [
  {
    name: "name",
    label: "Event",
  },
  {
    name: "when",
    label: "When",
  },
  {
    name: "location",
    label: "Where",
  },
];

const EventListItem = ({ event }) => {
  const columns = eventColumns;
  const row = columns.map((column) => {
    const formatted = wrapFormatValue(event[column.name], column.format);
    return (
      <td key={`${event.key || event.name}-${column.name}`}>
        {event.url && column.name === "name" ? (
          <a href={event.url}>
            {formatted}
            <FaLink className="mx-1" />
          </a>
        ) : (
          formatted
        )}
      </td>
    );
  });
  if (event.placeholder) {
    row.splice(
      0,
      3,
      <td colSpan={3} key={`${event.name}-placeholder`}>
        {event.placeholder}
      </td>,
    );
  }
  return <tr key={`row-${event.key || event.name}`}>{row}</tr>;
};

const EventList = ({ events }) => (
  <Table striped className="table">
    <thead>
      <tr>
        {eventColumns.map((column) => (
          <th key={`head-${column.name}`}>{column.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>{events.map((event) => EventListItem({ event }))}</tbody>
  </Table>
);

export default EventList;
