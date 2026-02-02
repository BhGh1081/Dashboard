export function formatCurrency (value: number) {

const format = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2
}).format(value)

return format;

}
