import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "../../auth/hooks/useKeycloak";

import * as auth from "../../auth/keycloak";

const Landing: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const token = useKeycloak(setLoading);
  const navigate = useNavigate();
  if (!loading && token) navigate("/dashboard");
  return (
    <section className="landing">
      <div className="landing-items">
        <h1 className="landing-items__heading">Welcome to Sonar</h1>
        <h3>
          A platform to proactively identify and support youth mental health
        </h3>
        <div className="landing-actions">
          <button
            className="button button-secondary"
            onClick={() => auth.register()}
          >
            Join Sonar
          </button>
          <button
            className="button button-accent"
            onClick={() =>
              auth.login({ redirectUri: "http://localhost:3000/dashboard" })
            }
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;

// termsandconditions=\
//   Introduction==\
//     This website is owned and operated by MENTOR MATCH Pty Ltd ABN 83 642 627 414 (MentorMatch). MentorMatch accepts no liability or responsibility to any person as a consequence of any reliance upon the information contained in this website. By accessing this website, you agree to be bound by these terms.\
//   ??Copyright==\
//     Copyright and other Intellectual Property Rights in this website (including all information, material, software, images, graphics, streaming audio and streaming video ("Content") is owned by MentorMatch unless otherwise stated. You must not exploit any intellectual property rights in the website or the Content in any way except as expressly permitted on the Website or authorised by MentorMatch in writing.\
//   ??Accuracy==\
//     Every reasonable effort is made to provide Content that is accurate. However, the Content is subject to change at any time by appropriate action by MentorMatch. MentorMatch gives no assurance or warranty in regards to and accepts no responsibility for the accuracy, currency, or completeness of any Content.\
//   ??Disclaimer of Endorsement==\
//     Reference to any products, services, hypertext link to the third parties or other information by trade name, trademark, supplier or otherwise does not constitute or imply its endorsement, sponsorship or recommendation by MentorMatch. Nor is endorsement of MentorMatch implied by such links. They are for convenience only, as an index in a public library. The website may contain links to other sites on the internet ("Linked Sites"). Those links should not be interpreted as an endorsement of those Linked Sites, and MentorMatch is not responsible for the accuracy, legality, decency of material or copyright compliance of any Linked Site or services or information provided via any Linked Site. Your use of any Linked Sites is governed by the terms of that Linked Site.\
//   ??No Warranties==\
//     To the maximum extent permitted by law, this website is provided on an "as is", "as available" basis without warranties of any kind, express or implied, including, but not limited to, those of title, merchantability, fitness for a particular purpose or non-infringement or any warranty arising from a course of dealing, usage or trade practice. No oral advice or written information provided shall create a warranty; not shall members or visitors to this website rely on any such information or advice. This publication is not intended to be a contract, explicit or implied, and MentorMatch reserves the right to make changes to the information contained.\
//   ??Disclaimer of Liability==\
//     As a user of this website, you assume all responsibility and risk for the use of this website and the internet generally. MentorMatch accepts no liability or responsibility to any person as a consequence of any reliance upon or action in arsing in connection with use of or the information contained in this website. To the maximum extent permitted by law, under no circumstances (including without limitation negligence) shall anyone involved in creating or maintaining this website be liable for any loss or damage (whether direct or indirect) which results from any use or access of, or any inability to use or access, this website and/or any Linked Sites, or any service, even if MentorMatch has been advised of the possibility of such damages or losses. MentorMatch shall not be liable for any such damages including, but not limited to, reliance by a member or visitor on any information obtained via the website; or that result from mistakes, omissions, interruptions, deletion of files, viruses, errors, defects, or failure of performance, communications failure, theft, destruction or unauthorised access.\
//   ??Indemnity==\
//     You agree to indemnity MentorMatch (its officers, employees and agents) for any loss suffered or liability incurred by MentorMatch (its officers, employees and agents) arising from any unlawful, unauthorised or improper access or use of the website or any breach of these terms by you or your employees, contractors or representatives.\
//   ??Security==\
//     No data transmission over the internet can be guaranteed as totally secure. We do not warrant and cannot ensure the security of information which you transmit to us. Accordingly, any information which you transmit to us is transmitted at your own risk. You agree to observe and maintain the confidentiality of all security features relating to use of the website (including passwords, access arrangements etc) as notified. MentorMatch will not be liable for any unauthorised breach or disclosure of the security features.\
//   ??Termination==\
//     We may terminate or suspend access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these terms. All provisions of any of these terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.\
//   ??Waiver==\
//     Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.\
//   ??Severance==\
//     If any provision of these terms is held to be invalid or unenforceable by a court, the remaining provisions of these terms will remain in effect.\
//   ??Entire Agreement==\
//     These terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.\
//   ??Variations==\
//     We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must not continue to use our website.\
//   ??Privacy==\
//     MentorMatchs privacy policy explains how MentorMatch collects, uses, stores and discloses personal information.\
//   ??Governing Law==\
//     These terms and conditions will be constructed according to and are governed by the laws of Victoria, Australia.\
