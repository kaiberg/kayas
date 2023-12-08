function ConcatClasses(...items: (string|undefined)[]) {
    return items.filter((name) => !!name).join(' ')
}

const Delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export {ConcatClasses, Delay};