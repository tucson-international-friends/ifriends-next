import Image from "react-bootstrap/Image";

import styles from "./styles.scss";


const Contact = ({ firstName, lastName, title, profileImg }) => (
	<div className={styles.contact}>
		<div className={styles.profilePictureWrapper}>
			<Image className={styles.profilePicture} src={`https://via.placeholder.com/150?text=${firstName[0] + lastName[0]}`} roundedCircle />
		</div>
		<p>{firstName} {lastName}</p>
		<h6>{title}</h6>
	</div>
);

export default Contact;
