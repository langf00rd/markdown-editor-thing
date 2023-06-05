# Markdown Editor Thing

[![npm version](https://badge.fury.io/js/markdown-editor-thing.svg)](https://badge.fury.io/js/markdown-editor-thing)

A light-weight, unstyled React markdown rich text editor component.

## Features

- Extremely lightweight 🪶
- Customizable icon support for text editor 🖌️
- Completely unstyled, allowing for flexible styling options 🔥

## Description

The markdown-editor-thing is a React component that provides a simple and intuitive interface for writing markdown.

This component is intentionally unstyled, allowing you to apply your own custom styles and design preferences. Additionally, you have the flexibility to replace the default built-in icons with your own custom icons, text, or images

## Installation

```bash
npm install markdown-editor-thing
```

or

```bash
yarn add markdown-editor-thing
```

## Usage

### Basic example

```jsx
import { Textarea } from "markdown-editor-thing";

const App = () => {
  return <Textarea />;
};
```

### Custom icons

You can customize the icons used in the markdown text editor input by passing your own icons, text, or any other valid HTML element as props. Here's an example:

```jsx
import { Textarea } from "markdown-editor-thing";

const App = () => {
  return (
    <Textarea
      boldIcon={...}
      italicIcon={...}
      underlineIcon={...}
      quoteIcon={...}
      imageIcon={...}
      linkIcon={...}
      ...
    />
  );
};
```

## Tech Stack

React, Typescript, Storybook, Vite

## Feedback

If you have any feedback, shoot me a text on Twitter [@langford-dev](https://twitter.com/langford_dev) or email @ langfordquarshie21@gmail.com

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
