import React from "react";
import Card from "./components/Card";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  const people = [
    {
      fullName: "Noah Thompson",
      description: "Product Designer who focuses on simplicity & usability.",
      likes: "72.9K",
      posts: 828,
      views: "342.9K",
      bgImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      fullName: "Emma Carter",
      description: "UX Researcher passionate about human-centered design.",
      likes: "64.2K",
      posts: 592,
      views: "281.4K",
      bgImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      fullName: "Liam Anderson",
      description: "Frontend Developer creating seamless digital experiences.",
      likes: "89.5K",
      posts: 1042,
      views: "421.7K",
      bgImg: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      fullName: "Sophia Bennett",
      description: "Visual Designer blending creativity with strategy.",
      likes: "55.8K",
      posts: 467,
      views: "210.3K",
      bgImg: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
      profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      fullName: "Ethan Walker",
      description: "Mobile App Designer focused on intuitive interactions.",
      likes: "77.1K",
      posts: 731,
      views: "365.8K",
      bgImg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      profileImg: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      fullName: "Olivia Foster",
      description: "Creative Director helping brands build memorable products.",
      likes: "96.4K",
      posts: 1285,
      views: "502.6K",
      bgImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      profileImg: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      fullName: "Mason Reed",
      description: "UI Designer crafting elegant and scalable interfaces.",
      likes: "48.7K",
      posts: 389,
      views: "174.9K",
      bgImg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      profileImg: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      fullName: "Ava Mitchell",
      description: "Design Systems Specialist ensuring consistency at scale.",
      likes: "83.2K",
      posts: 916,
      views: "398.2K",
      bgImg: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      profileImg: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      fullName: "James Parker",
      description: "Interaction Designer obsessed with delightful details.",
      likes: "69.8K",
      posts: 640,
      views: "288.1K",
      bgImg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      profileImg: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      fullName: "Charlotte Hayes",
      description: "Digital Product Designer building accessible experiences.",
      likes: "91.6K",
      posts: 1153,
      views: "467.5K",
      bgImg: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      profileImg: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  ];
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <section className="w-[90%] bg-[#EDEDED] grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-5 p-3 rounded-3xl mt-20">
        {people.map((element) => (
          <Card
            name={element.fullName}
            des={element.description}
            likes={element.likes}
            posts={element.posts}
            views={element.views}
            bgImg={element.bgImg}
            profile={element.profileImg}
          />
        ))}

       


      </section>
    </main>
  );
};

export default App;
