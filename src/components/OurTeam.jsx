import React from "react";

const teamMembers = [
  {
    name: "Lindsay",
    image:
      "https://img.freepik.com/free-photo/front-view-smiley-woman-with-earbuds_23-2148613052.jpg",
    role: "Creator",
    description: `Lindsay is the voice, author, and creator behind Pinch of Yum. She develops recipes and writes content for the blog and on Instagram. The little blog that started as her casual hobby for nights and weekends while working as a teacher has now grown into a full-fledged business. She lives in Minnesota with her husband Bjork, dog Sage, and daughter Solvi.`,
  },
  {
    name: "Bjork",
    image:
      "https://img.freepik.com/free-photo/front-view-portrait-businessman-with-glasses_23-2148816831.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid",
    role: "Tech Consultant / Business Advisor",
    description: `Bjork is the chief tech consultant / business advisor / taste tester at Pinch of Yum. Day-to-day, you’ll mostly see him around Food Blogger Pro, as well as hosting the Food Blogger Pro podcast. Bjork is also husband to Lindsay, dad to Solvi, and lives in Minnesota with their dog Sage. He can usually be found with a coffee in hand.`,
  },
  {
    name: "Jenna",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    role: "Communications Manager",
    description: `Jenna is the Communications Manager at Pinch of Yum. She manages much of the day-to-day communication with readers and brands – on and off the blog. You can find her answering recipe questions on posts, helping readers with ebook purchases, coordinating partnership details with brands, and other various behind-the-scenes projects. Jenna lives in Minnesota with her husband.`,
  },
  {
    name: "Krista",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/928/355/desktop-wallpaper-sm-on-twitter-random-people.jpg",
    role: "Shoot Assistant",
    description: `Krista is the Shoot Assistant at Pinch of Yum. You’ll find her in the kitchen supporting Lindsay on shoot days, prepping and cooking recipes for the blog. She is also the resident recipe tester, who tests and re-tests many recipes to ensure the best cooking experience. Krista lives in Minnesota with her husband and 3 children. She also enjoys food photography and managing her blog Destination Delish.`,
  },
  {
    name: "Sage",
    image: "https://images4.penguinrandomhouse.com/author/2197978",
    role: "Official POY Mascot",
    description: `Sage is our furry coworker and official POY team mascot. She likes treats, naps at the studio, and is just the absolute best. You can learn more about Sage here.`,
  },
];

const OurTeam = () => {
  return (
    <section className="py-12 bg-black opacity-80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
        <p className="text-center mb-6 max-w-2xl mx-auto">
          We have an entire team of geniuses behind us at Pinch of Yum who are
          experts in a little bit of everything – from customer service, to
          social media, to videography, to assisting with recipe shoots. They
          are EVERYTHING.
        </p>
        <p className="text-center mb-12">
          Our team helps keep it all running smoothly.
        </p>

        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6 flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-lg font-semibold text-gray-700">
                  {member.role}
                </p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
