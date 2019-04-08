import Table from "react-bootstrap/Table";

const EventListItem = (event, columns) => (
	<tr>
		{columns.map(column => <td>{wrapFormatValue(event[column.name], column.format)}</td>)}
	</tr>
);

const EventList = (events, columns) => (
	<Table striped>
		<thead>
			{columns.map(column => <th>{column.label}</th>)}
		</thead>
		<tbody>
			{events.map(event => EventListItem(event, columns))}
		</tbody>
	</Table>
);

export default EventList;
