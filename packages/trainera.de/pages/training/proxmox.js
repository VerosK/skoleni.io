import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/proxmox-white.svg";

const Page = props => (
  <CourseDD
    site={props.site}
    course_id="proxmox"
    lang={props.site.lang}
    logo={logo}
    location="de"
    show_sessions={true}
  />
);

export default Page;