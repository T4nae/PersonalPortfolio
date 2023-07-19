type Params = {
    params: {
        title: string;
    };
};

export default function page({ params: { title } }: Params) {
    return <div>{title}</div>;
}
