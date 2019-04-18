import Table from "react-bootstrap/Table";
import { wrapFormatValue } from "../../lib/common/format";
import styles from "./styles.scss";

const EventListItem = ({ event, columns }) => {
	const row = columns.map(column => <td key={`${event.key || event.name}-${column.name}`}>{wrapFormatValue(event[column.name], column.format)}</td>);
	if (!event.startDatetime) {
		row.splice(1, 1, <td key={`${event.name}-start`}>TBA</td>);
	}
	if (event.placeholder) {
		row.splice(0, 3, <td colSpan={3} key={`${event.name}-placeholder`}>{event.placeholder}</td>);
	}
	return (
		<tr key={`row-${event.key || event.name}`}>
			{row}
		</tr>
	);
};

const EventList = ({ events, columns }) => (
	<Table striped className={styles.table}>
		<thead>
			<tr>
				{columns.map(column => <th key={`head-${column.name}`}>{column.label}</th>)}
			</tr>
		</thead>
		<tbody>
			{events.map(event => EventListItem({ event, columns }))}
		</tbody>
	</Table>
);

export default EventList;
