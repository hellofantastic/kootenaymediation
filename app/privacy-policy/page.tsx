import { Metadata } from "next";
import { SectionWrapper } from "../_components/SectionWrapper/SectionWrapper";
import "./privacy.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Kootenay Mediation",
  description: "Kootenay Mediation Privacy Policy [age regarding user rights and data",
  robots: "noindex,nofollow",
};

export default function Privacy() {
  return (
    <main className="privacy">
      <SectionWrapper width={800}>
        <h1>Privacy Policy</h1>
        <h2>Privacy Policy for kootenaymediation.ca </h2>
        <ul>
          <li>Type of website: Informational</li>
          <li> Effective date: 1st day of Sepetember, 2023 </li>
        </ul>
        <p>kootenaymediation.ca (the "Site") is owned and operated by Judah Harrison Barrister & Solicitor. Judah Harrison is the data controller and can be contacted at: jh@jhlo.ca</p>

        <h2>Purpose</h2>
        <p>The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:</p>
        <ul>
          <li>The personal data we will collect;</li>
          <li>Use of collected data;</li>
          <li>Who has access to the data collected; and</li>
          <li>The rights of Site users.</li>
        </ul>
        <p>This Privacy Policy applies in addition to the terms and conditions of our Site.</p>

        <h2>GDPR</h2>
        <p>For users in the European Union, we adhere to the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016, known as the General Data Protection Regulation (the "GDPR").</p>
        <p>For users in the United Kingdom, we adhere to the GDPR as enshrined in the Data Protection Act 2018.</p>
        <p>We have not appointed a Data Protection Officer as we do not fall within the categories of controllers and processors required to appoint a Data Protection Officer under Article 37 of the GDPR.</p>

        <h2>Consent</h2>
        <p>By using our Site users agree that they consent to: </p>
        <ul>
          <li>The conditions set out in this Privacy Policy.</li>
        </ul>
        <p>
          When the legal basis for us processing your personal data is that you have provided your consent to that processing, you may withdraw your consent at any time. If you withdraw your consent, it will not make processing which we completed
          before you withdrew your consent unlawful.
        </p>
        <p>
          You can withdraw your consent by: Contacting us at{" "}
          <a className="privacy" href="mailto:privacy@kootenaymediation.ca?subject=Remove Consent">
            privacy@kootenaymediation.ca
          </a>
        </p>

        <h2>Legal Basis for Processing</h2>
        <p>We collect and process personal data about users in the EU only when we have a legal basis for doing so under Article 6 of the GDPR. </p>
        <p>We rely on the following legal basis to collect and process the personal data of users in the EU: Users have provided their consent to the processing of their data for one or more specific purposes.</p>

        <h2>Personal Data We Collect</h2>
        <p>We only collect data that helps us achieve the purpose set out in this PrivacyPolicy. We will not collect any additional data beyond the data listed below without notifying you first.</p>
        <h3>
          <u>Data Collected Automatically</u>
        </h3>
        <p>When you visit and use our Site, we may automatically collect and store the following information:</p>
        <ol>
          <li>Location;</li>
          <li>Hardware and software details;</li>
          <li>Clicked links; and</li>
          <li>Content viewed.</li>
        </ol>
        <br />
        <h3>
          <u>Data Collected in a Non-Automatic Way</u>
        </h3>
        <p>We may also collect the following data when you perform certain functions on our Site:</p>
        <ol>
          <li>First and last name;</li>
          <li>Email address;</li>
          <li>Phone number; and</li>
          <li>Message.</li>
        </ol>
        <p>This data may be collected using the following methods:</p>
        <ol>
          <li>Voluntary Contact Form.</li>
        </ol>
        <br />

        <h2>How We Use Personal Data</h2>
        <p>Data collected on our Site will only be used for the purposes specified in this Privacy Policy or indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in this Privacy Policy. </p>
        <p>The data we collect automatically is used for the following purposes:</p>
        <ol>
          <li>To measure content effectiveness for best Site engagement and user experience.</li>
        </ol>
        <p>The data we collect in a non-automatic way is used for the following purposes:</p>
        <ol>
          <li>Communication.</li>
        </ol>
        <br />

        <h2>Who We Share Personal Data With</h2>
        <p>We will not sell or share your data with other third parties, except in the following cases:</p>
        <ul>
          <li>If the law requires it;</li>
          <li>If it is required for any legal proceeding;</li>
          <li>To prove or protect our legal rights; and</li>
          <li>To buyers or potential buyers of this company in the event that we seek to sell the company.</li>
        </ul>
        <p>If you follow hyperlinks from our Site to another Site, please note that we are not responsible for and have no control over their privacy policies and practices. </p>

        <h2>How Long We Store Personal Data</h2>
        <p>User data will be stored until the purpose the data was collected for has been achieved. You will be notified if your data is kept for longer than this period.</p>

        <h2>How Long We Store Personal Data</h2>
        <p>
          In order to protect your security, we use the strongest available browser encryption and store all of our data on servers in secure facilities. All data is only accessible to our employees. Our employees are bound by strict confidentiality
          agreements and a breach of this agreement would result in the employee's termination.
        </p>
        <p>
          While we take all reasonable precautions to ensure that user data is secure and that users are protected, there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore we are unable to guarantee the
          security of user data beyond what is reasonably practical.
        </p>

        <h2>Your Rights as a User</h2>
        <p>Under the GDPR, you have the following rights: </p>
        <ul>
          <li>Right to be informed;</li>
          <li>Right of access;</li>
          <li>Right to rectification;</li>
          <li>Right to erasure;</li>
          <li>Right to restrict processing; </li>
          <li>Right to data portability; and </li>
          <li>Right to object. </li>
        </ul>

        <h2>Children</h2>
        <p>
          We do not knowingly collect or use personal data from children under 16 years of age. If we learn that we have collected personal data from a child under 16 years of age, the personal data will be deleted as soon as possible. If a child
          under 16 years of age has provided us with personal data their parent or guardian may contact our privacy officer.
        </p>

        <h2>How to Access, Modify, Delete, or Challenge the Data Collected</h2>
        <p>
          If you would like to know if we have collected your personal data, how we have used your personal data, if we have disclosed your personal data and to who we disclosed your personal data, if you would like your data to be deleted or
          modified in any way, or if you would like to exercise any of your other rights under the GDPR, please contact our privacy officer here:{" "}
          <a className="privacy" href="mailto:privacy@kootenaymediation.ca?subject=Access or Challenge the Data Collected">
            privacy@kootenaymediation.ca
          </a>{" "}
        </p>

        <h2>Do Not Track Notice</h2>
        <p>Do Not Track ("DNT") is a privacy preference that you can set in certain web browsers. We do not track the users of our Site over time and across third party websites and therefore do not respond to browser-initiated DNT signals.</p>

        <h2>Cookie Policy</h2>
        <p>
          A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect data relating to the user's browsing habits. You can choose to be notified each time a cookie is transmitted. You can also choose to disable
          cookies entirely in your internet browser, but this may decrease the quality of your user experience.
        </p>
        <p>We use the following types of cookies on our Site:</p>
        <ol>
          <li>
            <u>Third-Party Cookies</u>
            <p>Third-party cookies are created by a website other than ours. We may use third-party cookies to achieve the following purposes:</p>
            <ol type="a">
              <li>Analytical cookies allow us to improve the design and functionality of our Site by collecting data on how you access our Site, for example data on the content you access, how long you stay on our Site, etc;</li>
            </ol>
          </li>
        </ol>
        <h2>Modifications</h2>
        <p>
          This Privacy Policy may be amended from time to time in order to maintain compliance with the law and to reflect any changes to our data collection process. When we amend this Privacy Policy we will update the "Effective Date" at the top of
          this Privacy Policy. We recommend that our users periodically review our Privacy Policy to ensure that they are notified of any updates. If necessary, we may notify users by email of changes to this Privacy Policy.
        </p>

        <h2>Complaints</h2>
        <p>If you have any complaints about how we process your personal data, please contact us through the contact methods listed in the Contact Information section so that we can, where possible, resolve the issue.</p>
        <p>
          If you feel we have not addressed your concern in a satisfactory manner you may contact a supervisory authority. You also have the right to directly make a complaint to a supervisory authority. You can lodge a complaint with a supervisory
          authority by contacting us directly
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions, concerns or complaints, you can contact us, Kootenay Mediation at:&nbsp;
          <a className="privacy" href="mailto:privacy@kootenaymediation.ca?subject=Questions, Concerns or Complaints">
            privacy@kootenaymediation.ca
          </a>{" "}
        </p>
      </SectionWrapper>
    </main>
  );
}
