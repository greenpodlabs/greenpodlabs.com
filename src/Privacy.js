import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Privacy.scss";

const Privacy = () => (
    <div>
        <Navbar fixed="top" variant="light" expand="lg">
            <Navbar.Brand href="/">
                <img
                    src="/assets/images/logo.png"
                    width="67"
                    height="67"
                    className="d-inline-block align-bottom"
                    alt="Greenpod Labs"
                />
                <h2 className="d-lg-inline-block d-none align-bottom">
                    GREENPOD <b>LABS</b>
                </h2>
            </Navbar.Brand>
        </Navbar>
        <Row id="privacy" className="top-margin">
            <Col md={{ span: 6, offset: 3 }}>
                <Row>
                    <Col className="text-center">
                        <h1 className="subheading">PRIVACY POLICY</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <h5>
                            <b>
                                This Privacy Policy applies to the{" "}
                                <a href="/">greenpodlabs.com</a>
                            </b>
                        </h5>
                        <br />
                        <p>
                            GreenPod Labs Private limited recognizes the
                            importance of maintaining your privacy. We value
                            your privacy and appreciate your trust in us. This
                            Policy describes how we treat user information we
                            collect on{" "}
                            <a href="/">https://www.greenpodlabs.com</a> and
                            other offline sources. This Privacy Policy applies
                            to current and former visitors to our website. By
                            visiting and/or using our website, you agree to this
                            Privacy Policy.
                        </p>
                        <p>
                            <a href="/">greenpodlabs.com</a> is a property of
                            GreenPod Labs Private Limited, an Indian Company
                            registered under the Shops &amp; Establishments Act,
                            2013 having its registered office at{" "}
                            <u>
                                D. NO 33/3 N. NO: 101, Muthiah Street Teynampet,
                                Chennai – 600018.
                            </u>
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <h5>
                            <b>Information we collect</b>
                        </h5>
                        <Table responsive="sm" borderless striped>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Contact Information.</b>
                                    </td>
                                    <td>
                                        We might collect your name, email, phone
                                        number, street, city, state, Pin code,
                                        country, and IP address.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Information you post.</b>
                                    </td>
                                    <td>
                                        We collect the information you post in a
                                        public space on our website or a
                                        third-party social media site belonging
                                        to greenpodlabs.com
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Demographic Information.</b>
                                    </td>
                                    <td>
                                        We may collect demographic information
                                        about you, events you like, events you
                                        intend to participate in, or any other
                                        information provided by you during the
                                        use of our website. We might collect
                                        this as a part of a survey or feedback
                                        as well.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Other Information.</b>
                                    </td>
                                    <td>
                                        If you use our website, we may collect
                                        information about your IP address and
                                        the browser you're using. We might look
                                        at what site you came from, the duration
                                        of time spent on our website, pages
                                        accessed, or what site you visit when
                                        you leave us. We might also collect the
                                        type of mobile device you are using, or
                                        the version of the operating system your
                                        computer or device is running.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We collect information in different
                                            ways.
                                        </b>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We collect information directly from
                                            you.
                                        </b>
                                    </td>
                                    <td>
                                        We collect information directly from you
                                        when you enquire about our products. We
                                        also collect information if you post a
                                        comment on our websites or ask us a
                                        question through phone or email.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We collect information from you
                                            passively.
                                        </b>
                                    </td>
                                    <td>
                                        We use tracking tools like Google
                                        Analytics, Google Webmaster, browser
                                        cookies, and web beacons for collecting
                                        information about your usage of our
                                        website.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We get information about you from
                                            third parties.
                                        </b>
                                    </td>
                                    <td>
                                        For example, if you use an integrated
                                        social media feature on our websites.
                                        The third-party social media site will
                                        give us certain information about you.
                                        This could include your name and email
                                        address.
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <h5>
                            <b>Use of your personal information</b>
                        </h5>
                        <Table responsive="sm" borderless striped>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>
                                            We use the information to contact
                                            you.
                                        </b>
                                    </td>
                                    <td>
                                        We might use the information you provide
                                        to contact you for confirmation of a
                                        purchase on our website or other
                                        promotional purposes.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We use the information to respond to
                                            your requests or questions.
                                        </b>
                                    </td>
                                    <td>
                                        We might use your information to revert
                                        to your queries.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We use the information to improve
                                            our products and services.
                                        </b>
                                    </td>
                                    <td>
                                        We might use your information to
                                        customize your experience with us. This
                                        could include displaying content based
                                        on your preferences.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We use the information to look at
                                            site trends and customer interests.
                                        </b>
                                    </td>
                                    <td>
                                        We may use your information to make our
                                        website and products better. We may
                                        combine information we get from you with
                                        information about you we get from third
                                        parties.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We use the information for security
                                            purposes.
                                        </b>
                                    </td>
                                    <td>
                                        We may use the information to protect
                                        our company, our customers, or our
                                        websites.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We use the information for marketing
                                            purposes.
                                        </b>
                                    </td>
                                    <td>
                                        We might send you information about new
                                        features or products
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We use information as otherwise
                                            permitted by law.
                                        </b>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col md={12}>
                        <h5>
                            <b>Sharing of information with third-parties</b>
                        </h5>
                        <Table responsive="sm" borderless striped>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>
                                            We may share information if we think
                                            we have to comply with the law or to
                                            protect ourselves.
                                        </b>
                                    </td>
                                    <td>
                                        We will share information to respond to
                                        a court order or subpoena. We may also
                                        share it if a government agency or
                                        investigatory body requests it. Or, we
                                        might also share information when we are
                                        investigating potential fraud.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We may share information with any
                                            successor to all or part of our
                                            business.
                                        </b>
                                    </td>
                                    <td>
                                        For example, if part of our business is
                                        sold we may give our customer list as
                                        part of that transaction.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>
                                            We may share your information for
                                            reasons not described in this
                                            policy.
                                        </b>
                                    </td>
                                    <td>We will tell you before we do this.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <h5>
                            <b>Email Opt-Out</b>
                        </h5>
                        <p>
                            <b>
                                You can opt-out of receiving our newsletter
                                emails.
                            </b>{" "}
                            To stop receiving our newsletter emails, please
                            email{" "}
                            <a href="mailto:info@greenpodlabs.com">
                                info@greenpodlabs.com
                            </a>
                            . It may take about ten days to process your
                            request. Even if you opt-out of getting messages, we
                            will still be sending you inquiry messages.
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <h5>
                            <b>Third-party sites</b>
                        </h5>
                        <p>
                            If you click on one of the links to third-party
                            websites, you may be taken to websites we do not
                            control. This policy does not apply to the privacy
                            practices of those websites. Read the privacy policy
                            of other websites carefully. We are not responsible
                            for these third-party sites.
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <h5>
                            <b>Grievance Officer</b>
                        </h5>
                        <address>
                            <b>Mr.Vijayanand</b>
                            <br />
                            D. NO 33/3 N. NO: 101, Muthiah Street Teynampet,
                            Chennai – 600018
                            <br />
                            Email:{" "}
                            <a href="mailto:info@greenpodlabs.com">
                                info@greenpodlabs.com
                            </a>
                        </address>
                        <p>
                            If you have any questions about this Policy or other
                            privacy concerns, you can also email us at{" "}
                            <a href="mailto:info@greenpodlabs.com">
                                info@greenpodlabs.com
                            </a>
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <h5>
                            <b>Updates to this policy</b>
                        </h5>
                        <p>
                            This Privacy Policy was last updated on{" "}
                            <b>05.01.2022.</b>
                            From time to time we may change our privacy
                            practices. We will notify you of any material
                            changes to this policy as required by law. We will
                            also post an updated copy on our website. Please
                            check our site periodically for updates.
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <h5>
                            <b>Jurisdiction</b>
                        </h5>
                        <p>
                            If you choose to visit the website, your visit and
                            any dispute over privacy are subject to this Policy
                            and the website&#39;s terms of use. In addition to
                            the foregoing, any disputes arising under this
                            Policy shall be governed by the laws of India and in
                            Chennai jurisdiction.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
);

export default Privacy;
