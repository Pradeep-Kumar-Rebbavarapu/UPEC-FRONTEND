import React from 'react';

function CustomHTMLParser({ html }) {
  const parseHTML = (htmlString) => {
    if (typeof DOMParser !== 'undefined') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');

      const elements = Array.from(doc.body.childNodes).map((node, index) => {
        if (node.nodeType === 1) {
          const tagName = node.tagName.toLowerCase();
          const className = getCustomClassName(tagName);

          return React.createElement(tagName, { key: index, className }, null);
        } else if (node.nodeType === 3) {
          return node.nodeValue;
        }
        return null;
      });

      return elements;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
    }
  };

  const getCustomClassName = (tagName) => {
    switch (tagName) {
      case 'h2':
        return 'text-2xl';
      case 'p':
        return 'text-gray-200';
      default:
        return '';
    }
  };

  return <>{parseHTML(html)}</>;
}

export default function Page() {
  const htmlString = '<h2>This is a heading</h2><p>This is a paragraph</p>';

  return (
    <div className="custom-parser-container">
      <CustomHTMLParser html={htmlString} />
    </div>
  );
}
