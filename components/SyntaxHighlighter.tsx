// import prism and the languages you need.
import Prism from "prismjs";
import cn from "classnames";

import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

// include line numbers and line highlights plugin,
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";

// include css for line numbers and highlights
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

//import theme
import "prismjs/themes/prism.min.css";
import { useEffect, useRef, useState } from "react";

type Props = {
  code: string;
  language: string;
  showlineNumbers?: boolean;
  lineHighlights?: number[];
};

const SyntaxHighlighter = ({
  showlineNumbers = true,
  language,
  code,
  lineHighlights,
}: Props) => {
  // 1. Add a state to track if the component has already been shown to the user
  const [visible, setIsVisible] = useState(typeof window === "undefined");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      // 2. create an IntersectionObserver to observe the ref to the div wrapper element.
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      });
      // 3. Wire up ref and observer
      observer.observe(ref.current);
    }
  }, []);

  // 4. Create another effect that watches the visible state and highlight the code.
  useEffect(() => {
    if (visible && ref.current) {
      console.log("highlighting");
      Prism.highlightAllUnder(ref.current);
    }
  }, [visible]);

  return (
    <div ref={ref}>
      <pre
        className={cn({
          "line-numbers": showlineNumbers,
          [`language-${language} `]: true,
        })}
        data-line={lineHighlights?.join(",")}
      >
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};
export default SyntaxHighlighter;
