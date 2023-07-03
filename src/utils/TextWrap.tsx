import React from 'react';

interface ITextWrapProps {
  type?: 'word' | 'char';
  children: string;
  separator?: string;
  wrapTag?: string;
  wordClass?: string;
  parentTag?: string;
  parentClass?: string;
}
export default function TextWrap({
  type = 'word',
  separator = ' ',
  children,
  wrapTag = 'span',
  wordClass = '',
  parentTag,
  parentClass,
}: ITextWrapProps) {
  if (type === 'word') {
    const arr = children.split(separator).map((val, idx) => {
      return React.createElement(
        wrapTag,
        { className: wordClass || null, key: idx },
        val,
      );
    });
    if (parentTag !== undefined)
      return React.createElement(
        parentTag,
        { className: parentClass || null },
        arr,
      );
    return <>{arr}</>;
  }
  return null;
}
