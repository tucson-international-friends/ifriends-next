import { NavDropdown, Image } from "react-bootstrap";
import { useGlobal } from "reactn";
import { useCallback } from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import firebase from "../../lib/firebase";

const Profile = () => {
	const [user] = useGlobal("user");
	const handleLogout = useCallback(
		() => {
			firebase.auth().signOut();
		},
		[],
	);
	if (user) {
		const { displayName = "Manage", photoURL } = user;
		const profileStyle = {
			height: 36,
			width: 36
		};
		return (
			<div style={{ display: "flex", flexDirection: "row" }}>
				{photoURL
					? (
						<Image
							alt="profile"
							fluid
							style={profileStyle}
							roundedCircle
							src={photoURL} />
					) : (
						<FaUserCircle
							style={profileStyle}
							color="#90afc1" />
					)
				}
				<NavDropdown title={displayName || "Manage"} id="basic-nav-dropdown">
					<NavDropdown.Divider />
					<NavDropdown.Item
						onClick={handleLogout}><FaSignOutAlt /><b>SIGN OUT</b>
					</NavDropdown.Item>
				</NavDropdown>
			</div>
		);
	}
	return null;
};

export default Profile;
