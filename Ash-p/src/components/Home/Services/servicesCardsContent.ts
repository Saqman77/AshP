export interface ServiceCard {
    id: number;
    title: string;
    subtitle: string;
    description: string[];
    icon: string; // You'll add the icon path here
    readMoreIcon: string; // You'll add the REAR MORE icon path here
    backgroundColor: string;
    readMoreText: string;
    backText: string;
}

export const servicesCardsContent: ServiceCard[] = [
    {
        id: 1,
        title: "Web Development",
        subtitle: "Custom Web Solutions",
        description: [
            "Our manuscript evaluation provides a roadmap to transform your draft from promising to powerful.",
            "Our Manuscript Evaluation Service includes annotations in manuscript and a basic editorial letter.",
            "Rates are determined by the health of the manuscript, your budget, and the word count."
        ],
        icon: "/src/assets/home/services.svg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#e0e0f2", // Example color 1
        readMoreText: "REAR MORE",
        backText: "Back"
    },
    {
        id: 2,
        title: "Mobile Development",
        subtitle: "Native & Cross-Platform Apps",
        description: [
            "Our manuscript evaluation provides a roadmap to transform your draft from promising to powerful.",
            "Our Manuscript Evaluation Service includes annotations in manuscript and a basic editorial letter.",
            "Rates are determined by the health of the manuscript, your budget, and the word count."
        ],
        icon: "/src/assets/home/services.svg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#f2e0e0", // Example color 2
        readMoreText: "REAR MORE",
        backText: "Back"
    },
    {
        id: 3,
        title: "UI/UX Design",
        subtitle: "User-Centered Design",
        description: [
            "Our manuscript evaluation provides a roadmap to transform your draft from promising to powerful.",
            "Our Manuscript Evaluation Service includes annotations in manuscript and a basic editorial letter.",
            "Rates are determined by the health of the manuscript, your budget, and the word count."
        ],
        icon: "/src/assets/home/services.svg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#e0f2e0", // Example color 3
        readMoreText: "REAR MORE",
        backText: "Back"
    },
    {
        id: 4,
        title: "Digital Marketing",
        subtitle: "Growth Strategies",
        description: [
            "Our manuscript evaluation provides a roadmap to transform your draft from promising to powerful.",
            "Our Manuscript Evaluation Service includes annotations in manuscript and a basic editorial letter.",
            "Rates are determined by the health of the manuscript, your budget, and the word count."
        ],
        icon: "/src/assets/home/services.svg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#f2f2e0", // Example color 4
        readMoreText: "REAR MORE",
        backText: "Back"
    },
    {
        id: 5,
        title: "Cloud Solutions",
        subtitle: "Scalable Infrastructure",
        description: [
            "Our manuscript evaluation provides a roadmap to transform your draft from promising to powerful.",
            "Our Manuscript Evaluation Service includes annotations in manuscript and a basic editorial letter.",
            "Rates are determined by the health of the manuscript, your budget, and the word count."
        ],
        icon: "/src/assets/home/services.svg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#e0e0f2", // Example color 1
        readMoreText: "REAR MORE",
        backText: "Back"
    },
    {
        id: 6,
        title: "E-commerce Solutions",
        subtitle: "Online Store Development",
        description: [
            "Our manuscript evaluation provides a roadmap to transform your draft from promising to powerful.",
            "Our Manuscript Evaluation Service includes annotations in manuscript and a basic editorial letter.",
            "Rates are determined by the health of the manuscript, your budget, and the word count."
        ],
        icon: "/src/assets/home/services.svg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#f2e0e0", // Example color 2
        readMoreText: "REAR MORE",
        backText: "Back"
    },
    {
        id: 7,
        title: "IT Consulting",
        subtitle: "Strategic Technology Advice",
        description: [
            "Our manuscript evaluation provides a roadmap to transform your draft from promising to powerful.",
            "Our Manuscript Evaluation Service includes annotations in manuscript and a basic editorial letter.",
            "Rates are determined by the health of the manuscript, your budget, and the word count."
        ],
        icon: "/src/assets/home/services.svg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#e0f2e0", // Example color 3
        readMoreText: "REAR MORE",
        backText: "Back"
    }
]; 