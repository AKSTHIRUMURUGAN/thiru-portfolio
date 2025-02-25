import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import { MorphingText } from "../../components/magicui/ui/morphing-text";

export default function TimelineEffect() {
  const data = [
    {
      title: "Internships & Projects",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              💼 <strong>Frontend Developer Intern</strong> - Fly91
              <br />
              <span className="text-xs text-neutral-400">Sep 2024 - Nov 2024</span>
              <br />
              - Built a scalable admin app for flight, hotel, and cab requests.
              <br />
              - Integrated backend APIs, resolved errors, and ensured robust functionality.
              <br />
              - Followed Agile methodology, Git collaboration, and unit testing.
            </p>
          </div>
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🚀 <strong>72-Hour Hackathon</strong> - Fly91
              <br />
              <span className="text-xs text-neutral-400">Sep 2024</span>
              <br />
              - Developed an internal admin app in a team of 9, focusing on frontend.
              <br />
              - Delivered a fully functional, error-free solution under tight deadlines.
            </p>
          </div>
          <div className="w-full max-w-[500px] mx-auto">
  <Image
    src="./internship/fly91.jpg"
    alt="fly91"
    width={500}
    height={500}
    className="rounded-lg object-cover w-full h-auto shadow-lg hover:scale-105 transition-transform"
  />
</div>
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🌟 <strong>eTLSID Project</strong> - DST Funded (Rajalakshmi Engineering College)
              <br />
              <span className="text-xs text-neutral-400">Feb 2024 - Present</span>
              <br />
              - Developed a gamified learning platform for intellectually disabled students.
              <br />
              - Used React JS, Google API, text-to-speech, and 3D video-based learning.
              <br />
              - Supported multilingual (Tamil, Hindi, English) quizzes and grading.
              <br />
              - Focused on creating an interactive, scalable, and accessible solution.
            </p>
          </div>
     
          <div className="w-full max-w-[500px] mx-auto">
          <Image
              src="./internship/etlsid.png"
              alt="fly91"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-full shadow-lg hover:scale-105 transition-transform"
            />
            </div>

     
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🎓 <strong>Rajalakshmi Engineering College</strong>, Thandalam
              <br />
              Bachelor of Engineering - BE, Robotics and Automation Engineering (2022 - 2026)
            </p>
          </div>
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🎓 <strong>Sri Krishna Matric Hr Sec School</strong>, Arakkonam
              <br />
              12th Grade, Computer Science (2020)
            </p>
          </div>
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🎓 <strong>GHS Thanigaipolur</strong> (Tamil Medium)
              <br />
              Studied up to 10th Grade
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Club and Campus Ambassador",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🏆 <strong>Vice President</strong> - DEVS REC (Technical Club)
              <br />
              <span className="text-xs text-neutral-400">Jul 2024 - Present</span>
            </p>
          </div>
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🏆 <strong>Vice President</strong> - GUVI Geek Networks, IITM Research Park
              <br />
              <span className="text-xs text-neutral-400">May 2024 - Present</span>
            </p>
          </div>
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🎓 <strong>Campus Expert</strong> - GUVI Geek Networks
              <br />
              <span className="text-xs text-neutral-400">Jan 2024</span>
            </p>
          </div>
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              👨‍💻 <strong>GeeksforGeeks</strong> - Campus Mantri
              <br />
              <span className="text-xs text-neutral-400">Apr 2024</span>
            </p>
          </div>
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🎖 <strong>Ninja Leader</strong> - Coding Ninjas
              <br />
              <span className="text-xs text-neutral-400">Jan 2024</span>
            </p>
          </div>
          <div className="p-4 bg-neutral-800/10 dark:bg-neutral-200/10 rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              🏅 <strong>Golden Ambassador</strong> - LetsUpgrade
              <br />
              <span className="text-xs text-neutral-400">Jan 2024 - Feb 2024</span>
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-5">
            <h1 className="text-3xl font-bold text-center mb-8 text-neutral-200 glow-effect shadow-lg">
            <MorphingText
              texts={["My Journey", "Internship", "Education", "Club", "Ambassador"]}
            />
    </h1>
      <Timeline data={data} />
    </div>
  );
}