import React from "react";

export default function ServiceDetails({ params }) {
  const services = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image:
        "https://i.ibb.co.com/215txbX0/arab-league-flag-jpg-xl.jpg",
      service_description:
        "Build responsive and modern websites tailored to your business needs.",
    },
    {
      _id: "2",
      service_name: "Graphic Design",
      service_image: "https://i.ibb.co.com/678SLYYT/brazil-flag-png-large.jpg",
      service_description:
        "Creative and professional graphic design services for your brand.",
    },
    {
      _id: "3",
      service_name: "SEO Optimization",
      service_image: "https://i.ibb.co.com/Rf3jhxX/china-flag-png-large-1.jpg",
      service_description:
        "Improve your website's visibility and ranking on search engines.",
    },
    {
      _id: "4",
      service_name: "Digital Marketing",
      service_image: "https://i.ibb.co.com/XfvSRSsq/england-flag-jpg-xl.jpg",
      service_description:
        "Grow your business online with targeted digital marketing strategies.",
    },
    {
      _id: "5",
      service_name: "App Development",
      service_image:
        "https://i.ibb.co.com/wNSFDgZd/flag-jpg-xl-7-2048x1283.jpg",
      service_description:
        "Custom mobile application development for both Android and iOS platforms.",
    },
  ];
  const id = params?.id;
  const singleServices = services.find((ser) => ser._id == id);

  if (singleServices) {
    return (
      <div>
        <h2 className="font-bold text-3xl">ServiceDetails Page</h2>
        <p>ID: {id}</p>
        <p>{singleServices.service_name}</p>
        <p>{singleServices.service_description}</p>
        <img className="w-52" src={singleServices.service_image} alt="" />
      </div>
    );
  } else {
    return (
      <>
        <p>Not Found Service</p>
      </>
    );
  }
}
