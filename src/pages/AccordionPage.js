import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 0,
            label: "What is React?",
            content: "React is a front end JavaScript framework"
        },
        {
            id: 1,
            label: "Why use React?",
            content: "React is a favorite JS library among engineers"
        },
        {
            id: 2,
            label: "How do you use React?",
            content: "You use React by creating components"
        }
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;
