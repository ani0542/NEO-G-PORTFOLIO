import React from "react";
import { Tabs } from "antd";
import Medium from "../../images/blog.gif";
import Quoraa from "../../images/quoraa.png";
import "./Blogs.css";
import TechData from "./TechBlog.json";
import NonTechData from "./NonTechData.json";
import MyBlogs from "./MyBlogs";
import Blogger from "../../images/blogger.jpg";
import {
  InstagramFilled,
  InstagramOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const desc = [
  "A Food Blogger who loves to discover the best food in the town. As a blogger, I am always roaming in the search of the best budget and pocket friendly outlets for foodies like me.",
  "I am much into street foods rather than big cusines. it helps people to find the kind of the food they like who aren't from my place, they can be tourists or any outsiders...",
];

const Blogs = () => {
  return (
    <div id="blogs">
      <div id="blogs_head">
        <h1>Welcome to my blogs!</h1>
      </div>
      <Tabs
        type="card"
        tabBarStyle={{ color: "black" }}
        defaultActiveKey="1"
        onChange={callback}
        centered
        size="large"
      >
        <TabPane
          tab={[
            "Technical Blogs ",
            <img style={{ width: "1.5rem" }} src={Medium} alt="" />,
          ]}
          key="1"
        >
          {TechData.map((blogData, id) => (
            <MyBlogs
              key={id}
              picture={blogData.picture}
              name={blogData.name}
              desc={blogData.desc}
              link={blogData.link}
            />
          ))}
        </TabPane>
        
      </Tabs>
    </div>
  );
};

export default Blogs;
