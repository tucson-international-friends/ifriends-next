import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Component } from "react";
import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock, { VARIANTS } from "../components/TextBlock";
import ImageTextBlock, { COLORS } from "../components/ImageTextBlock";
import { ACTIONS } from "../components/Action";

export default class Index extends Component {
	render() {
		const { sections, banner } = this.props;
		return <MainLayout />;
	}
}
