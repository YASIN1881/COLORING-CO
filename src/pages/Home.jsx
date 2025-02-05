import Slider from '../components/Slider/Slider';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import Testimonials from '../components/Testimonials/Testimonials';
import TeamGallerySection from '../components/TeamGallerySection/TeamGallerySection';
import BlogSection from '../components/BlogSection/BlogSection';
import HomeFaq from '../components/HomeFaq/HomeFaq';


const topImages = [
    { src: '/img/instagram-1-1.webp', alt: 'instagram-1-1', href: 'javascript:void(0)' },
    { src: '/img/instagram-1-2.webp', alt: 'instagram-1-2', href: 'javascript:void(0)' },
    { src: '/img/instagram-1-3.webp', alt: 'instagram-1-3', href: 'javascript:void(0)' },
    { src: '/img/instagram-1-4.webp', alt: 'instagram-1-4', href: 'javascript:void(0)' },
    { src: '/img/instagram-1-5.webp', alt: 'instagram-1-5', href: 'javascript:void(0)' },
    { src: '/img/instagram-1-6.webp', alt: 'instagram-1-6', href: 'javascript:void(0)' },
];

const teamMembers = [
    {
        name: 'Leslie Alexander',
        role: 'Web Developer',
        image: '/img/testi-3-1.webp',
        social: {
          facebook: 'javascript:void(0)',
          instagram: 'javascript:void(0)',
          linkedin: 'javascript:void(0)'
        }
    },
    {
        name: 'Leslie Alexander',
        role: 'Web Developer',
        image: '/img/testi-3-2.webp',
        social: {
          facebook: 'javascript:void(0)',
          instagram: 'javascript:void(0)',
          linkedin: 'javascript:void(0)'
        }
    },
    {
        name: 'Leslie Alexander',
        role: 'Web Developer',
        image: '/img/testi-3-3.webp',
        social: {
          facebook: 'javascript:void(0)',
          instagram: 'javascript:void(0)',
          linkedin: 'javascript:void(0)'
        }
    },
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
      },

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
            <Testimonials />
            <TeamGallerySection 
                topGalleryImages={topImages}
                teamMembers={teamMembers}
                themeColor="#F97316"
            />
            <BlogSection blogs={blogs} />
        </div>
    );
};

export default Home;