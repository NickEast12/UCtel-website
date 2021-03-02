import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';

const PolicyStyles = styled.main`
  width: 100%;
  .wrapper {
    width: 90%;
    margin: 0 auto;
    padding-top: 5rem;
    padding-bottom: 2rem;
    h1 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
      line-height: 1.5rem;
    }
    section {
      h3 {
        margin-bottom: 1rem;
      }
      span {
        color: var(--lightBlue);
        text-decoration: underline;
      }
    }
    @media only screen and (min-width: 768px) {
      padding-top: 7rem;
      max-width: 1100px;
    }
  }
`;
const PrivacyPolicy = ({ pageContext }) => (
  <Layout alt pageContext={pageContext}>
    <SEO />
    <PolicyStyles>
      <div className="wrapper">
        <h1>Privacy Policy</h1>
        <p>
          We are committed to protecting your privacy and maintaining the
          security of any personal information you provide us with. This
          statement outlines how we ensure this and how we comply with
          legislation on data protection.
        </p>
        <p>
          This Privacy Policy will explain any areas of our website which may
          affect your privacy and personal details, how they are processed,
          collected, managed, and stored, and how your rights under the new GDPR
          (General Data Protection Regulations) are protected.
        </p>
        <section>
          <h3>1: Information we collect</h3>
          <p>
            We may collect personal information from you in order to fulfil your
            service requests. This includes email addresses, personal name,
            postal address, and contact numbers. Any personal information used
            is for the operation and fulfilment of a service requested by you.
          </p>
          <p>
            Under the Data Protection Act 1998 and the General Data Protection
            Regulations 2018, you have the right to review any personal
            information provided to us at any time. This includes reviewing for
            correctness, requesting correction of errors, that information
            cannot be used to contact you, that information be deleted from our
            records, and to opt-out of communication. We do not store credit
            card details, nor do we sell, rent or share customer details with
            any third party for commercial reasons.
          </p>
        </section>
        <section>
          <h3>2: Keeping your information secure</h3>
          <p>
            Our servers are protected using HTTPS and SSL technology. Any data
            provided by you to us will be as secure as it can be. We are fully
            aware of our responsibilities regarding data under the Data
            Protection Act 1998 and the General Data Protection Regulation 2018.
          </p>
          <p>
            If we ask an external organisation to provide a service for us we
            will always ensure that they have appropriate security measures in
            place.
          </p>
        </section>
        <section>
          <h3>3. Social media profiles</h3>
          <p>
            We may use official profiles on social media channels. We advise our
            users to verify the legitimacy of any profile pertaining to be our
            company before interacting with them. Our social media profiles will
            never ask for user passwords or personal details.
          </p>
          <p>
            If we provide a social media service for you then you are advised to
            read the Privacy Policy of that services. The social media
            businesses that we interact with include Facebook, Instagram,
            Twitter, and Pinterest.
          </p>
        </section>
        <section>
          <h3>4. External web links</h3>
          <p>
            This website contains links to external websites. We are not
            responsible for the privacy practices or the content on these sites.
            Our users are encouraged to be aware that when they leave this
            website they should read the privacy policy and spam policies of
            each website that collects personal data. This Privacy Policy
            applies only to the information collected by us.
          </p>
        </section>
        <section>
          <h3>5. SPAM policy</h3>
          <p>
            We are strongly against spam. We only contact our customers when
            they have requested to receive communication or there is a need to
            update you on information about services you have requested from us.
          </p>
        </section>
        <section>
          <h3>6. Other notices</h3>
          <p>
            We retain personal information for the period necessary to fulfil
            the services requested unless a longer retention period is permitted
            or required by law. If you have any questions about our Privacy
            Policy, do not hesitate to{' '}
            <span>
              <Link to="/contact">contact us</Link>
            </span>
            . We may revise our Privacy Policy from time to time. Any changes
            that occur will be posted on the Privacy Policy page of our website.
            This latest revision comes as a result of our ongoing efforts to be
            transparent and to comply fully with new data protection
            regulations. All changes will be effective immediately. By
            continuing as a client with us you are bound to the revised Privacy
            Policy. This Privacy Policy was last revised in November 2020.
          </p>
        </section>
      </div>
    </PolicyStyles>
  </Layout>
);

export default PrivacyPolicy;
