import Image from "react-bootstrap/Image";
import { getStorageMediaUrl } from "../../lib/image";


const Contact = ({ firstName, lastName, title, profileImg, profileUrl, name }) => (
	<div className="contact">
		<div className="profilePictureWrapper">
			<Image
				alt={`${name ?? `${firstName} ${lastName}`}`}
				className="profilePicture"
				src={profileImg ? getStorageMediaUrl(profileImg)
					: profileUrl ?? `https://via.placeholder.com/150?text=${firstName[0] + lastName[0]}`}
				roundedCircle />
		</div>
		<h6>{name ? name : `${firstName} ${lastName}`}</h6>
		<p>{title}</p>
	</div>
);

export default Contact;
