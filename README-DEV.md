# create project

```bash
npx create-next-app@latest kitaplar
```

# version

## v0.0.0

- [x] create project

## v0.0.1

- [x] change language to ug from en

## v0.0.2

- [x] main entry : src/app/page.tsx , change it

## v0.0.3

- [x] Run the shadcn-ui init command to setup your project:

```bash
npx shadcn-ui@latest init
```

## v0.0.4

- [x] add ukij fonts

## v0.0.5

- [x] add fonts.ts , use different font when wanted

## v0.0.6

- [x] change src/app/layout.tsx

## v0.0.7

- [x] create MaxWidthWrapper.tsx , 这个组件是一个用于包裹其他组件并限制最大宽度的容器组件。

## v0.0.8

- [x] modify src/app/page.tsx

## v0.0.9

- [x] change global.css https://ui.shadcn.com/themes

## v0.0.10

- [x] modify src/app/page.tsx

## v0.0.11

- [x] install shadcn-ui button

```bash
npx shadcn-ui@latest add button
```

## v0.0.12

- [x] modify src/app/page.tsx

## v0.0.13

- [x] install lucide-react

```bash
npm add lucide-react
```

## v0.0.14

- [x] modify src/app/page.tsx , add icons

## v0.0.15

- [x] modify src/app/page.tsx , add text

## v0.0.16

- [x] modify src/app/page.tsx , md:text-left to md:text-right

## v0.0.17

- [x] src/app/layout.tsx change fonts

## v0.0.18 Navbar

- [x] add src/components/Navbar.tsx
- [x] add navbar to src/app/layout.tsx

## v0.0.19 add logo to Navbar

- [x] add src/components/Icons.tsx
- [x] add logo icons to src/components/Navbar.tsx

## v0.0.20 add NavItems to Navbar , "use client" usage

- [x] add src/components/NavItems.tsx
- [x] add "use client" to NavItems.tsx

```bash
You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
```

- [x] declare UI categories to sprate place , src/config/index.ts
- [x] modifile NavItems.tsx , add "PRODUCTION_CATEGORIES.map"
- [x] add NavItem.tsx
