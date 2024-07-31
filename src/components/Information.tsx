interface InformationProps {
    title: string,
    informations: [
        {
            text: string,
            link: string
        }
    ]
}

export default function Information({title, informations}: InformationProps) {
    return(
        <div>
            <h2>{title}</h2>
            {
                informations.map((item) => (
                    <a href={item.link}>{item.text}</a>
                ))
            }
        </div>
    )
}