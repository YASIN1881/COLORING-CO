import Slider from '../components/Slider/Slider';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import SideBySide from '../components/SideBySide/SideBySide';
import Testimonials from '../components/Testimonials/Testimonials';
import TeamGallerySection from '../components/TeamGallerySection/TeamGallerySection';
import BlogSection from '../components/BlogSection/BlogSection';
import HomeFaq from '../components/HomeFaq/HomeFaq';

const teamMembers = [
    {
        name: 'Peter Rasuli',
        role: 'CEO & Founder',
        image: '/img/peter_rasuli.jpg',
        social: {
          facebook: true,
          instagram: true,
          linkedin: true
        }
    },
    {
        name: 'Elli Ansari',
        role: 'Lead Designer',
        image: '/img/elli_ansari.jpg',
        social: {
          facebook: true,
          instagram: true,
          linkedin: true
        }
    }
];

const blogs = [
    {
      title: "Cupidatat Nonproident, Sunt In Culpa Qui Officia Deserunt",
      image: "/img/blog-1-1.jpg",
      date: {
        day: "20",
        month: "JUNE"
      },
      author: "Admin",
      comments: "2 Comments"
    },
    {
        title: "Cupidatat Nonproident, Sunt In Culpa Qui Officia Deserunt",
        image: "/img/blog-1-2.jpg",
        date: {
          day: "12",
          month: "FEBRUARY"
        },
        author: "Admin",
        comments: "5 Comments"
      }
];

const Home = () => {
    return (
      <div>
            <Slider />
            <Features />
            <Hero />
            <Services />
            <HomeFaq />
            <Projects />
            <SideBySide />
            <Testimonials />
            <TeamGallerySection teamMembers={teamMembers} />
            <BlogSection blogs={blogs} />
        </div>
    );
};

export default Home;