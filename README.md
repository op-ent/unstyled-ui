![Banner](assets/banner.svg)

# @op-ent/unstyled-ui

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![MIT License][license-src]][license-href]

`@op-ent/unstyled-ui` is an headless react library.

## Motivation

When it comes to components libaries, there are two main approaches:

-   **Styled components**: The library provides a set of components with a default style. The user can override the style by providing a custom class or style. Examples of such approach are [Bootstrap](https://getbootstrap.com/) and [Material UI](https://material-ui.com/). Those libraries offer customization options, but they are limited and require a lot of work to achieve a custom look and feel. In most cases, it feels like fighting against the library (using `!important` in CSS for example). Using these libraries will result in a library style, not your brand style.
-   **Headless (unstyled) components**: The library provides a set of components without any style but fully functional and accessible. The user is responsible for providing the style. Examples of such approach are [Headless UI](https://headlessui.com/), [Radix Primitives](https://www.radix-ui.com/) or even specialized libraries like [React table](https://tanstack.com/table). It solves some of the problems raised by the use of libraries in the first approach. On the other hand, it requires a compositional implementation (i.e. wrappers) for each project, and it is not possible to style globally, like in a config file.

So here comes `unstyled-ui`, whose purpose is to conciliate both approaches :

-   Use only headless components
-   Do not recreate components libraries for each project, since `unstyled-ui` is a kind of interface
-   Provide all components of a design system. For example, Headless UI provides only a few specific components, but not buttons which is a classic component but is never developed in headless libraries
-   Be able to configure the whole theme at the global level. It's easier because it allows to centralize everything, to share between different projects and to avoid composition problems. Moreover, no decision is taken (about colors for example), it's up to the designers to define them. For instance, the `color` prop is only of type `string` by default, but can be changed via TypeScript module augmentation to `'primary' | 'secondary'`.

## Usage

Install package:

```sh
# npm
npm install @op-ent/unstyled-ui

# yarn
yarn install @op-ent/unstyled-ui

# pnpm
pnpm install @op-ent/unstyled-ui
```

Import example:

```js
// ESM
import { Button } from '@op-ent/unstyled-ui'

// CommonJS
const { Button } = require('@op-ent/unstyled-ui')
```

### Create a config

```ts
// lib/config.ts
import { createConfig } from '@op-ent/unstyled-ui'

declare module '@op-ent/unstyled-ui' {
    interface CustomizableComponentsPropsOverride {
        button: {
            variant: 'primary' | 'secondary'
        }
    }
}

export const { config, extendConfig } = createConfig({
    components: {
        button: {
            defaultProps: {
                variant: 'secondary',
            },
            customProps: ['variant'],
        },
    },
})
```

### Use the config

```tsx
import { ConfigProvider } from '@op-ent/unstyled-ui'
import { config } from '~/lib/config'

function App() {
    return (
        <ConfigProvider config={config}>
            <Button variant="primary">Hello world</Button>
        </ConfigProvider>
    )
}
```

### Styling

Using CSS data parts:

```css
.uui-button[data-part='root'] {
}
.uui-button[data-part='loader'] {
}
.uui-button[data-part='left-icon'] {
}
.uui-button[data-part='right-icon'] {
}
.uui-button[data-part='children'] {
}
.uui-button[data-part='loading-text'] {
}
```

## Planned components & features

> WARNING: This is a work in progress.
>
> -   This list is not complete and may change at any time.
> -   Names may change in the future.

-   [ ] 🚧 ConfigProvider
    -   [ ] 🚧 Behavior
        -   useMemo ?
    -   [ ] ❌ Docs
    -   [ ] ❌ Tests
    -   [ ] ❌ Example theme
-   [ ] 🚧 Button
    -   [ ] 🚧 Behavior
    -   [ ] ❌ Docs
    -   [ ] ❌ Tests
    -   [ ] ❌ Example theme
-   [ ] 🚧 ButtonGroup
    -   [ ] 🚧 Behavior
    -   [ ] ❌ Docs
    -   [ ] ❌ Tests
    -   [ ] ❌ Example theme
-   [ ] 🚧 IconButton
    -   [ ] 🚧 Behavior
    -   [ ] ❌ Docs
    -   [ ] ❌ Tests
    -   [ ] ❌ Example theme
-   [ ] ❌ Badge
-   [ ] ❌ Heading
-   [ ] ❌ Paragraph
-   [ ] ❌ Input
-   [ ] ❌ Modal
-   [ ] ❌ Switch

## API Reference

TBD

## 💻 Development

-   Clone this repository
-   Install dependencies using `yarn install`
-   Watch files in development using `yarn dev`
-   Run interactive tests using `yarn test`

## Inspiration

-   [Material Tailwind](https://github.com/creativetimofficial/material-tailwind)

## License

Published under [MIT License](./LICENSE).

Made with ❤️ by [Florian LEFEBVRE](https://github.com/florian-lefebvre) in France.

---

<table>
  <thead>
    <tr>
      <th colspan="2">Sponsors</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://www.netlify.com" target="_blank">
          <img alt="Netlify banner" height="51px" src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" />
        </a>
      </td>
      <td>
        <a href="https://cleavr.io" target="_blank">
          <img alt="Cleavr banner" height="51px" src="https://hcti.io/v1/image/ae9a047f-22b3-4016-a37a-80f297894678" />
        </a>
      </td>
    </tr>
  </tbody>
</table>

<!-- Badges -->
<!-- https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba -->

[npm-version-src]: https://img.shields.io/npm/v/@op-ent/unstyled-ui?style=flat-square
[npm-version-href]: https://npmjs.com/package/@op-ent/unstyled-ui
[npm-downloads-src]: https://img.shields.io/npm/dm/@op-ent/unstyled-ui?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@op-ent/unstyled-ui
[github-actions-src]: https://img.shields.io/github/workflow/status/op-ent/unstyled-ui/ci/main?style=flat-square
[github-actions-href]: https://github.com/op-ent/unstyled-ui/actions?query=workflow%3Aci
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@op-ent/unstyled-ui?style=flat-square
[bundle-href]: https://bundlephobia.com/result?p=@op-ent/unstyled-ui
[codecov-src]: https://img.shields.io/codecov/c/gh/op-ent/unstyled-ui/main?style=flat-square
[codecov-href]: https://codecov.io/gh/op-ent/unstyled-ui
[license-src]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square
[license-href]: ./LICENSE
