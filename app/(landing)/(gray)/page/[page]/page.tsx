import DynamicPageSection from "@/src/widgets/page/DynamicPageSection";

export default function DynamicPage({ params }: { params: { page: string } }) {
    return <DynamicPageSection param={params.page} />;
}