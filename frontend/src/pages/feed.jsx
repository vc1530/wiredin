import * as React from "react";
import "../styles/styles.css";
import "../styles/feed.css";
import ProfileCard from "./profilecard";
import Header from "./header";

export default function Feed() {
  const user1 = {
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
