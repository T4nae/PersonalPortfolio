import { notFound } from "next/navigation";
import { CaseStudy, index } from "../../../../public/content/caseStudy";
import {
    Badge,
    BadgesContainer,
    Img,
    Title1,
    Title2,
    Text,
} from "../components/style";

type Params = {
    params: {
        title: string;
    };
};

export default function page({ params: { title } }: Params) {
    const Index = index().indexOf(title.replace(/%20/g, " "));
    if (Index === -1) return notFound();
    const data = CaseStudy[Index];
    return (
        <>
            <Title1>{data.title}</Title1>
            <BadgesContainer>
                {data.badges.map((badge, i) => (
                    <Badge
                        key={i}
                        icon={badge.icon}
                        text={badge.name}
                        color={badge.color}
                        textColor={badge.textColor}
                    />
                ))}
            </BadgesContainer>
            {data.image && <Img src={data.image} alt="portfolio" />}

            {data.content.map((content, i) => (
                <div key={i}>
                    {content.title && <Title2>{content.title}</Title2>}
                    {content.text && <Text>{content.text}</Text>}
                    {content.image && (
                        <Img
                            src={content.image.url}
                            centered={content.image.centered}
                            size={content.image.size}
                            alt={content.title || ""}
                        />
                    )}
                </div>
            ))}
        </>
    );
}
