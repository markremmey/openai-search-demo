import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Tell me about Azure OpenAI service",
        value: "Tell me about Azure OpenAI service"
    },
    {
        text: "How do I generate embeddings using Azure OpenAI?",
        value: "How do I generate embeddings using Azure OpenAI?"
    },
    {
        text: "How do I configure managed Identity?",
        value: "How do I configure managed Identity?"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
