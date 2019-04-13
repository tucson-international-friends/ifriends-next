import styles from "./testimonial.scss";

const Testimonial = ({ quote, from, source }) => (
	<blockquote className={`blockquote ${styles.blockquote}`}>
		<p>{quote}</p>
		{from && <footer className="blockquote-footer">{from}{source && " in "}{source && <cite title={source}>{source}</cite>}</footer>}
	</blockquote>
);

export default Testimonial;
