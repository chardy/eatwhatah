import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'

function about() {
  return (
    <Layout>
      <div className="max-w-xs mx-auto">
        <div className="grid grid-cols-6 gap-4 pb-5">
          <div className="col-span-1">
            <Link href="/"><a><img className="pt-8" src="/home.svg"/></a></Link>
          </div>
          <div className="col-span-4">
            <img className="pl-3" src="/logo.svg"/>
          </div>
          <div className="col-span-1">
            <a href="https://forms.gle/MsS6mYu2z8n8ciG37" target="_blank"><img className="pt-8" src="/feedback.svg"/></a>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-white pb-3 text-center">Privacy Policy</h2>
        <h4 className="text-2xl font-bold text-white pb-3 pt-3 text-center">Overview of Privacy Policy</h4>
        <p className="text-white text-center mb-5">Eat What Ah? ("EWA") provides this Privacy Policy to inform you of our policies and procedures regarding the collection, use and disclosure of personal information we receive from users and members of eatwhatah.com (the "Site"). By visiting and using our Site, you indicate that you have read, understand and agree to all terms and conditions stated herein. This Privacy Policy may be updated from time to time and you are therefore advised to consult this policy regularly for any changes.</p>
        
        <h4 className="text-2xl font-bold text-white pb-3 pt-3 text-center">Collection of Information</h4>
        <p className="text-white text-center mb-10">
        When you use our Site, we may collect both personal and non-personal information about you. Non-personal information may include IP addresses and details of websites you have visited prior to arriving at and after leaving our Site. Personal information such as your name, contact number, email address, and organization WILL NOT be collected when you use our services. Some of the information we collect may be sensitive in nature and you consent to the collection and use of such information by us subject to this policy.

        </p>
        <h4 className="text-2xl font-bold text-white pb-3 pt-3 text-center">Use and Disclosure of information</h4>
        <p className="text-white text-center mb-10">
        We use the information collected about you for the primary purpose of connecting you to venues listed on our website and enabling venues to communicate and provide services to you. We also use your information for the administration of our services, enhancing website operations and other service improvements. We may also pass your personal information to other third party service providers who may assist us with internal operations such as email subscriptions, mailing lists, data analysis, payment processing and website troubleshooting. By accessing or using our website, you expressly consent to this use and disclosure of your information by us. Further, we will not pass on your personal information in any form to third parties, except in the following circumstances: 1. you have consented to the use or disclosure; 2. where we reasonably believe that the disclosure is necessary as part of an investigation into unlawful activity that is being, or may have already have been, conducted; or 3. where the disclosure is required by law, in circumstances such as complying with a subpoena, a warrant or other legal processes.
        </p>
        <h4 className="text-2xl font-bold text-white pb-3 pt-3 text-center">Information quality and security</h4>
        <p className="text-white text-center mb-10">
        We will take reasonable steps to ensure that any personal information we maintain is complete, accurate and up-to-date. The site has security measures in place to protect against the loss, misuse and alteration of information under our control. However, we do not warrant the security of personal information transmitted via the Internet and any information transmitted to the website is done at your sole risk.
        </p>
        <h4 className="text-2xl font-bold text-white pb-3 pt-3 text-center">Editing your information</h4>
        <p className="text-white text-center mb-10">
        You may gain access to, and correct, the personal information we hold about you in certain circumstances. If you would like to obtain such access, please contact us.
        </p>
        <h4 className="text-2xl font-bold text-white pb-3 pt-3 text-center">Changes to Privacy Policy</h4>
        <p className="text-white text-center mb-10">
        At any time we may find it necessary to make changes to this Privacy Policy and the way by which we collect or utilize your information. EWA has the right to modify this Privacy Policy at any time by updating and re-publishing this Privacy Policy on our Site. Reasonable efforts will be made by EWA to notify you of any changes, but your information will be handled according to the Privacy Policy in effect at the time of use of the information.
        </p>
        <h4 className="text-2xl font-bold text-white pb-3 pt-3 text-center">Contacting us</h4>
        <p className="text-white text-center mb-10 pb-10">
        If you have questions or concerns about this policy, or wish to access or correct the information we hold about you, you can contact us at <a href="mailto:hello@iamthye.com?subject=Hello">hello@iamthye.com</a>.
        </p>
        
        
      </div>
    </Layout>
  )
}

export default about;
