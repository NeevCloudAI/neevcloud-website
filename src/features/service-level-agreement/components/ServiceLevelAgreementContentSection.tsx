import Container from "@/shared/components/container";
import { Li, LinkComponent, List, Text } from "@/shared/ui-lib";

const ServiceLevelAgreementContentSection = () => {
  return (
    <section className=" bg-cloud-gray py-8 md:py-16 2xl:py-25">
      <Container className="text-gray-05 justify-center max-w-3xl 2xl:max-w-4xl space-y-5">
        <Text>
          NEEVAI SUPERCLOUD PRIVATE LIMITED (“<strong>NeevCloud</strong>”)
          provides cloud platform and configuration services, including but not
          limited to smart dedicated servers, graphics processing units, object
          storage, content delivery network service and continuous data
          protection back up services (“<strong>Services</strong>”) to its
          customers (“<strong>Customers</strong>”), and such use of the Services
          by the Customers shall be governed by the online Terms of Service
          available at Terms of Service (“<strong>Terms</strong>”) or master
          services agreement (“<strong>MSA</strong>”), if any, executed between
          NeevCloud and the Customer.
        </Text>
        <Text>
          Notwithstanding the foregoing, this Service Level Agreement (“
          <strong>SLA</strong>”) shall be applicable to all Customers
          irrespective of whether they have executed an MSA or not including
          those Customers who are availing the Services through a free trial
          facility. NeevCloud may modify this SLA at any time by posting a
          revised version of the same on NeevCloud’s website (“
          <strong>Website</strong>”) and the amended version of the SLA shall
          become automatically binding on the Customer if it continues to avail
          of the Services.
        </Text>
        <Text>
          This SLA sets out service levels for the provision of the Services and
          these shall be read with the Terms of Service (“
          <strong>Terms</strong>”). The Customer’s use of Services or its
          registration with us constitutes agreement to this SLA and makes it
          legally binding on the Customer.
        </Text>
        <Text>
          1. &nbsp;<strong>DEFINITIONS:</strong>
        </Text>
        <Text>
          Except as otherwise defined in this SLA or unless the context
          otherwise requires, all defined terms in this SLA shall have the same
          meanings as defined in the Terms of Service or applicable MSA, if any.
        </Text>
        <List as="ol" variant="legal" className="list-none">
          <Li>
            1.1 &nbsp;&quot;<strong>Uptime</strong>&quot; or &quot;
            <strong>UT</strong>&quot; means the aggregate percentage of hours in
            a calendar month during which the Services are actually available
            for use by the Customer.
          </Li>
          <Text>UT = 100% - DT (Downtime DT as defined below)</Text>
          <Li>
            1.2 &nbsp;&quot;<strong>Fault</strong>&quot; means the aggregate
            percentage of hours in a calendar month during which the Services
            are actually available for use by the Customer.
          </Li>
          <Li>
            1.3 &nbsp;&quot;<strong>Service Time</strong>&quot; or &quot;
            <strong>ST</strong>&quot; means the total hours in the calendar
            month during which Services are being provided by NeevCloud to the
            Customer. E.g. 30x24=720 hours in a 30 day calendar month.
          </Li>
          <Li>
            1.4 &nbsp;&quot;<strong>Emergency Maintenance</strong>&quot; or
            &quot;<strong>EM</strong>&quot; shall mean maintenance carried out
            under a condition or situation which poses danger to the system,
            equipment, network, facilities required for rendering the Services,
            danger to life etc. as the case may be and has to be attended
            immediately. NeevCloud shall attempt to notify the Customer about
            the emergency maintenance in advance, however depending upon the
            demands of the situation; if NeevCloud is not able to notify the
            Customer prior to conducting such Emergency Maintenance, it may do
            so at the earliest opportunity after the performance of such
            emergency maintenance.
          </Li>
          <Li>
            1.5 &nbsp;&quot;<strong>Excused Unavailability</strong>&quot; or
            &quot;<strong>EU</strong>&quot; means the aggregate number of hours
            in any month when NeevCloud may carry out troubleshooting or upgrade
            to the equipment, with intent to improve the Services, with
            notification to the Customer. The Emergency Maintenance and Planned
            Downtime shall be deemed to be a part of Excused Unavailability.
          </Li>
          <Li>
            1.6 &nbsp;&quot;<strong>Planned Downtime</strong>&quot; or &quot;
            <strong>PD</strong>&quot; means the aggregate number of hours in any
            billed month during which downtime is requested by NeevCloud to
            carry out checks, configuration changes, preventive maintenance of
            NeevCloud infrastructure (a) of which the Customer is notified 24
            hours in advance and (b) that is performed during a standard
            maintenance window from 11 PM to 6 AM IST or (c) performed during a
            non-standard maintenance window at a time approved by the Customer
            by a method chosen by NeevCloud (telephone, e-mail). Nothing herein
            shall restrict NeevCloud from conducting Emergency Maintenance on an
            as needed basis. The Customer may at their discretion ask for
            Planned downtime to repair the NeevCloud’s infrastructure made
            available to the Customer. Examples of activities covered under
            Planned downtime shall include but is not limited to the following
            activities:-
          </Li>
          <Li>1.6.1 &nbsp;Security and updates</Li>
          <Li>
            1.6.1 &nbsp;Routine Preventive Maintenance to prevent deterioration
            of the quality of Services
          </Li>
          <Li>
            1.6.1 &nbsp;Preventive Maintenance of utilities like AC, UPS, Server
            Room (where the servers are provided by NeevCloud).
          </Li>
          <Li>
            1.7 &nbsp;&quot;<strong>Downtime</strong>&quot; shall mean the
            aggregate percentage of hours in a billed month during which any
            discrete/individual Service(s) offered by NeevCloud was not
            available for use by the Customer. DT = ((PD) + (EM) + Fault- (EU))
            X 100))/ (ST). For the purpose of downtime only the impacted
            service(s) or server instance(s) impacted shall be considered.
          </Li>
          <Li>
            1.8 &nbsp;&quot;<strong>Exceptions</strong>&quot; shall mean either
            an event or a set of events as are more particularly detailed in
            Clause 5 hereto, the occurrence and the duration of occurrence of
            which shall not constitute a Service unavailability for the purposes
            of this SLA and shall be excluded from Downtime under this SLA.
          </Li>
          <Li>
            1.9 &nbsp;&quot;<strong>Support Request</strong>&quot; shall mean an
            e-mail sent to support@neevcloud.com, detailing Customer complaint
            to NeevCloud in relation to unavailability of Services / Reporting
            of Downtime by the Customer by a method set out under Clause 3
            hereunder.
          </Li>
          <Li>
            1.10 &nbsp;&quot;<strong>Rebates</strong>&quot; means Rebates
            payable in accordance with Clause 4 of this SLA.
          </Li>
          <Li>
            1.11 &nbsp;&quot;<strong>Force Majeure Event</strong>&quot; includes
            but is not limited to significant failure of a part of the power
            grid, significant failure of the internet, natural disaster, war,
            riot, insurrection, epidemic, outbreak of infectious disease(s)
            which has an impact of frustrating the provision of the Services as
            per this SLA, pandemic, fire, strikes or other organised labour
            action, terrorist activity, acts of government authority, acts of
            God, or other events of a magnitude or type for which precautions
            are not generally taken in the industry and acts/reasons which are
            beyond the control of any Party and cannot be predicted by men of
            ordinary prudence.
          </Li>
        </List>
        <Text>
          2. &nbsp;<strong>UPTIME:</strong>
        </Text>
        <List as="ol" variant="legal" className="list-none">
          <Li>
            2.1 &nbsp;If the Uptime during the month under consideration is less
            than 99.9%, NeevCloud will provide Rebates to the Customer in the
            form of an extension in the Services being rendered to the Customer
            in the manner set out below:-
          </Li>
          <Li>2.1.1 &nbsp;99.9% or greater No Service Extension</Li>
          <Li>
            2.1.2 &nbsp;99.9% to 99% Service(s) Extension for 1 day beyond the
            Service period
          </Li>
          <Li>
            2.1.3 &nbsp;99% to 98% Service(s) Extension for 2 day beyond the
            Service period
          </Li>
          <Li>
            2.1.4 &nbsp;98% to 97% Service(s)Extension for 3 day beyond the
            Service period
          </Li>
          <Li>
            2.1.5 &nbsp;Less than 97% Service(s) Extension for 3+n days where n
            is equal to 97-Uptime.
          </Li>
          <Text>
            Or equivalent credits or discount at the discretion of NeevCloud in
            the next billing cycle.
          </Text>
        </List>
        <Text>
          3. &nbsp;<strong>DOWNTIME REPORTING PROCESS:</strong>
        </Text>
        <List as="ol" variant="legal" className="list-none">
          <Li>
            3.1 &nbsp;Any Downtime should be reported by the Customer to
            NeevCloud by sending an email from its registered email ID at
            <LinkComponent
              href="mailto:support@neevcloud.com"
              variant="link"
              textColor="primary"
              spacing="xxs"
            >
              support@neevcloud.com
            </LinkComponent>
            within 24 hours of discovering such Downtime. The Customer shall be
            responsible to provide the necessary information and cooperation
            required by NeevCloud to enable NeevCloud to perform root-cause
            analysis of the Service problems.
          </Li>
          <Li>
            3.2 &nbsp;Upon receipt of such email, NeevCloud shall investigate
            the reported Downtime and shall promptly use best industry standard
            efforts to rectify the same. Provided that, if the Customer does not
            comply with the requirements of Clause 3.1, the email shall not be
            considered to be a valid Downtime report, and such period shall not
            be counted as part of Downtime for the purposes of this SLA.
          </Li>
        </List>
        <Text>
          4. &nbsp;<strong>ELIGIBILITY FOR REBATES:</strong>
        </Text>
        <Text>
          Rebates will only be applied to a Downtime for which NeevCloud support
          team has been notified by the Customer in the manner provided in
          Clause 3 above.
        </Text>
        <List as="ol" variant="legal" className="list-none">
          <Li>
            4.1 &nbsp;The Rebates for Downtime set out in this document are
            calculated on a per incident basis and measured as a percentage of
            availability over a billed month. For the avoidance of doubt
          </Li>
          <Li>
            4.1.1 &nbsp;(a)Rebates are not calculated on a cumulative basis, and
            (b) periods of outage are not aggregated for the purposes of any
            Rebate calculation.
          </Li>
          <Li>
            4.2 &nbsp;The Customer must request Rebates by sending e-mail to
            NeevCloud at email ID
            <LinkComponent
              href="mailto:support@neevcloud.com"
              variant="link"
              textColor="primary"
              spacing="xxs"
            >
              support@neevcloud.com
            </LinkComponent>
            with subject “SLA Rebate Request” giving details of the reported
            Downtime to which the Rebates relate. The e-mail shall include the
            following details - the dates, times, and affected region of each
            Downtime incident that is being claimed; Custome’s request logs that
            document the errors during such Downtime and corroborate its claimed
            outage (any confidential or sensitive information in these logs
            should be removed or redacted in any convenient manner).
          </Li>
          <Li>
            4.3 &nbsp;If the Customer fails to make such request with the
            aforesaid subject within 2 days of the end of the billed month for
            which such Rebates are due, or receipt of invoice for the said
            billed month, whichever is later, then the Customer shall be deemed
            to have waived the Rebates for that downtime; any claims that it may
            have in relation to such reported downtime, and NeevCloud will not
            be liable for any Rebates in lieu thereof.
          </Li>
          <Li>
            4.4 &nbsp;Following the calculation of the Rebates, they can be
            applied to the future invoices to be issued to the Customer. Rebates
            shall not entitle the Customer to any refund or other payment from
            NeevCloud. No payment, in part or in full, to NeevCloud shall be
            withheld by the Customer in anticipation of rebates.
          </Li>
          <Li>
            4.5 &nbsp;The Customer shall not be entitled to any rebate under
            this SLA if the customer had failed to remit timely payments for
            invoices as per the due dates of invoices in previous billing cycle
            to NeevCloud, or in case the Customer delays the payment of Invoice
            raised for the said billed month for which Customer is anticipating
            rebate or the invoice in consequent billing cycle.
          </Li>
          <Li>
            4.6 &nbsp;Where monthly recurring charges are used as the basis for
            calculating Rebates for Services provided during any period of less
            than a full calendar month, such Rebates shall be calculated on a
            pro-rata basis.
          </Li>
          <Li>
            4.7 &nbsp;In the event of any dispute between NeevCloud and the
            Customer in respect of any Rebates, NeevCloud and the Customer will
            work in good faith to resolve such dispute. If any such dispute is
            not resolved within a period of 15 days, the decision made by
            NeevCloud in this regard shall be final and binding.
          </Li>
        </List>
        <Text>
          5. &nbsp;<strong>EXCEPTIONS:</strong>
        </Text>
        <List as="ol" variant="legal" className="list-none">
          <Li>
            5.1 &nbsp;NeevCloud shall not be responsible for any Downtime to the
            extent that such Downtime results from any of the following events
            or a combination of such events:
          </Li>
          <Li>
            5.1.1 &nbsp;The Services being modified or altered in any way at the
            Customer’s request;
          </Li>
          <Li>
            5.1.2 &nbsp;Any interruptions resulting from defects or failures in
            or use of the Customer’s software or any third party services or any
            facilities provided, procured or operated by or on behalf of the
            Customer including but not limited to any 3rd party Open Source
            Software or Software Licenses provided by NeevCloud;
          </Li>
          <Li>
            5.1.3 &nbsp;Incomplete, inaccurate information provided by the
            Customer to NeevCloud in relation to the Services or information
            relevant to procuring/creating an NeevCloud customer account;
          </Li>
          <Li>
            5.1.4 &nbsp;The performance of traffic exchange points, including
            Internet networks or exchanges controlled by any third parties;
          </Li>
          <Li>
            5.1.5 &nbsp;Any delay or failure in complying with any of the
            Customer’s obligations under the Terms of Service and/or MSA, as may
            be applicable;
          </Li>
          <Li>
            5.1.6 &nbsp;DNS issue outside the direct control of NeevCloud;
          </Li>
          <Li>
            5.1.7 &nbsp;Failure of the Customer links, access circuits, local
            loop or any network not owned or operated by NeevCloud;
          </Li>
          <Li>
            5.1.8 &nbsp;Time taken during offline backups, either planned or
            requested by the Customer after advance intimation by NeevCloud;
          </Li>
          <Li>
            5.1.9 &nbsp;Damage to or faults in the equipment facilitating access
            to the Services resulting from (i) accidents, (ii) transportation,
            (iii) neglect and/or misuse by the Customer or its authorized
            representatives;
          </Li>
          <Li>
            5.1.10 &nbsp;Use of any data center services by the Customer for
            purposes other than in relation to accessing the Services
          </Li>
          <Li>
            5.1.11 &nbsp;Any act or omission on the part of the Customer
            including but not limited to failure to notify NeevCloud on the
            support e-mail
            <LinkComponent
              href="mailto:support@neevcloud.com"
              variant="link"
              textColor="primary"
              spacing="xxs"
            >
              support@neevcloud.com
            </LinkComponent>
            for any unexpected Downtime;
          </Li>
          <Li>
            5.1.12 &nbsp;Events or occurrences that result in “no trouble found”
            for support request, as confirmed by the Customer;
          </Li>
          <Li>
            5.1.13 &nbsp;An interruption where the Customer elects not to
            release a Service for testing and repair and continues to use it on
            an impaired basis without notifying NeevCloud of such interruption;
          </Li>
          <Li>
            5.1.14 &nbsp;Any interruptions, delays or failures of Services under
            administrative control of the customer caused by any act or omission
            of Customer or Customer’s employees, agents, or subcontractors,
            including but not limited to the following:
          </Li>
          <Li>5.1.14.1 &nbsp;-Inaccurate configuration.</Li>
          <Li>
            5.1.14.2 &nbsp;-Non-compliant use of any software installed on the
            server.
          </Li>
          <Li>5.1.14.3 &nbsp;-Incorrect sizing of resources provisioning.</Li>
          <Li>
            5.1.14.4 &nbsp;-Negligence or other conduct of Customer or its
            authorized persons, including a failure or malfunction resulting
            from applications or services provided by Customer or its authorized
            persons
          </Li>
          <Li>
            5.1.15 &nbsp;Regulatory events causing any interruption in the
            Services;
          </Li>
          <Li>
            5.1.16 &nbsp;Any abuse or fraud or failure to comply with the
            NeevCloud “Terms of Service or MSA, as applicable on the part of the
            Customer or its end-user (as defined in the MSA, as applicable), for
            which the Customer shall be liable;
          </Li>
          <Li>
            5.1.17 &nbsp;Any unavailability, suspension or termination in the
            Services caused by factors outside of NeevCloud’s reasonable
            control, including any Force Majeure Event or internet access
            related problems beyond the reasonable control of NeevCloud or
            beyond the scope of the Services, as the case may be.
          </Li>
        </List>
        <Text>
          6. &nbsp;The period of the reported downtime in respect of an impacted
          Server/Service shall be deemed to commence from the time the email is
          sent by the Customer reporting the downtime to NeevCloud as per the
          terms of Clause 3 of this SLA. On receipt of such email, NeevCloud
          Team shall validate the reported downtime and check its eligibility to
          be considered as downtime while doing Uptime calculation for the
          purpose of clause 2.
        </Text>
        <Text>
          7. &nbsp;Accordingly, the time period of calculation of any applicable
          credits for the purpose of computing the Rebate shall begin from the
          time that NeevCloud Support is notified by e- mail by the Customer as
          per the terms of this SLA and shall end on the resolution of the
          reported outage.
        </Text>
        <Text>
          8. &nbsp;NeevCloud does not take responsibility of data integrity and
          security for Customer (as defined in the Terms of Service or MSA, as
          applicable) as the Customer has to ensure appropriate security
          measures such as protection of passwords and security keys.
        </Text>
        <Text>
          9. &nbsp;It is the Customer’s responsibility to purchase appropriate
          data backup and recovery plans and manage them including testing the
          backups periodically in order to mitigate the risk of loss or
          accidental deletion of Customer data.
        </Text>
        <Text>
          10. &nbsp;Unless otherwise provided in the Terms of Services/ MSA, as
          applicable, this SLA sets forth the Customer’s sole and exclusive
          remedies, and NeevCloud’s sole and exclusive obligations, for any
          unavailability, non-performance, or other failure by NeevCloud to
          provide the Services.
        </Text>
      </Container>
    </section>
  );
};

export default ServiceLevelAgreementContentSection;
