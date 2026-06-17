import Container from "@/shared/components/container";
import { Li, LinkComponent, List, Text } from "@/shared/ui-lib";

const BillingGuidelinesContentSection = () => {
  return (
    <section className=" bg-cloud-gray py-8 md:py-16 2xl:py-25">
      <Container className="text-gray-05 justify-center max-w-3xl 2xl:max-w-4xl space-y-2.5">
        <Text>
          All our signups go through a stringent fraud-detection procedure. Our
          verification department cross-checks all the information given during
          the signup. This is done to establish that the account holder is aware
          about the purchase made as of fact that the signup has been made with
          their knowledge. All the accounts are setup only after confirming the
          signup authenticity.
        </Text>
        <Text>
          For Indian Clients: All payments are to be made in INR. We accept
          payment through following modes:
        </Text>
        <List weight="semibold">
          <Li>Debit Cards/ Netbanking</Li>
          <Li>Credit Card (VISA, MasterCard)</Li>
          <Li>NEFT / RTGS / Wire Transfer</Li>
          <Li>Non-Rupee Bank Transfer</Li>
        </List>
        <Text>
          For International Clients, we accept payment through following modes:
        </Text>
        <List weight="semibold">
          <Li>PayPal</Li>
          <Li>Non-Rupee Bank Transfer</Li>
        </List>
        <Text>
          We accept monthly, quarterly, semi-annual & annual payments. We also
          allow multi-year contracts. You can mail us at
          <LinkComponent
            href="mailto:sales@neevcloud.com"
            variant="link"
            textColor="primary"
            spacing="xxs"
          >
            sales@neevcloud.com
          </LinkComponent>
          for further details
        </Text>
        <Text>
          Payments done via NEFT / RTGS / Wire Transfer / Cheque/ Demand Draft /
          Pay Order would be setup only after we get the proof of the payment
          that has been done. A receipt copy of the payment needs to be sent to
          our billing department. Clients may scan the receipt or take a
          screenshot of the same & email it as an attachment to
          <LinkComponent
            href="mailto:sales@neevcloud.com"
            variant="link"
            textColor="primary"
            spacing="xxs"
          >
            sales@neevcloud.com
          </LinkComponent>
          . Such accounts would be setup after the copy of the receipt is
          received. Our billing department can be reached at 1800-309-1433 any
          time for any clarification when needed.
        </Text>
        <Text>
          We require a written authorization in the form of an email for
          requests to change billing cycles, contact email address &
          cancellation / termination of services. Requests on live-chat or call
          for the same would not be accepted. This has to be sent to
          <LinkComponent
            href="mailto:sales@neevcloud.com"
            variant="link"
            textColor="primary"
            spacing="xxs"
          >
            sales@neevcloud.com
          </LinkComponent>
          .
        </Text>
        <Text>
          Account renewal reminders will be sent 5 days before the actual
          renewal / due date. This is done to ensure that the clients get enough
          time to make the payment(s). A second reminder will be sent before the
          due date and the third & final reminder would be sent on the day of
          the renewal. These reminders will only be sent at the authorized
          primary email address of the account.
        </Text>
        <Text>
          A grace period of 3 days will be given to all unpaid accounts past the
          renewal / due date. The hosting service will be suspended on the 6th
          day of the account being past due and a notification email would be
          sent informing about the suspension of service. We charge late fee
          from second and third day of grace period. Backup, if purchased /
          applicable, will be provided only after the dues are paid during the
          suspension period, i.e. between 6th and 10th days (both days
          inclusive) of account being past due.
        </Text>
        <Text>
          We would allow up to 5 days after the account has been suspended, for
          the renewal fee/dues to be paid. The account will be terminated
          permanently and all data held within that particular account will be
          deleted from the server once this period of additional 5 days is over.
          Under no circumstances would a backup be provided to the client after
          termination
        </Text>
        <Text as="h3" weight="semibold">
          Refund
        </Text>
        <Text>
          There is
          <strong>&nbsp;NO REFUND </strong>policy
        </Text>
        <Text as="h3" weight="semibold">
          Payment Options Debit Cards/ Netbanking
        </Text>
        <Text>We accept Debit Cards/Netbanking from the following banks:</Text>
        <Text>
          Canara bank, City Union bank, Central Bank of India, Citi bank, Punjab
          National bank, State Bank of India, Union bank of India, Axis bank,
          Corporation bank, Cosmos bank, Catholic Syrian Bank, Deutsche bank,
          HDFC bank, ICICI bank, Indian Overseas bank, ING Vysya bank, Karur
          Vysya bank, Kotak Mahindra bank, Standard Chartered bank, Andhra Bank,
          Bank of Bahrain and Kuwait, Bank of Baroda Corporate, Bank of Baroda
          Retail, Bank of India, Bank of Maharashtra, YES bank, DCB Bank
          Business, DCB Bank Personal, DBS Bank Ltd, Dhanlaxmi bank, Federal
          Bank, IDBI Bank, Indian Bank, IndusInd Bank, Jammu & Kashmir Bank,
          Karnataka Bank, Lakshmi vilas Bank, Oriental bank of Commerce, Punjab
          national bank (Retail), Punjab national bank (Corporate), Royal Bank
          of Scotland, Saraswat Bank, Shamrao Vithal Bank, South Indian Bank,
          State Bank of Bikaner & Jaipur, UCO bank,Tamilnad Mercantile bank,
          United Bank of India, State Bank of Travancore, Vijaya Bank, State
          Bank of Hyderabad, State Bank of Mysore, State Bank of Patiala and
          Syndicate Bank
        </Text>

        <Text as="h5" textColor="primary" weight="semibold">
          Credit Cards
        </Text>
        <Text>
          You can pay us for any purchase using any of the following Credit
          Cards:
        </Text>
        <List weight="semibold">
          <Li>Visa/Master Card</Li>
          <Li>American Express</Li>
        </List>
        <Text as="h5" textColor="primary" weight="semibold">
          Bank Deposit, NEFT, RTGS & Wire Transfer
        </Text>
        <table className="w-full">
          <thead className="flex mb-5 w-full">
            <tr className="flex flex-col md:flex-row w-full">
              <td className="bg-black text-white p-2.5 min-w-80 text-center">
                Name of the Account in Bank
              </td>
              <td className="bg-white text-black border border-black p-2.5 min-w-80 text-center">
                NEEVAI SUPERCLOUD PRIVATE LIMITED
              </td>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-5 w-full">
            <tr className="flex flex-col md:flex-row w-full">
              <td className="bg-black text-white p-2.5 min-w-80 text-center">
                Name of the Branch
              </td>
              <td className="bg-white text-black border border-black p-2.5 min-w-80 text-center">
                INDIAN OVERSEAS BANK
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row">
              <td className="bg-black text-white p-2.5 min-w-80 text-center">
                Account Type
              </td>
              <td className="bg-white text-black border border-black p-2.5 min-w-80 text-center">
                CASH CREDIT
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row">
              <td className="bg-black text-white p-2.5 min-w-80 text-center">
                Account Number
              </td>
              <td className="bg-white text-black border border-black p-2.5 min-w-80 text-center">
                066233000000095
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row">
              <td className="bg-black text-white p-2.5 min-w-80 text-center">
                Branch Address
              </td>
              <td className="bg-white text-black border border-black p-2.5 min-w-80 text-center">
                169 RNT Marg Indore
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row">
              <td className="bg-black text-white p-2.5 min-w-80 text-center">
                IFSC
              </td>
              <td className="bg-white text-black border border-black p-2.5 min-w-80 text-center">
                IOBA0000662
              </td>
            </tr>
          </tbody>
        </table>
        {/*  */}
        <Text as="h5" weight="semibold">
          Non-Rupee Bank Transfer
        </Text>
        <Text>
          Steps the customer need to follow to make payment for Non-Rupee Bank
          Transfer.
        </Text>
        <List as="ol" variant="decimal">
          <Li>Login into your online Bank Account.</Li>
          <Li>Click on Online Transfer</Li>
          <Li>
            Add Payee to your online banking account with following details
            mentioned below.
          </Li>
          <Li>
            If you are unable to add payee; kindly contact customer care
            department of your bank and ask them to add “Rackbank® Datacenters
            Private Ltd.” manually.
          </Li>
          <Li>
            Once added; transfer the amount as per the discussion / quote /
            commercials sent.
          </Li>
          <Li>
            Please be sure to send us all the details mentioned below on the
            completion of a successful transaction.
          </Li>
          <List>
            <Li>Name of the organization</Li>
            <Li>Postal / Physical address</Li>
            <Li>ZIP / Pin Code</Li>
            <Li>Contact person’s name</Li>
            <Li>Email ID (s)</Li>
            <Li>Contact number (s)</Li>
            <Li>PAN No.</Li>
            <Li>Transaction Number</Li>
            <Li>Name of the Bank</Li>
            <Li>Amount Transferred</Li>
            <Li>Time and Date of Transaction</Li>
          </List>
        </List>
        <Text as="h3" weight="semibold">
          Disclaimer
        </Text>
        <Text>
          NeevCloud™ doesn’t stores your credit/debit or any other card’s
          details in the any of the company’s database. We only push the
          information to the payment gateways
        </Text>
        <Text as="h3" weight="semibold">
          For any clarifications or further details, please feel free to contact
          us on any of the following:
        </Text>
        <Text>
          Email:
          <LinkComponent
            href="mailto:sales@neevcloud.com"
            variant="link"
            textColor="primary"
            spacing="xxs"
          >
            sales@neevcloud.com
          </LinkComponent>
        </Text>
        <Text>Phone: Toll Free +1800-309-1433 (Monday to Friday)</Text>
      </Container>
    </section>
  );
};

export default BillingGuidelinesContentSection;
