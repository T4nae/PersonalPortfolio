import {
    Title1,
    Title2,
    Text,
    Badge,
    BadgesContainer,
} from "./components/style";

export default function CaseStudy() {
    return (
        <div>
            <Title1>Introduction</Title1>
            <Text>
                {`Welcome to My Portfolio I'm Tanyam, a seasoned Full Stack Web
                    Developer with a wealth of experience in crafting web
                    applications and services from scratch. As an avid technology
                    enthusiast and a committed lifelong learner, I'm deeply invested
                    in using technology to improve society, businesses, and personal
                    advancement. I derive great satisfaction from problem-solving
                    and am unwaveringly committed to tackling the challenges
                    confronting emerging problems today. This space will give you
                    access to collection of my work, accompanied by comprehensive
                    case studies that delve into my thought process during each
                    project's development. Be sure to check out the links to my most
                    recent ventures. If you haven't done so already, I invite you to
                    navigate to my interactive portfolio using the link above. This
                    website is a dedicated forum for me to share more about myself
                    and provide an in-depth backdrop for my web development
                    projects. I'm a firm believer in the power of a well-curated
                    portfolio for any web developer. It's a platform where your work
                    can shine, and your unique personality can come to the fore. In
                    a profession where the creation of websites and applications is
                    paramount, having an online portfolio is non-negotiable. It's
                    not only a testament to my technical acumen but also serves as a
                    attraction for potential clients. Thank you for visiting! Don't
                    hesitate to browse through the case studies available in the
                    sidebar. I hope you'll find exploring my work as gratifying as I
                found creating it.`}
            </Text>
            <Title2>Links-</Title2>
            <BadgesContainer>
                <Badge
                    text="Github"
                    icon="github"
                    link="https://github.com/T4nae"
                />
                <Badge
                    text="LinkedIn"
                    icon="linkedin"
                    link="https://www.linkedin.com/in/tanyam-baweja/"
                />
            </BadgesContainer>
        </div>
    );
}
