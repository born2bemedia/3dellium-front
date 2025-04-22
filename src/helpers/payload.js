import { nanoid } from 'nanoid';
import { createElement, Fragment } from 'react';

export function parseJSONToElements(json) {
  if (!Array.isArray(json)) return { elements: [<></>], lastUpdate: null };

  let lastUpdate = null;
  const elements = [];

  if (
    json[0].type === 'paragraph' &&
    json[0].children?.some(child => child.text?.includes('Version'))
  ) {
    lastUpdate = {
      version: json[0].children?.find(child => child.text?.includes('Version'))
        ?.text,
      lastUpdate: json[0].children?.find(child => child.text?.includes('Date'))
        ?.text,
    };

    json.shift();
  }

  elements.push(...json.map(parseNode));

  return { elements, lastUpdate: lastUpdate ?? null };
}

function parseNode(node, listStyle = {}) {
  if (node.type === 'heading') {
    return createElement(node.tag, null, parseChildren(node.children));
  }

  if (node.type === 'paragraph') {
    return <p key={nanoid()}>{parseChildren(node.children)}</p>;
  }

  if (node.type === 'list') {
    const isOrderedList = node.listType === 'number';
    const ListTag = isOrderedList ? 'ol' : 'ul';

    const listStyle = {
      listStyleType: isOrderedList ? 'decimal' : 'disc',
      listPosition: 'inside',
      marginLeft: '20px',
      color: '#2d2d2d',
      marginBottom: isOrderedList ? '15px' : '0',
    };

    return (
      <ListTag key={nanoid()} style={listStyle}>
        {parseChildren(node.children, listStyle)}
      </ListTag>
    );
  }

  if (node.type === 'listitem') {
    return (
      <li key={nanoid()} style={listStyle}>
        {parseChildren(node.children)}
      </li>
    );
  }

  if (node.type === 'text') {
    return <Fragment key={nanoid()}>{node.text}</Fragment>;
  }

  if (node.type === 'linebreak') {
    return <br key={nanoid()} />;
  }

  return null;
}

function parseChildren(children, listStyle = {}) {
  if (!Array.isArray(children)) return '';
  return children.map(child => parseNode(child, listStyle));
}
