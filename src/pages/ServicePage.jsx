import { useParams } from 'react-router-dom';

const serviceData = {
    residential: {
        title: "Residential Painting",
        description: "Professional painting services for your home",
        features: [
            "Interior and exterior painting",
            "Color consultation",
            "Premium quality paints",
            "Detailed preparation work",
            "Clean and efficient service"
        ]
    },
    commercial: {
        title: "Commercial Painting",
        description: "Complete painting solutions for businesses",
        features: [
            "Office buildings",
            "Retail spaces",
            "Industrial facilities",
            "Project management",
            "Minimal disruption to operations"
        ]
    },
    renovation: {
        title: "House Renovation & Preparation",
        description: "Comprehensive renovation services",
        features: [
            "Surface preparation",
            "Wall repairs",
            "Drywall installation",
            "Texture application",
            "Complete renovation solutions"
        ]
    },
    spray: {
        title: "Spray Painting",
        description: "Professional spray painting services",
        features: [
            "Even coverage",
            "Fast application",
            "Perfect for large surfaces",
            "Modern equipment",
            "Expert technicians"
        ]
    }
};

export default function ServicePage() {
    const { serviceType } = useParams();
    const service = serviceData[serviceType] || serviceData.residential;

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl mb-8 text-gray-600">{service.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                    {/* اینجا می‌توانید تصاویر یا اطلاعات بیشتر اضافه کنید */}
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
                    <p className="text-gray-600">
                        Contact us today for a free consultation and quote for your {service.title.toLowerCase()} project.
                    </p>
                </div>
            </div>
        </div>
    );
} 