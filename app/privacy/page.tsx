export const metadata = {
  title: "Privacy Policy | OXIA",
  description: "Privacy policy for OXIA Washing Powder",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-sm">
          <p className="text-muted-foreground">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>
              OXIA ("we", "us", or "our") operates oxiawash.co.uk. This page informs you of our policies 
              regarding the collection, use, and disclosure of personal data when you use our website and 
              purchase our products.
            </p>
            <p>
              We are committed to protecting your privacy and ensuring your personal information is handled 
              in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection 
              Act 2018.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">2. Data Controller</h2>
            <p>
              The data controller responsible for your personal data is:
            </p>
            <div className="pl-4">
              <p><strong>OXIA</strong></p>
              <p>Altitude Thinking</p>
              <p>171 Bo'ness Road</p>
              <p>Grangemouth</p>
              <p>FK3 9BT</p>
              <p>United Kingdom</p>
              <p>Company Registration Number: SC586072</p>
              <p>Email: info@oxiawash.co.uk</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">3. Information We Collect</h2>
            
            <h3 className="text-lg font-medium">3.1 Information You Provide</h3>
            <p>When you place an order or request a free sample, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Delivery address</li>
              <li>Phone number (optional)</li>
            </ul>

            <h3 className="text-lg font-medium">3.2 Newsletter Subscription</h3>
            <p>If you subscribe to our newsletter, we collect your email address.</p>

            <h3 className="text-lg font-medium">3.3 Payment Information</h3>
            <p>
              Payment processing is handled by Stripe. We do not store your credit card details. 
              Please refer to Stripe's privacy policy for information on how they handle your payment data.
            </p>

            <h3 className="text-lg font-medium">3.4 Automatically Collected Information</h3>
            <p>We do not currently use cookies or tracking technologies on our website.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">4. How We Use Your Information</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To process and fulfill your orders</li>
              <li>To send order confirmations and shipping updates</li>
              <li>To respond to your enquiries and provide customer support</li>
              <li>To send you marketing communications (if you have opted in)</li>
              <li>To improve our products and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">5. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Contract performance:</strong> To fulfill orders you place with us</li>
              <li><strong>Consent:</strong> For marketing communications (you can withdraw consent at any time)</li>
              <li><strong>Legitimate interests:</strong> To improve our services and respond to enquiries</li>
              <li><strong>Legal obligation:</strong> To comply with tax, accounting, and other legal requirements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">6. Data Sharing and Third Parties</h2>
            <p>We share your personal data only with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Stripe:</strong> For payment processing</li>
              <li><strong>Delivery services:</strong> To ship your orders</li>
              <li><strong>Legal authorities:</strong> When required by law</li>
            </ul>
            <p>We do not sell, rent, or share your personal data with any other third parties for marketing purposes.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">7. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which 
              it was collected:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Order information: 7 years (for tax and accounting purposes)</li>
              <li>Marketing email addresses: Until you unsubscribe</li>
              <li>Customer enquiries: 2 years after resolution</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">8. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Right to access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to restrict processing:</strong> Limit how we use your data</li>
              <li><strong>Right to data portability:</strong> Receive your data in a portable format</li>
              <li><strong>Right to object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to withdraw consent:</strong> Withdraw consent for marketing at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at info@oxiawash.co.uk
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">9. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data 
              against unauthorised access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">10. Children's Privacy</h2>
            <p>
              Our website and services are not directed at children under 16 years of age. We do not 
              knowingly collect personal data from children.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">12. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your personal data, 
              please contact us:
            </p>
            <div className="pl-4">
              <p>Email: info@oxiawash.co.uk</p>
              <p>Address: 171 Bo'ness Road, Grangemouth, FK3 9BT, United Kingdom</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">13. Complaints</h2>
            <p>
              If you believe we have not handled your personal data properly, you have the right to 
              lodge a complaint with the Information Commissioner's Office (ICO):
            </p>
            <div className="pl-4">
              <p>Website: www.ico.org.uk</p>
              <p>Phone: 0303 123 1113</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
