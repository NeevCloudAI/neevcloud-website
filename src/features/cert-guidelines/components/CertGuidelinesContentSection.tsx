import Container from "@/shared/components/container";
import { Li, List, Text } from "@/shared/ui-lib";

const CertGuidelinesContentSection = () => {
  return (
    <section className=" bg-cloud-gray py-8 md:py-16 2xl:py-25">
      <Container className="flex gap-5 flex-col text-gray-05 justify-center max-w-5xl">
        <List variant="legal">
          <Li>
            20(3)/2022-CERT-In Government of India Ministry of Electronics and
            Information Technology (MeitY) Indian Computer Emergency Response
            Team (CERT-In) Electronics Niketan, 6 CGO Complex, New Delhi-110003
            Dated: 28 April 2022.
          </Li>
          <Li>
            Subject: Directions under sub-section (6) of section 70B of the
            Information Technology Act, 2000 relating to information security
            practices, procedures, prevention, response, and reporting of cyber
            incidents for Safe & Trusted Internet.
          </Li>
          <Li variant="legal">
            {`Whereas, the Central Government in terms of the provisions of
            sub-section (1) of section 70B of Information Technology (IT) Act,
            2000 (IT Act, 2000) has appointed the "Indian Computer Emergency
            Response Team (CERT-In)" vide notification dated 27 October 2009
            published in the official Gazette and as per provisions of
            sub-section (4) of section 70B of IT Act, 2000 The Indian Computer
            Emergency Response Team shall serve as the national agency for
            performing the following functions in the area of cyber security:-`}
            <List as="ol" variant="legal" className="list-none">
              <Li>
                a.&nbsp;collection, analysis, and dissemination of information
                on cyber incidents;
              </Li>
              <Li>b.&nbsp;forecast and alerts of cyber security incidents;</Li>
              <Li>c.&nbsp;forecast and alerts of cyber security incidents;</Li>
              <Li>
                d.&nbsp;coordination of cyber incidents response activities;
              </Li>
              <Li>
                e.&nbsp;issue guidelines, advisories, and vulnerability. Notes
                and whitepapers relating to information security practices,
                procedures, prevention, response, and reporting of cyber
                incidents;
              </Li>
              <Li>
                f.&nbsp;such other functions relating to cyber security as may
                be prescribed.
              </Li>
            </List>
          </Li>
          <Li>
            {`And whereas, "The Information Technology (The Indian Computer
            Emergency Response Team and Manner of performing functions and
            duties) Rules, 2013" were notified and published vide notification
            dated 16.01.2014 by the Central Government in the exercise of the
            powers conferred by clause (zf) of sub-section (2) of section 87
            read with sub-section (5) of section 70B of the IT Act, 2000.`}
          </Li>
          <Li>
            {`And whereas, it is considered expedient in the interest of the
            sovereignty or integrity of India, defence of India, security of the
            state, friendly relations with foreign states or public order or for
            preventing incitement to the commission of any cognizable offense
            using computer resource or for handling of any cyber incident, that
            following directions are issued to augment and strengthen the cyber
            security in the country:`}
            <List as="ol" variant="decimal" className="mt-2">
              <Li>
                {`All service providers, intermediaries, data centres, body
                corporate and Government organisations shall connect to the
                Network Time Protocol (NTP) Server of National Informatics
                Centre (NIC) or National Physical Laboratory (NPL) or with NTP
                servers traceable to these NTP servers, for synchronisation of
                all their ICT systems clocks’ notes and whitepapers relating to
                information security practices, procedures, prevention, response
                and reporting of cyber incidents; f) such other functions
                relating to cyber security as may be prescribed.`}
              </Li>
            </List>
          </Li>
          <Li>
            And whereas, various instances of cyber incidents and cyber security
            incidents have been and continue to be reported from time to time
            and in order to coordinate response activities as well as emergency
            measures with respect to cyber security incidents, the requisite
            information is either sometime not found available or readily not
            available with service providers/data centres/body corporate and the
            said primary information is essential to carry out the analysis,
            investigation and coordination as per the process of law.
          </Li>
        </List>
        <Text weight="semibold">KYC Requirements</Text>
        <Text>
          For the purpose of KYC, any of the following Officially Valid
          Documents (OVD) as a measure of identification procedure prescribed by
          the Reserve Bank of India (Know Your Customer (KYC)) Directions, 2016
          / Securities and Exchange Board of India Clarification on Know
        </Text>
        <Text>
          Your Client (KYC) Process and Use of Technology for KYC vide Circular
          SEBI/HO/MIRSD/DOP/CIR/P/2020/73 dated April 24, 2020 / The Department
          of Telecom File No: 800-12/2021- AS.II dated September 21, 2021, on
          Self-KYC (S-KYC) as an alternate process for issuing new mobile
          connections to Local and Outstation category customers, shall be used
          and maintained:
        </Text>
        <List variant="legal" weight="semibold">
          <Li>The passport</Li>
          <Li>The driving license</Li>
          <Li>Proof of possession of Aadhaar number</Li>
          <Li>
            {`The Voter's Identity Card issued by the Election Commission of India`}
          </Li>
          <Li>
            Job card issued by NREGA duly signed by an officer of the State
            Government
          </Li>
          <Li>
            Letter issued by the National Population Register containing details
            of name and address
          </Li>
          <Li>Validated phone number</Li>
          <Li>
            Trading account number and details, Bank account number and bank
            details
          </Li>
        </List>
        <Text weight="semibold">
          (For the purpose of KYC for business entities (B2B), documents
          mentioned in the Customer Due Diligence (CDD) process prescribed in
          Reserve Bank of India Master Direction - Know Your Customer (KYC)
          Direction, 2016 as updated from time to time shall be used and
          maintained).
        </Text>
      </Container>
    </section>
  );
};

export default CertGuidelinesContentSection;
