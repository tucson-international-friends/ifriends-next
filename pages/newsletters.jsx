import React, { Component } from "react";
import { Document, Page } from 'react-pdf';
import MainLayout from "../layout/main";
import { useCallback, useState, useMemo } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { Container, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PDF = ({ windowWidth }) => {

	const [state, setState] = useState({
		numPages: null,
		pageNumber: 1
	});
	const { width, height } = useWindowSize();
	const onDocumentLoadSuccess = useCallback(({ numPages }) => {
		setState({
			...state,
			numPages
		});
	});
	const { numPages, pageNumber } = state;

	const [containedWidth, containedHeight] = useMemo(() => {
		const singlePage = pageNumber === 1 || pageNumber === numPages;
		let w = width;
		let h = height;
		if (width >= 1440) {
			w = singlePage ? 600 : 1200;
		}
		else if (width >= 1024) {
			w = singlePage ? 500 : 1000;
		}
		else if (width >= 850) {
			w = singlePage ? 400 : 800;
		}
		h = height - 200;
		if (h < 300) {
			h = undefined;
		}
		return [w, h];
	});

	return <>
		<ButtonToolbar className="p-2" aria-label="Toolbar with button groups">
			<ButtonGroup className="mr-2" aria-label="First group">
				<Button disabled={pageNumber === 1} onClick={() => {
					setState({
						numPages,
						pageNumber: pageNumber - 1
					});
				}}><FaArrowLeft /></Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button disabled={pageNumber === numPages} onClick={() => {
					setState({
						numPages,
						pageNumber: pageNumber + 1
					});
				}}><FaArrowRight /></Button>
			</ButtonGroup>
		</ButtonToolbar>
		Page {pageNumber} of {numPages}
		<Document
			className="mx-auto"
			file="newsletters/SP2020.pdf"
			onLoadSuccess={onDocumentLoadSuccess}
		>
			<Page pageNumber={pageNumber} height={containedHeight} width={containedWidth} />
		</Document>
	</>;
};

const NewsLetters = () => {
	return <MainLayout>
		<Container style={{
			paddingTop: "10em",
			paddingBottom: "10em"
		}}>
			<h1>Newsletters</h1>
			<div className="py-4">
				<h2>Spring 2020</h2>
				<a className="btn btn-primary" target="_blank" href="/newsletters/SP2020.pdf" >View PDF</a>
			</div>
			<PDF />
		</Container>
	</MainLayout>;
};

export default NewsLetters;