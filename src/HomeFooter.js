import React from "react";
import {Container, Row, Column, FooterLink, Heading} from "./HomeFooterStyles";

function Footer() {
return (
	
	<Container disableGutters={true} maxWidth={false}>
		<Row>
		<Column>
			<Heading>CARS</Heading>
			<FooterLink href="#">How to Buy</FooterLink>
			<FooterLink href="#">Sell Your Car</FooterLink>
			<FooterLink href="#">Finance &amp; Insurance</FooterLink>
            <FooterLink href="#">Auctions &amp; Events</FooterLink>
            <FooterLink href="#">Buyer &amp; Seller Fees</FooterLink>
            <FooterLink href="#">Vehicle Sale Price History Tool</FooterLink>
            <FooterLink href="#">Shipping Costs</FooterLink>
		</Column>
		<Column>
			<Heading>FINANCE &amp; INSURANCE</Heading>
			<FooterLink href="#">Finance Homepage</FooterLink>
			<FooterLink href="#">Car &amp; Personal Finance</FooterLink>
			<FooterLink href="#">Loan Calculator</FooterLink>
			<FooterLink href="#">Car Insurance</FooterLink>
			<FooterLink href="#">Mechanical Breakdown Insurance</FooterLink>
			<FooterLink href="#">General Insurances</FooterLink>
            <FooterLink href="#">Truck Finance</FooterLink>
            <FooterLink href="#">Financial Information</FooterLink>
		</Column>
		<Column>
			<Heading>SEARCH FOR</Heading>
			<FooterLink href="#">Cars</FooterLink>
			<FooterLink href="#">Trucks &amp; Machinery</FooterLink>
			<FooterLink href="#">Damaged &amp; End of Life Cars</FooterLink>
            <FooterLink href="#">Boats &amp; Marine</FooterLink>
            <FooterLink href="#">Motorcycles &amp; Scooters</FooterLink>
            <FooterLink href="#">General Goods</FooterLink>
            <FooterLink href="#">Buses, Caravans &amp; Motorhomes</FooterLink>
            <FooterLink href="#">Turners Auction Schedule</FooterLink>
		</Column>
		<Column>
			<Heading>ABOUT US</Heading>
			<FooterLink href="#">Overview</FooterLink>
			<FooterLink href="#">Turners Careers</FooterLink>
            <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Turners Live</FooterLink>
            <FooterLink href="#">The Good Oil Blog</FooterLink>
            <FooterLink href="#">Email Alerts</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>   
		</Column>
		</Row>
	</Container>
);
};
export default Footer;