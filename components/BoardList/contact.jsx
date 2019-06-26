import Image from "react-bootstrap/Image";

import styles from "./boardList.scss";


const Contact = ({ firstName, lastName, title, profileImg }) => (
	<div className={styles.contact}>
		<div className={styles.profilePictureWrapper}>
			<Image className={styles.profilePicture} src={profileImg || `https://via.placeholder.com/150?text=${firstName[0] + lastName[0]}`} roundedCircle />
		</div>
		<h6>{firstName} {lastName}</h6>
		<p>{title}</p>
	</div>
);

export default Contact;
