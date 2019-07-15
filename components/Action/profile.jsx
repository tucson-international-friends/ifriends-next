import { NavDropdown, Image } from "react-bootstrap";
import { useGlobal } from "reactn";
import { useEffect, useCallback } from "react";
import firebase from "../../lib/firebase";

const Profile = () => {
	const [profile, setProfile] = useGlobal("profile");
	useEffect(() => {
		setProfile(firebase.auth().currentUser);
	}, [firebase.auth().currentUser]);
	const handleLogout = useCallback(
		() => {
			firebase.auth().signOut();
		},
		[],
	);
	if (profile) {
		return (
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Image
					fluid
					style={{
						height: 36,
						width: 36
					}}
					roundedCircle
					src="http://res.cloudinary.com/simpleview/image/upload/v1553790432/clients/simpleview/Youhao_Wei_81557218-47dc-4ae1-a41e-b10b70880b8e.jpg" />
				<NavDropdown title={profile.displayName || "Profile"} id="basic-nav-dropdown">
					<NavDropdown.Item onClick={handleLogout}>
			Logout
					</NavDropdown.Item>
				</NavDropdown>
			</div>
		);
	}
	return null;
};

export default Profile;
