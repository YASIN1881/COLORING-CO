import PageHeader from '../components/PageHeader/PageHeader';
import WallDesignHero from '../components/WallDesignHero/WallDesignHero';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

export default function AboutUs() {
    return (
        <div>
            <PageHeader title="About Us" currentPage="About" />
            <WallDesignHero />
            <WhyChooseUs />
        </div>
    );
} 