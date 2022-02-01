import React from "react";
import SimpleReactFooter from "simple-react-footer";

const Footer = () => {
  const description = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam 
  quae qui similique eveniet ipsa consequuntur, voluptatibus sit a necessitatibus perspiciatis corporis
   cupiditate eos voluptate consectetur labore fugiat nemo modi debitis saepe tempore ut perferendis 
   adipisci. Aspernatur explicabo ratione nam perspiciatis et, provident possimus velit, eos ad in
    
       dolores quasi id deleniti alias.`;
  const title = "lorem";
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Careers",
          link: "/careers",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Admin",
          link: "/admin",
        },
      ],
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy",
        },
        {
          name: "Terms",
          link: "/terms",
        },
      ],
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations",
        },
        {
          name: "Culture",
          link: "/culture",
        },
      ],
    },
  ];

  return (
    <>
      <SimpleReactFooter
        description={description}
        title={title}
        columns={columns}
        linkedin="fluffy_cat_on_linkedin"
        facebook="fluffy_cat_on_fb"
        twitter="fluffy_cat_on_twitter"
        instagram="fluffy_cat_live"
        youtube="UCFt6TSF464J8K82xeA?"
        pinterest="fluffy_cats_collections"
        copyright="black"
        iconColor="black"
        backgroundColor="white"
        fontColor="black"
        copyrightColor="darkgrey"
      />
    </>
  );
};

export default Footer;
