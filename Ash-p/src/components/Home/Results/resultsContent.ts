interface IconConfig {
    type: 'svg';
    path: string;
}

export interface ResultCard {
    title: string;
    description: string;
    icon: IconConfig;
}

export const resultsContent = {
    heading: "The Results",
    cards: [
        {
            title: "40%",
            description: "Our Clients",
            icon: {
                type: "svg" as const,
                path: "/src/assets/home/growth.svg"
            }
        },
        {
            title: "98%",
            description: "Our Clients",
            icon: {
                type: "svg" as const,
                path: "/src/assets/home/star.svg"
            }
        },
        {
            title: "35%",
            description: "Our Clients",
            icon: {
                type: "svg" as const,
                path: "/src/assets/home/rocket.svg"
            }
        }
    ]
}; 