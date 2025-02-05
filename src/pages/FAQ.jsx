import PageHeader from "../components/PageHeader/PageHeader";
import FAQ from "../components/FAQ/FAQ";

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F4]">
            <PageHeader title="FAQ" currentPage="FAQ" />
            <FAQ />
        </div>
    );
} 