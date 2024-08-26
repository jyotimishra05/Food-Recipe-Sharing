import React from "react";
import OurTeam from "./OurTeam";

export default function About() {
  return (
    <div className="min-h-screen bg-about-background bg-cover bg-center text-white">
      <div className="container mx-auto p-6">
        {/* About Me Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">HI, MY NAME IS Lisaday!</h1>
          <h2 className="text-3xl font-semibold mb-4">
            And Pinch of Yum is my little corner of the internet!
          </h2>
          <p className="text-lg mb-6">
            I'm the voice, author, and creator behind Pinch of Yum. What started
            as a casual hobby over 14 years ago in 2010 while I was working as a
            fourth grade teacher has now grown into a full-blown business (!!)
            that reaches millions of people with fun recipes each month, with
            content that has been featured on The Kitchn, CNN, Refinery29, Brit
            + Co, POPSUGAR, Huffington Post, The Everymom, PureWow, and more.
          </p>
          <p className="text-lg mb-6">
            I live in Saint Paul, MN with my husband Bjork and our dog Sage. My
            favorite things in life are a big plate of pad Thai, sunny days, and
            going to the dog park.
          </p>
          <div className="text-center">
            <h3 className="text-2xl font-semibold my-8">
              FOLLOW US FOR EMAIL UPDATES
            </h3>
            <div className="flex justify-center items-center">
              <form className="flex flex-col items-center md:w-1/2  bg-black opacity-80 py-6 rounded-xl">
                <label name="first-name" className="text-lg mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="p-2 mx-4 mb-4 w-80 rounded border border-gray-300"
                  required
                />
                <label name="email" className="text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 mx-4 mb-4 w-80 rounded border border-gray-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-lightBlue text-white py-2 px-8 rounded-lg font-semibold"
                >
                  GO
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* I Love Food Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6">I Love Food!</h2>
          <p className="text-lg mb-6">
            In this space, I am always sharing fresh, flavorful, (mostly)
            healthy recipes that I love to make and eat in my real, actual,
            every day life. If I wouldn’t eat it in real life, I won’t put in on
            the blog. My goal is to inspire you with food that is both
            approachable AND exciting, whether you’re cooking for yourself, your
            family, your roommates, or your friends. I want you to be so excited
            about these recipes that you eagerly await 5pm when you can go home
            from work and start cooking.
          </p>
          <p className="text-lg mb-6">
            On a related note, I absolutely LOVE seeing the food that you’re
            making. It will make my day if you tag @pinchofyum in your Instagram
            photos and stories! We love to shout out our favorites on Fridays
            with our Reader Awards on Instagram Stories.
          </p>
        </section>

        {/* Going Deeper Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Going Deeper</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Travel",
                description:
                  "From living in the Philippines, to the ultimate European adventure, to tacos in Austin! Oh my gosh, I love to travel. Check it all out here.",
                link: "#",
              },
              {
                title: "Loss",
                description:
                  "On New Year’s Day 2017, we lost our baby boy Afton the day after he was born. I have shared a lot about that journey on the blog and have found so many meaningful connections with readers through his story. You can learn more about our experience here.",
                link: "#",
              },
              {
                title: "Motherhood",
                description:
                  "In September 2018, we welcomed our baby girl Solvi Afton into the world. I’ve written a lot about her and my experiences with motherhood, which you can take a look at here.",
                link: "#",
              },
              {
                title: "Home Stuff",
                description:
                  "We bought our house in 2013 and have done multiple projects on it – from redecorating, to a full-blown kitchen remodel, to creating a master suite in our upstairs attic. Take a peek here.",
                link: "#",
              },
              {
                title: "Sage",
                description:
                  "Sage is a queen and she joined our family in 2015 and she is the absolute best. She’s also the official POY mascot. You can waste your day away looking at pictures of her here.",
                link: "#",
              },
              {
                title: "Instagram",
                description:
                  "I also share about my life on my personal Instagram @lindsaymostrom. I’d love if you followed me there too!",
                link: "#",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black opacity-80 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-lightBlue font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Start & Grow Section */}
        <section className="py-12 bg-green-950 px-2">
          <h2 className="text-3xl font-bold mb-6 text-center">
            START & GROW YOUR FOOD BLOG WITH Food Blogger Pro
          </h2>
          <div className="text-center">
            <p className="text-lg mb-6">
              As we grew the blog into a source of income, my tech-loving
              husband Bjork decided to detail our journey publicly as somewhat
              of an “experiment.” And as a result, lots of people starting
              asking us how they could do the same thing. In 2013, Bjork and I
              built a community called Food Blogger Pro as a place to teach
              people everything we’ve learned over the last 7-8 years in this
              industry.
            </p>
            <p className="text-lg mb-6">
              Okay, so can I brag about this since it’s really Bjork’s thing,
              not mine?
            </p>
            <p className="text-lg mb-6">
              You guys, Food Blogger Pro is amazing. It contains over 350
              easy-to-understand videos, an active community forum, a panel of
              industry experts, live monthly events where you can submit your
              blogging questions, and discounts on tools and services made
              specifically for food bloggers.
            </p>
            <p className="text-lg mb-6">
              If you’re interested in learning more or becoming a Food Blogger
              Pro member, click here. You can also check out The Food Blogger
              Pro Podcast for quick, actionable blogging tips from some of the
              best in the biz.
            </p>
            <a
              href="#"
              className="bg-lightBlue text-white py-3 px-6 rounded-lg font-semibold"
            >
              Become a Member
            </a>
          </div>
        </section>
        <OurTeam />
      </div>
    </div>
  );
}
