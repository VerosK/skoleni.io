import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up Index"
    hideNewsletter={true}
    markdown={`
- [Kubernetes, 16. 11. 2020](/follow-up/2020-11-16-kubernetes)
- [Git, O2, 11. 11. 2020](/follow-up/2020-11-11-o2-git)
- [Gitlab CI, Mall, 9. 11. 2020](/follow-up/2020-11-09-mall-gitlab-ci)
- [Kubernetes, Partners Group, 28. 10. 2020](/follow-up/2020-10-28-partners-group-kubernetes)
- [Gitlab CI & Docker, Neeco, 22. 10. 2020](/follow-up/2020-10-22-neeco-gitlab-ci-docker)
- [Kubernetes, Mavenir, 6. 10. 2020](/follow-up/2020-10-06-mavenir-kubernetes)
- [Docker & Kubernetes, Eurosoftware, 29. 9. 2020](/follow-up/2020-09-29-eurosoftware-docker-kubernetes)
- [Git, O2, 24. 9. 2020](/follow-up/2020-09-24-o2-git)
- [Terraform, 25. 9. 2020](/follow-up/2020-09-25-terraform)
- [Kubernetes, 17. 9. 2020](/follow-up/2020-09-17-kubernetes)
- [Gitlab CI, 16. 9. 2020](/follow-up/2020-09-16-gitlab-ci)
- [Git, Gordic, 14. 9. 2020](/follow-up/2020-09-14-gordic-git)
- [Git, ZCU, 9. 9. 2020](/follow-up/2020-09-09-zcu-git)
- [Docker & Kubernetes, Adbros, 5. 8. 2020](/follow-up/2020-08-05-adbros-docker-kubernetes)
- [Gitlab CI, SNK, 31. 7. 2020](/follow-up/2020-07-31-snk-gitlab-ci)
`}
  />
);

export default Page;
