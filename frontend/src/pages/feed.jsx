import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import "../styles/styles.css";
import "../styles/feed.css";
import ProfileCard from "./profilecard";
import Header from "./header";

export default function Feed() {
  const user1 = {
    //profile_pic: "data:image/jpeg;base64,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",
    profile_pic:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    location: "New York",
    major: "Computer Science",
    college: "New York University",
    name: "Anna Jones",
    pronouns: "She/her",
    bio: "Hey there, my name's Anna and I'm a software engineer at Google. I'm responsible for creating Google's mailing system framework.",
    experience: [
      {
        workplace: "Google",
        position: "Software Engineer",
        startDate: "Dec 2021",
        endDate: "Current",
      },
      {
        workplace: "Goldman Sachs",
        position: "IT Specialist",
        startDate: "Jan 2020",
        endDate: "Oct 2021",
      },
      {
        workplace: "Old Navy",
        position: "Sales Associate",
        startDate: "Jun 2019",
        endDate: "Aug 2019",
      },
    ],
    skills: [
      "Java",
      "JavaScript",
      "Python",
      "C++",
      "C",
      "Ruby on Rails",
      "Processing",
      "Microsoft Word",
      "SQL",
    ],
  };

  const user2 = {
    profile_pic:
      "https://images.unsplash.com/photo-1635542529858-566ad6c4b4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    location: "California",
    major: "Computer Science",
    college: "Stanford University",
    name: "Marie Antoine",
    pronouns: "They/them",
    bio: "Hi! I'm currently a project manager at Accenture, where I am working on a super-secret project!",
    experience: [
      {
        workplace: "Accenture",
        position: "Project Manager",
        startDate: "Feb 2018",
        endDate: "Current",
      },
      {
        workplace: "Amazon",
        position: "Software Engineer",
        startDate: "March 2016",
        endDate: "Jan 2018",
      },
      {
        workplace: "Ralph Lauren",
        position: "Associate Engineer",
        startDate: "Jun 2012",
        endDate: "March 2016",
      },
    ],
    skills: [
      "Java",
      "C++",
      "C",
      "Ruby on Rails",
      "Processing",
      "Microsoft Word",
    ],
  };

  user1.next = user2;

  const user3 = {
    profile_pic:
      "https://images.unsplash.com/photo-1552162864-987ac51d1177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    location: "New York",
    major: "Computer Science",
    college: "City College of New York",
    name: "Salma Hayek",
    pronouns: "She/her",
    bio: "I'm a product manager at ZocDoc. I am very passionate about using technology for social good!",
    experience: [
      {
        workplace: "ZocDoc",
        position: "Software Engineer",
        startDate: "Dec 2019",
        endDate: "Current",
      },
      {
        workplace: "Mount Sinai Hospital",
        position: "PA Student",
        startDate: "Jan 2018",
        endDate: "Dec 2019",
      },
      {
        workplace: "Private Clinic",
        position: "Intern",
        startDate: "Aug 2017",
        endDate: "Jan 2018",
      },
    ],
    skills: [
      "Java",
      "Organization",
      "C",
      "Processing",
      "Microsoft Word",
    ],
    next: null,
  };

  user2.next = user3;

  const user4 = {
    profile_pic:
      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    location: "New York",
    major: "Computer Science",
    college: "City College of New York",
    name: "Janice",
    pronouns: "She/her",
    bio: "Hey there, my name's Janice and I'm a software engineer at Goldman Sachs. I'm currently a senior at Columbia University pursuing a Bachelor's in Computer Science.",
    experience: [
      {
        workplace: "Goldman Sachs",
        position: "Software Engineer",
        startDate: "Dec 2021",
        endDate: "Current",
      },
      {
        workplace: "McDonalds",
        position: "Cashier",
        startDate: "Jan 2020",
        endDate: "Oct 2021",
      },
      {
        workplace: "Old Navy",
        position: "Sales Associate",
        startDate: "Jun 2019",
        endDate: "Aug 2019",
      },
    ],
    skills: [
      "Java",
      "JavaScript",
      "Python",
      "C++",
      "C",
      "Ruby on Rails",
      "Processing",
      "Microsoft Word",
    ],
    next: null,
  };

  user3.next = user4;

  const [currentUser, setCurrentUser] = React.useState(user1);

  const nextUser = () => {
    setCurrentUser(currentUser.next);
  };

  return (
    <div>
      <Header />

      <div id="feedCarousel" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#feedCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#feedCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#feedCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#feedCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <ProfileCard user={user1} className="d-block w-100" />
          </div>
          <div class="carousel-item">
            <ProfileCard user={user2} className="d-block w-100" />
          </div>
          <div class="carousel-item">
            <ProfileCard user={user3} className="d-block w-100" />
          </div>
          <div class="carousel-item">
            <ProfileCard user={user4} className="d-block w-100" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#feedCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#feedCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
