export const metadata = {
  title: "Returns & Refunds | OXIA",
  description: "Returns and refunds policy for OXIA Washing Powder",
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Returns & Refunds Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-sm">
          <p className="text-muted-foreground">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">1. Your Right to Return</h2>
            <p>
              We want you to be completely satisfied with your purchase. If you're not happy with your 
              OXIA washing powder for any reason, you have the right to return it within 14 days of 
              receiving your order.
            </p>
            <p>
              This policy is in accordance with the UK Consumer Contracts (Information, Cancellation and 
              Additional Charges) Regulations 2013.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">2. Returns Conditions</h2>
            <p>To be eligible for a return and refund, your item must meet the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Unused and unopened:</strong> The product must be in its original, unopened 
                packaging. For hygiene and safety reasons, we cannot accept returns of opened or used 
                washing powder.
              </li>
              <li>
                <strong>Original condition:</strong> The product must be in the same condition as when 
                you received it, with all original packaging and labels intact.
              </li>
              <li>
                <strong>Within 14 days:</strong> You must notify us of your intention to return within 
                14 days of receiving your order.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">3. How to Request a Return</h2>
            <p>To initiate a return, please follow these steps:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Email us at <strong>info@oxiawash.co.uk</strong> with your order number and reason 
                for return.
              </li>
              <li>
                We will respond within 2 working days with return instructions and our returns address.
              </li>
              <li>
                Pack the item securely in its original packaging.
              </li>
              <li>
                Send the item back to us at the address provided.
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">4. Return Shipping Costs</h2>
            <p>
              <strong>You are responsible for paying the return shipping costs.</strong> We recommend 
              using a tracked delivery service, as we cannot be held responsible for items lost in transit.
            </p>
            <p>
              Return shipping costs are non-refundable unless the return is due to our error (e.g., wrong 
              item sent, damaged item).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">5. Refunds</h2>
            
            <h3 className="text-lg font-medium">5.1 Processing Time</h3>
            <p>
              Once we receive your returned item, we will inspect it and notify you of the approval or 
              rejection of your refund. If approved, your refund will be processed within 5 working days.
            </p>

            <h3 className="text-lg font-medium">5.2 Refund Method</h3>
            <p>
              Refunds will be issued to the original payment method used for the purchase. Depending on 
              your bank or card issuer, it may take an additional 3-5 working days for the refund to 
              appear in your account.
            </p>

            <h3 className="text-lg font-medium">5.3 What's Refunded</h3>
            <p>We will refund:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The full purchase price of the product(s)</li>
              <li>Original delivery charges (if the entire order is returned)</li>
            </ul>
            <p>We will NOT refund:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Return shipping costs (unless the return is due to our error)</li>
              <li>Any discount codes or promotional credits used on the original order</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">6. Damaged or Incorrect Items</h2>
            <p>
              If you receive a damaged or incorrect item, please contact us immediately at 
              info@oxiawash.co.uk with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your order number</li>
              <li>Photos of the damaged item or incorrect product</li>
              <li>A description of the issue</li>
            </ul>
            <p>
              We will arrange for a replacement to be sent at no additional cost, or issue a full refund 
              including return shipping costs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">7. Free Samples</h2>
            <p>
              Free sample products cannot be returned for a refund. However, if you experience any issues 
              with a free sample, please let us know at info@oxiawash.co.uk so we can improve our service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">8. Non-Returnable Items</h2>
            <p>The following items cannot be returned:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Opened or used washing powder (for hygiene and safety reasons)</li>
              <li>Items returned more than 14 days after receipt</li>
              <li>Items not in their original packaging</li>
              <li>Items damaged due to misuse or negligence</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">9. Exchanges</h2>
            <p>
              We do not currently offer direct exchanges. If you would like a different product or size, 
              please return your original item for a refund and place a new order.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">10. Contact Us</h2>
            <p>
              If you have any questions about our returns and refunds policy, please contact us:
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
            <h2 className="text-xl font-semibold">11. Your Consumer Rights</h2>
            <p>
              This returns policy does not affect your statutory rights under UK consumer law. For more 
              information about your consumer rights, visit the Citizens Advice website at 
              www.citizensadvice.org.uk
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
