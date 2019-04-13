import Table from "react-bootstrap/Table";
import { wrapFormatValue } from "../../lib/common/format";
import styles from "./styles.scss";

const EventListItem = ({ event, columns }) => (
	<tr key={`row-${event.name}`}>
		{columns.map(column => <td key={`${event.name}-${column.name}`}>{wrapFormatValue(event[column.name], column.format)}</td>)}
	</tr>
);

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
