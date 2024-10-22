# VisualKit Progress

## Installation

```shell
npm i @visualkit/progress
```

## Usage

```typescript
// Initialize ability
let progress: IProgressAbility | undefined;

// Prepare widget
const progressBar = ProgressKit({
  ability: (ref) => progress = ref,
  type: ProgressType.Bar,
  value: 1,
  min: 0,
  max: 100,
})

// Set progress value
progress.set('value', 50)
```