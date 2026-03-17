export const metadata = {
  title: "Terms & Conditions | OXIA",
  description: "Terms and conditions for OXIA Washing Powder",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-sm">
          <p className="text-muted-foreground">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>
              These Terms and Conditions ("Terms") govern your use of the OXIA website (oxiawash.co.uk) 
              and the purchase of products from OXIA. By accessing our website or making a purchase, you 
              agree to be bound by these Terms.
            </p>
            <p>
              Please read these Terms carefully before using our website or placing an order. If you do 
              not agree to these Terms, please do not use our website or purchase our products.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">2. Company Information</h2>
            <div className="pl-4 space-y-1">
              <p><strong>Business name:</strong> OXIA</p>
              <p><strong>Trading name:</strong> Altitude Thinking</p>
              <p><strong>Company registration number:</strong> SC586072</p>
              <p><strong>Registered address:</strong></p>
              <p>171 Bo'ness Road</p>
              <p>Grangemouth</p>
              <p>FK3 9BT</p>
              <p>United Kingdom</p>
              <p><strong>Email:</strong> info@oxiawash.co.uk</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">3. Definitions</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>"We", "Us", "Our"</strong> refers to OXIA</li>
              <li><strong>"You", "Your"</strong> refers to the customer or website user</li>
              <li><strong>"Products"</strong> refers to OXIA washing powder and related items</li>
              <li><strong>"Website"</strong> refers to oxiawash.co.uk</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">4. Use of Website</h2>
            
            <h3 className="text-lg font-medium">4.1 Acceptable Use</h3>
            <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else's use of the website</li>
              <li>Contain viruses or other harmful code</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h3 className="text-lg font-medium">4.2 Intellectual Property</h3>
            <p>
              All content on this website, including text, images, logos, and design, is the property of 
              OXIA and is protected by UK and international copyright laws. You may not reproduce, 
              distribute, or use any content without our written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">5. Product Orders</h2>
            
            <h3 className="text-lg font-medium">5.1 Placing an Order</h3>
            <p>
              When you place an order through our website, you are making an offer to purchase the 
              product(s). We reserve the right to accept or decline your order at our discretion.
            </p>

            <h3 className="text-lg font-medium">5.2 Order Confirmation</h3>
            <p>
              Once your payment is processed, we will send you an order confirmation email. This 
              confirmation constitutes acceptance of your order and forms a binding contract between 
              you and OXIA.
            </p>

            <h3 className="text-lg font-medium">5.3 Order Accuracy</h3>
            <p>
              You are responsible for ensuring that all information provided (delivery address, contact 
              details, etc.) is accurate and complete. We cannot be held responsible for delays or 
              non-delivery caused by incorrect information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">6. Pricing and Payment</h2>
            
            <h3 className="text-lg font-medium">6.1 Prices</h3>
            <p>
              All prices are displayed in British Pounds (GBP) and include VAT where applicable. We 
              reserve the right to change prices at any time, but price changes will not affect orders 
              that have already been confirmed.
            </p>

            <h3 className="text-lg font-medium">6.2 Payment</h3>
            <p>
              Payment is processed securely through Stripe. We accept major credit and debit cards. 
              Payment must be made in full at the time of ordering.
            </p>

            <h3 className="text-lg font-medium">6.3 Pricing Errors</h3>
            <p>
              While we make every effort to ensure pricing accuracy, errors may occur. If we discover 
              a pricing error after you've placed an order, we will contact you to inform you and give 
              you the option to proceed at the correct price or cancel the order for a full refund.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">7. Delivery</h2>
            
            <h3 className="text-lg font-medium">7.1 Delivery Area</h3>
            <p>We currently deliver to addresses within the United Kingdom only.</p>

            <h3 className="text-lg font-medium">7.2 Delivery Times</h3>
            <p>
              We aim to dispatch orders within 1-2 working days and deliver within 3 working days of 
              order confirmation. These are estimated timeframes and may vary due to factors beyond our 
              control (e.g., courier delays, adverse weather).
            </p>

            <h3 className="text-lg font-medium">7.3 Delivery Costs</h3>
            <p>Delivery is currently free for all UK orders.</p>

            <h3 className="text-lg font-medium">7.4 Failed Delivery</h3>
            <p>
              If a delivery attempt fails due to incorrect address information or your unavailability, 
              we will contact you to arrange redelivery. Additional delivery charges may apply.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">8. Returns and Refunds</h2>
            <p>
              Please refer to our separate Returns & Refunds Policy for detailed information about 
              returning products and obtaining refunds.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">9. Product Information and Safety</h2>
            
            <h3 className="text-lg font-medium">9.1 Product Description</h3>
            <p>
              We make every effort to ensure that product descriptions and images are accurate. However, 
              minor variations may occur due to product improvements or packaging updates.
            </p>

            <h3 className="text-lg font-medium">9.2 Usage and Safety</h3>
            <p>
              Please follow all usage instructions provided on the product packaging. OXIA washing powder 
              should be used only as directed. Keep out of reach of children and pets.
            </p>

            <h3 className="text-lg font-medium">9.3 Allergies and Sensitivities</h3>
            <p>
              While our product is formulated for sensitive skin, individual reactions may vary. If you 
              have severe allergies or skin conditions, please consult a healthcare professional before 
              use. Discontinue use if irritation occurs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
            
            <h3 className="text-lg font-medium">10.1 Product Liability</h3>
            <p>
              Our liability for defective products is limited to the repair, replacement, or refund of 
              the product as set out in our Returns & Refunds Policy.
            </p>

            <h3 className="text-lg font-medium">10.2 Consequential Loss</h3>
            <p>
              To the extent permitted by law, we will not be liable for any indirect, consequential, or 
              special losses arising from the use of our products or website.
            </p>

            <h3 className="text-lg font-medium">10.3 Maximum Liability</h3>
            <p>
              Our total liability to you for any claim arising from your purchase shall not exceed the 
              amount you paid for the product.
            </p>

            <h3 className="text-lg font-medium">10.4 Consumer Rights</h3>
            <p>
              Nothing in these Terms affects your statutory rights as a consumer under UK law, including 
              the Consumer Rights Act 2015.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">11. Force Majeure</h2>
            <p>
              We will not be liable for any failure to perform our obligations due to circumstances 
              beyond our reasonable control, including but not limited to natural disasters, war, 
              terrorism, strikes, or government restrictions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">12. Privacy and Data Protection</h2>
            <p>
              Your use of our website and purchase of products is also governed by our Privacy Policy, 
              which explains how we collect, use, and protect your personal data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this 
              page with an updated "Last updated" date. Your continued use of the website after changes 
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">14. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining 
              provisions will continue in full force and effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">15. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of Scotland and the United Kingdom. Any disputes 
              arising from these Terms or your use of our website will be subject to the exclusive 
              jurisdiction of the Scottish courts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">16. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="pl-4 space-y-1">
              <p><strong>Email:</strong> info@oxiawash.co.uk</p>
              <p><strong>Address:</strong></p>
              <p>OXIA</p>
              <p>Altitude Thinking</p>
              <p>171 Bo'ness Road</p>
              <p>Grangemouth</p>
              <p>FK3 9BT</p>
              <p>United Kingdom</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">17. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and Returns & Refunds Policy, constitute 
              the entire agreement between you and OXIA regarding your use of the website and purchase 
              of products.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
