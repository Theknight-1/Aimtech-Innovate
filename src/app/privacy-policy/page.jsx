import React from 'react'
import Navbar from "@/brandcomponents/global/Navbar";

import Footer from "@/brandcomponents/global/footer";

export default function Privacy() {
  return (
    <>

    <Navbar/>
      <section className="w-full h-full flex items-center justify-center  py-20 xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4">
        <div className="text-white  space-y-4 flex  flex-col justify-center  ">
          <h1 className="text-4xl font-bold ">Privacy Policy</h1>
          <p className="text-gray-300 text-lg tracking-normal">
          At Aimtech Innovate, safeguarding your privacy and ensuring the security of your personal information is paramount. This Privacy Policy elucidates our practices concerning the collection, utilization, disclosure, and protection of the personal information entrusted to us by our valued customers and users.
          </p>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            1. Information Collection
            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
            We may collect various forms of personal information from you during your interaction with our website or services. This may occur when you visit our website, register for an account, complete a contact form, subscribe to our newsletter, or engage with our services. Such personal information may include, but is not limited to, your name, email address, phone number, postal address, and pertinent company details.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            2. Utilization of Information

            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
              <p>The personal information we gather serves multiple purposes, including:</p>
              <ol className='list-inside list-disc'>
                <li>Enhancing and optimizing our services</li>
                <li>Communicating with you regarding service updates, promotions, and pertinent information</li>
                <li>Addressing your queries and delivering superior customer support</li>
                <li>Analyzing trends and user behavior to refine and improve user experience.</li>
                <li>Adhering to legal obligations and regulatory requirements</li>
              </ol>
            </p>
            
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            3. Information Disclosure
            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
            We may disclose your personal information to trusted third-party service providers who assist us in the operation of our website and provision of our services. These third parties are contractually obligated to uphold the confidentiality and security of your personal information and are expressly forbidden from utilizing it for purposes beyond those outlined in our agreements. Additionally, we may divulge your personal information if mandated by law or in response to a valid legal request.
            </p>
            
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            4. Security Measures

            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
            Employing rigorous security measures, we endeavor to safeguard the personal information collected from unauthorized access, disclosure, alteration, or destruction. While we implement reasonable measures to ensure the security of your data, it is important to note that no method of transmission over the internet or electronic storage can be guaranteed to be completely secure.            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            5. Your Options
            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
            While you have the option to refrain from providing certain personal information, this may restrict your access to specific features of our website or utilization of our services. Additionally, you can opt-out of receiving marketing communications from us at any time by following the provided unsubscribe instructions.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            6. Third-Party Links

  
            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
            Our website may incorporate links to third-party websites or services not owned or managed by Aimtech Innovate. We bear no responsibility for the privacy practices or content of these external sites.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            7. Children's Privacy

  
            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
            Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you suspect that we have inadvertently gathered personal information from a child under 13, kindly contact us immediately, and we will take appropriate steps to rectify the situation.

            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            8. Policy Updates

            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
            To reflect alterations in our practices or amendments to relevant legislation, we may periodically update this Privacy Policy. Notice of any material changes will be provided by posting the updated Privacy Policy on our website.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            9. Contact Information
            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
            Aimtech Innovate reserves the right to amend these terms and conditions at any time without prior notice. Amendments will be effective immediately upon posting on our website.
  
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-500">
            10. Contact Us
  
            </h2>
            <p className="text-gray-300 text-lg tracking-normal">
            If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:contact@aimtechinnovate.com" className="text-brand-secondary">contact@aimtechinnovate.com</a>  call us at <a href="tel:+1 905-399-6642" className="text-brand-secondary">+1 905-399-6642.</a>
            </p>
          </div>
          <div className="space-y-2">
            
            <p className="text-gray-300 text-lg tracking-normal">
            By utilizing our website or services, you signify your consent to the collection, utilization, and disclosure of your personal information as delineated in this Privacy Policy.           </p>
          </div>
          <div className="space-y-2">
            
            <p className="text-gray-300 text-lg tracking-normal">
            This Privacy Policy is effective as of May 16, 2024 and remains subject to periodic review and modification.
           </p>
          </div>
        </div>
      </section>
      <Footer/>
      </>
    );
}
