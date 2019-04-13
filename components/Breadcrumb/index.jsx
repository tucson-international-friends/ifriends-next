import Breadcrumb from "react-bootstrap/Breadcrumb";
import { withRouter } from "next/router";
import { getPageByRoute, getPageByName } from "../../lib/page";
import styles from "./breadcrumb.scss";

const BreadcrumWrapper = ({ router }) => {
	const activeRoute = getPageByRoute(router.route);
	const routes = [];
	let curRoute = activeRoute;
	while (curRoute) {
		routes.unshift(curRoute);
		curRoute = curRoute.parent && getPageByName(curRoute.parent.name);
	}
	return (
		<Breadcrumb className={styles.breadcrumb}>
			{routes.map((route) => {
				const active = route === activeRoute;
				const href = route.route;
				return (
					<Breadcrumb.Item
						active={active}
						key={route.name}
						href={!active && href}>{route.label}
					</Breadcrumb.Item>
				);
			})}
		</Breadcrumb>
	);
};

export default withRouter(BreadcrumWrapper);
