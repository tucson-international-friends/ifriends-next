import Image from "react-bootstrap/Image";


const Contact = ({ firstName, lastName, title, profileImg }) => (
	<div className="contact">
		<div className="profilePictureWrapper">
			<Image className="profilePicture" src={profileImg || `https://via.placeholder.com/150?text=${firstName[0] + lastName[0]}`} roundedCircle />
		</div>
		<h6>{firstName} {lastName}</h6>
		<p>{title}</p>
	</div>
);

export default Contact;
