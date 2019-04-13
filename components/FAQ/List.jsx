import FAQ from "./FAQ";

// eslint-disable-next-line react/no-array-index-key
const FAQList = ({ data }) => <div className="mb-5">{data.map((faq, i) => <FAQ key={i} data={faq} />)}</div>;

export default FAQList;
